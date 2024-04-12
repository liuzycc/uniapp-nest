import development from './env.development';
import production from './env.production';

const configs: any = {
  development,
  production,
};
const env = configs[process.env.NODE_ENV || 'development'];
export { env };
