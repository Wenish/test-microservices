export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    redis: {
      host: process.env.REDISHOST,
      port: parseInt(process.env.REDISPORT, 10)
    }
  });