const config = {};

config.dev = {
  name: "dev",
  port: 41069,
};

config.prod = {
  name: "prod",
  port: 41070,
};

console.log(process.env.NODE_ENV);
const envName = process.env.NODE_ENV;
const envObj = config[envName] ? config[envName] : config.dev;

export default envObj;
