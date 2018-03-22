interface IConfig {
  api: {
    host: string;
    port: number;
  };
  host: string;
  port: number;
}

interface IEnvVariables {
  HOST: string;
  PORT: number;
  API_HOST: string;
  API_PORT: number;
}

export default (env: IEnvVariables): IConfig => ({
  api: {
    host: env.API_HOST,
    port: env.API_PORT,
  },
  host: env.HOST,
  port: env.PORT,
});

export {
  IConfig,
  IEnvVariables,
};
