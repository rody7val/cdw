module.exports = {
  database: process.env.MONGO_DB || 'mongodb://localhost/cdw',
  port: process.env.PORT || 80
};
