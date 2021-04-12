const axios = require("axios").default;

module.exports = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: 5000,
  });
};
