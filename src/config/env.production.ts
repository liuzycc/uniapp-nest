export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3000,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: '82.157.175.138',
    port: 3306,
    username: 'root',
    password: 'liuziyi5211314',
    database: 'yr-uniapp',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体路径
    synchronize: true,
  },
};
