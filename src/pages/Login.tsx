import React, {useEffect, useCallback} from 'react';
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import {AuthReducerState} from 'redux-react/reducers/auth-reducer/types';
import Store from 'redux-react/store/types';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from 'redux-react/actions/auth-reducer';

import {auth} from 'services/firebase';

import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from 'assets/react-pizzaria-pedidos/logo-react-zzaria.svg';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const {
    logout: {start: startLogout},
    login: {start: startLogin},
    user: userData,
  } = useSelector<Store, AuthReducerState>(state => state.authReducer);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log('user mudou!!!');
      const payload = {
        user: {
          uid: user?.uid,
          name: user?.displayName,
        },
      };

      const action = {type: '', payload};

      dispatch(action);
    });
  }, [dispatch]);

  useEffect(() => {
    if (!startLogin) return;

    const login = async () => {
      try {
        const provider = new auth.GithubAuthProvider();
        const {user} = await auth().signInWithPopup(provider);

        const payload = {
          user: {
            name: user?.displayName,
            uid: user?.uid,
          },
        };

        dispatch({type: LOGIN_SUCCESS, payload});
      } catch (error) {
        const action = {
          type: LOGIN_FAIL,
          payload: {errorMessage: error.message},
        };

        dispatch(action);
      }
    };

    login();
  }, [dispatch, startLogin]);

  useEffect(() => {
    if (!startLogout) return;

    const logout = async () => {
      try {
        await auth().signOut();

        dispatch({type: LOGOUT_SUCCESS});
      } catch (error) {
        const action = {
          type: LOGOUT_FAIL,
          payload: {errorMessage: error.message},
        };

        dispatch(action);
      }
    };

    logout();
  }, [dispatch, startLogout]);

  const handleLoginWithGithub = useCallback(() => {
    dispatch({type: LOGIN_START});
  }, [dispatch]);

  const handleLogoutWithGithub = useCallback(() => {
    dispatch({type: LOGOUT_START});
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12}>
          <MainLogo />
        </Grid>
        <Grid item container xs={12} justify="center">
          {userData ? (
            <GithubButton onClick={handleLogoutWithGithub}>Sair</GithubButton>
          ) : (
            <GithubButton onClick={handleLoginWithGithub}>Entrar com o Github</GithubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 20px;
`;

const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  && {
    font-size: 20px;
    max-width: 480px;
    padding: 10px;
    text-transform: none;
  }
`;

const MainLogo = styled(Logo)`
  width: 100%;
`;

export default Login;
