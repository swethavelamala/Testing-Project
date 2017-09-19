var express = require("express");

var app = express();

app.listen(9000, "0.0.0.0" , function(){
    console.log("started lisenting on 9000")
})


var silverlining = require("silverlining");

var url = "https://seentrillainiagetingtorg:ffbadb30febd764cfbde33bb2830e3cbf795c563@21ec3e02-ef2e-4aee-a9de-34327407cc4c-bluemix.cloudant.com";

var ideaDetailsDB = silverlining(url,"suntrust_aicideas_track_db_dev");

// app.get('/test12', function(req, res){
  // db.query({
      // project_id: req.query.ID
  // })
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });

 app.get("/test", function(req, res){
   ideaDetailsDB.all()
	.then(function(data){
     res.json(data)
   })
   .catch(function(err){
     res.json(err)
   });
 });

// app.get("/update", function(req, res){
  // db.update("838376e04d64cd96796c99fc0d0af1db",{segment: "Consumer"}, true )
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });

// app.get("/insert", function(req, res){
  // db.insert({project_id: "ST0067543788"},{application: "CLP"}, {wsm_manager: "Durga Narla"}, {owning_ws: "CLP"})
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });


// app.get("/delete", function(req, res){
  // db.del("890ca74f7ce203bacc8c26654d6546f3")
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });

// app.get('/api/projectdetails/status', function(req, res){
  // db.query({
      // 'overall_status' : "red"
  // })
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });

// app.get("/insert", function(req, res){
  // db.insert({project_id: "ST0067543788"},{application: "CLP"}, {wsm_manager: "Durga Narla"}, {owning_ws: "CLP"})
  // .then(function(data){
    // res.json(data)
  // })
  // .catch(function(err){
    // res.json(err)
  // });
// });
/* ********** */
app.post('/api/ideadetails/insert',function(req,res){
     //console.log(req.body.Details)
    ideaDetailsDB.insert(JSON.parse(req.body.Details))
       .then(function(data){
        //res.json(data)
        res.json({success: true, data:data})
    })
    .catch(function(err){
        console.log(err)
         res.json(err)
         
    });
});

app.post('/api/ideadetails/update',function(req,res){
    console.log("Entered in Update")
    console.log(req.body.Details)
    ideaDetailsDB.update(req.body.id,JSON.parse(req.body.Details),true)
        .then(function(data){
        //res.json(data)
        res.json({success: true, data:data})
     })
    .catch(function(err){
        console.log(err)
         //res.json(err)
         res.json({success: false, err:err})
    })
})