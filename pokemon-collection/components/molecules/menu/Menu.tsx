import React from 'react';
import { Avatar, Button } from '@material-ui/core';

function Menu({ user }: any) {
  return (
    <>
      {!user ? (
        <Button color="inherit">
          <a href="/api/auth/login">Connexion</a>
        </Button>
      ) : (
        <>
          <Button color="inherit" href="/api/auth/logout">
            <a href="/api/auth/logout">Déconnexion</a>
          </Button>
          <Avatar alt={user?.name} src={user?.picture} />
        </>
      )}
    </>
  );
}

export default Menu;
