interface IConfig {
  api: {
    host: string;
    port: number;
  };
  host: string;
  httpsPort: number;
  httpInternalPort: number;
}

interface IEnvVariables {
  HOST: string;
  HTTPS_PORT: number;
  HTTP_INTERNAL_PORT: number;
  API_HOST: string;
  API_PORT: number;
}

export default (env: IEnvVariables): IConfig => ({
  api: {
    host: env.API_HOST,
    port: env.API_PORT,
  },
  host: env.HOST,
  httpInternalPort: env.API_PORT,
  httpsPort: env.HTTPS_PORT,
});

export {
  IConfig,
  IEnvVariables,
};
