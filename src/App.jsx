// src/App.jsx
import React, { useEffect, useState } from 'react';
import keycloak from './keycloak';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setAuthenticated(auth);
    });
  }, []);

  const handleLogout = () => {
    keycloak.logout({ redirectUri: window.location.origin });
  };

  const goToGoogle = () => {
    window.location.href = 'https://google.com';
  };

  return (
    <div>
      {authenticated ? (
        <>
          <h1>Welcome!</h1>
          <button onClick={goToGoogle}>Go to Google</button>
          <br /><br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
