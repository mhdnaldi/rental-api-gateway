const apiAdapter = require("../../helper/apiAdapter");
const api = apiAdapter(process.env.URL_SERVICE_USERS);

module.exports = {
  register: async (req, res) => {
    try {
      const user = await api.post("/users/register", req.body);
      return res.json(user.data);
    } catch (err) {
      console.log(err);
      if (err.code === "ECONNREFUSED") {
        return res.status(500).json({
          success: false,
          message: "SERVICE UNAVAILABLE",
        });
      }
      const { status, data } = err.response;
      return res.status(status).json(data);
    }
  },
};
