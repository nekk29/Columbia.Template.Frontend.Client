export const environment = {
  production: true,
  application: {
    code: 'module',
    version: 'v$(ApiOptions.Version)',
    environment: '$(ApiOptions.Environment)',
    companyName: 'Company',
    companyDescription: 'Module Portal',
    companyUrl: 'https://module.com.pe',
    isMockEnabled: true,
  },
  frontend: {
    developerMode: false,
    baseUrl: '$(SecurityOptions.FrontUrl)'
  },
  backend: {
    apiUrl: '$(Backend.ApiUrl)',
    securityUrl: '$(Backend.SecurityUrl)'
  },
  security: {
    issuer: '$(SecurityOptions.Issuer)',
    clientId: 'security',
    scope: 'profile email roles offline_access module.apis',
  },
};
