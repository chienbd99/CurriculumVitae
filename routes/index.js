var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/contact',function(req,res,next){
  var content='email: '+req.body.email+' hỏi là: '+req.body.cauhoi+"\n";
  console.log(content);
  alert("Cảm ơn "+req.body.email+" đã gửi câu hỏi mình sẽ phản hồi sớm nhất có thể <3");
  fs.writeFile('cauhoi'+req.body.email+'.txt', content , 'utf8', function (err){
     if (err)
      throw err;
    else //nếu không thì hiển thị nội dung ghi file thành công
      console.log('Ghi file thanh cong!');
  });
  res.render('index.ejs');
 
});



module.exports = router;
