import React from 'react';
import {Switch, Route} from 'react-router-dom';

const routes = [
  {path: '/route1', content: 'route 1'},
  {path: '/route2', content: 'route 2'},
];

const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Switch>
        {routes.map(({path, content}) => (
          <Route key={path} path={path}>
            <div>{content}</div>
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Home;
