var axios = require("axios");

module.exports = {
  eventAll: (req, res) => {

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
  },

  eventAllcategories: (req,res) => {
    axios.get('https://www.eventbriteapi.com/v3/categories?token=MR4ZLEKYYABW5PBG7W7U')
        .then(result=>{
            console.log("masuk eventbrite",result.data.categories);
            
            res
            .status(200)
            .json({ msg: 'get all categories', data: result.data.categories})
        })
        .catch(err=>{
          res.status(500).json({ msg: "err", error: err });
        })
  },

  eventByCategory: (req,res) => {
    // `localhost:3000/eventBrite/categories?categories=${}`
    axios.get(`https://www.eventbriteapi.com/v3/events/search?categories=${req.params.id}&token=MR4ZLEKYYABW5PBG7W7U`)
    .then(result=>{
        var events = []
        for(var i = 0; i < result.data.events.length; i++){
            events.push(result.data.events[i].name)
        }
        // console.log("masuk eventbrite cate",events);
        res
        .status(200)
        .json({ msg: 'get all event by category', data: events})
    })
    .catch(err=>{
        res.json(err)
    })
  }
};
