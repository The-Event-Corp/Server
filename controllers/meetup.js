const axios = require('axios')


module.exports = {
  meetupSearch: (req, res) => {
    let words = req.query.topics
    axios
      .get(
        `https://api.meetup.com/topics?search=${words}&sign=true&key=7f4f3b1e4531653372c75567ab693d`
      )

      .then(result => {
        res
          .status(200)
          .json({ msg: `get all paginated meetups`, data: result.data });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", error: err });
      });
  },

  getMeetups: (req, res) => {
    axios
      .get(
        `https://api.meetup.com/topics?&sign=true&key=7f4f3b1e4531653372c75567ab693d`
      )

      .then(result => {
        res
          .status(200)
          .json({ msg: `get all paginated meetups`, data: result.data });
      })
      .catch(err => {
        res.status(500).json({ msg: "err", error: err });
      });
  }
}