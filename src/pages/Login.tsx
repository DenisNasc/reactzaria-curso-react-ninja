import React from 'react';
import styled from 'styled-components';
import {Button, Grid} from '@material-ui/core';
import {ReactComponent as Logo} from 'assets/react-pizzaria-pedidos/logo-react-zzaria.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={5} justify="center">
        <Grid item xs={12}>
          <MainLogo />
        </Grid>
        <Grid item container xs={12} justify="center">
          <GithubButton>Entrar com o Github</GithubButton>
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
