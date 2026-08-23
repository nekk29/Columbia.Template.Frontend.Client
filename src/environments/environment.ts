export const environment = {
  production: false,
  application: {
    code: 'module',
    version: 'v0.0.1',
    environment: 'Local',
    companyName: 'Company',
    companyDescription: 'Module Portal',
    companyUrl: 'https://module.com.pe',
    isMockEnabled: true,
  },
  frontend: {
    developerMode: false,
    baseUrl: 'https://localhost:5174'
  },
  backend: {
    apiUrl: 'https://localhost:7204/api',
    securityUrl: 'https://localhost:7202/api'
  },
  security: {
    issuer: 'https://localhost:7202',
    clientId: 'module',
    scope: 'profile email roles offline_access module.apis',
  },
};
