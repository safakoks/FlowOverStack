var express = require('express');
var router = express.Router();

var SolrNode = require('solr-node');
    var client = new SolrNode({
        host: 'solr',
        port: '8983',
        core: 'mycore',
        protocol: 'http',
        debugLevel: 'ERROR'
    });

/* GET home page. */
router.get('/', function(req, res, next) {





  res.render('index', { title: 'Please search something' });
});

router.post('/getAnswer',
 function (req, res)
 {
var strQuery = client.query().q('title:' +  req.body.title + '');

 client.search(strQuery, function (err, result) {
   if (err) {
      console.log(err);
      res.send("bi sorun oluştu");
   }else {

        if(result.response.numFound != 0){
        var answer= result.response.docs[0].checkedAnswer;
        if (answer == "") {
          answer = result.response.docs[0].checkedAnser;
        }
        var qtitle = result.response.docs[0].title;
        var question = result.response.docs[0].question;
        res.send({title: qtitle,question:question,
          answer:answer}
        );
}else{

  res.send("No Results");

}

   }

 }); });

module.exports = router;
