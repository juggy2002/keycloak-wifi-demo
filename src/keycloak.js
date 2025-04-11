// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://127.0.0.1:4040/',
  realm: 'myrealm',
  clientId: 'my-client',
});

export default keycloak;
