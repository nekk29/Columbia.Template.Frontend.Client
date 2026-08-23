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
    apiUrl: 'https://app-module-apis-test.azurewebsites.net/api',
    securityUrl: 'https://app-security-apis-test.azurewebsites.net/api'
  },
  security: {
    issuer: 'https://app-security-apis-test.azurewebsites.net',
    clientId: 'security',
    scope: 'profile email roles offline_access module.apis',
  },
};
