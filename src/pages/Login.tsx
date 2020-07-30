import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {auth} from 'services/firebase';

import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from 'assets/react-pizzaria-pedidos/logo-react-zzaria.svg';

import {User} from 'firebase';

const Login: React.FC = () => {
  const [userLogged, setUserLogged] = useState<null | User>(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => setUserLogged(user));
  }, []);

  const handleLoginWithGithub = useCallback(() => {
    const provider = new auth.GithubAuthProvider();
    auth().signInWithRedirect(provider);
  }, []);

  const handleLogoutWithGithub = useCallback(async () => {
    try {
      await auth().signOut();
      setUserLogged(null);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <Container>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12}>
          <MainLogo />
        </Grid>
        <Grid item container xs={12} justify="center">
          {userLogged ? (
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
