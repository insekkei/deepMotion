module.exports = {
    // app server启动配置
    SERVERCONFIG: {
        // app port
        port: process.env.PORT || 3001,
        // 开发／生产环境
        nodeEnv: process.env.NODE_ENV || 'dev'
    }
};
