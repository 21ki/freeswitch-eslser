const nightlyConf = {
  // api server listening IP
  host: "0.0.0.0",
  // api server listening port
  port: "80",
  // good log options
  goodOptions: {
    ops: {
      interval: 30 * 1000
    },
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: ['debug','info','warn','error'], response: '*' }]
      }, {
        module: 'good-console'
      }, 'stdout'],
    }
  },
  // debug
  debug: {
    isDebug: false,
    tenantId: 'math.quickdesk.cn',
  },
  channelConfig: {
    baseUrl: "http://10.0.4.10:10030",
    apiVersion: "/api/v0"
  },
  //druid
  druidOptons:{
    host:'druid-broker',
    port:8082,
    verbose: false,
    timeout: 30 * 1000,
    timezone:'Asia/Hong_Kong',
    output: 'json',
  },
  // 自定义业务相关插件关于路由的配置
  routeOptions: {
    config: {
      auth: 'jwk', // false ,'default','jwt','jwk' 默认为:jwk
      cache: {
        expiresIn: 60 * 60 * 1000,
        //expiresAt:'23:59',
        privacy: 'private',
        statuses: [200,304],
      },
      cors: {
        origin: ['*'],
      },
      state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
      },
    }
  },
  // redis config
  redisOptions: {
    host: '10.0.3.10',
    port: 6379,
    password: '',
  },

};
export  default nightlyConf;