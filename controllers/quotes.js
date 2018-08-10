var axios = require('axios')

module.exports = {
    quotes: (req,res) => {
        axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(result=>{
            res.json(result.data)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}

