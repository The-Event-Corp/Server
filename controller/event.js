var axios = require("axios");

module.exports = {
  eventAll: (req, res) => {
    var request = require("request");

    axios
      .get(
        `https://www.eventbriteapi.com/v3/events/search/?token=MR4ZLEKYYABW5PBG7W7U`
      )

      .then(result => {
        res
          .status(200)
          .json({ msg: `get all paginated events`, data: result.data });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", error: err });
      });
  },

  eventSearch: (req, res) => {
    var request = require("request");

    var request = require("request");

    axios
      .get(
        `https://www.eventbriteapi.com/v3/events/search?q=${
          req.query.name
        }?&token=4J3BNKUGRY6YKZNKUI7P`
      )

      .then(result => {
        res
          .status(200)
          .json({ msg: `get all paginated events`, data: result.data });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", error: err });
      });
  }
};
