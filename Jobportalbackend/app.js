const express = require('express')
var mysql = require('mysql');
var app = new express();
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var con = new mysql.createConnection({
  host: '127.0.0.1',
  port : '3306',
  user: 'root',
  password: 'hari',
  database : 'Students'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.post('/create',function(req,response){
    var name = (req.body.name);
    var email = (req.body.email);
    var cgpa= (req.body.cgpa);
    var univ = (req.body.univ);
    var deg = (req.body.deg);
    var company = (req.body.company);
    var position = (req.body.position);
    var work = (req.body.work);
    var projecttitle1 = (req.body.projecttitle1);
    var languages1 = (req.body.languages1);
    var projdesc1 = (req.body.projdesc1);
    var projecttitle2 = (req.body.projecttitle2);
    var languages2 = (req.body.languages2);
    var projdesc2 = (req.body.projdesc2);
    var linkedin = (req.body.linkedin);
    var portfolio = (req.body.portfolio);
    var education = (req.body.education);

    console.log(email);

    var sql = "INSERT INTO student_desc VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    var input = [name,email,cgpa,univ,deg,company,position,work,projecttitle1,languages1,projdesc1,projecttitle2,languages2,projdesc2,linkedin,portfolio,education];
        con.query(sql,input,function(err,res){
            if (err) throw err;
            console.log('1 record inserted')
            response.send({
                "sucess": "Registered"
            })
    });

})


app.post('/comp',function(req,res){
      var cname = req.body.cname;
      var head = req.body.head;
      var job = req.body.job;
      var loc = req.body.loc;
      var sal = req.body.sal;
      var url = req.body.url;
    
        var sql = "INSERT INTO company_desc VALUES (?,?,?,?,?,?);";
        input = [cname,head,job,loc,sal,url]
            con.query(sql,input,function(err,res){
                if (err) throw err;
                console.log('1 record inserted')
        });
    })

app.get('/home',function(req,res){
    // if(req.query.isBookmarked != null){
    //     var flag = req.query.isBookmarked;
    //     var sql = "SELECT * from company_desc where flag='" + flag +"'";
    // }else{
    //     var sql = "SELECT * from company_desc";
    // }
    
    var sql = "SELECT * from company_desc";
    con.query(sql,function(err,result,fields){
        if(err) throw err;
        res.send(result)
    })
    
})

app.post('/register',function(req,response){
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.pwd;
    console.log(name);
    var sql = "INSERT INTO Students VALUES ('" + name + "','" + email + "', '" + pwd + "');";
    con.query(sql,function(err,res){
        if (err) throw err;
        console.log('1 record created')
        response.send({
            "sucess": "Registered"
        })
    });
})
var email,pwd;
var sql;
var input,input1;
var arr = [];
var count = 0;
var sql1;

app.post('/login',function(req,res){
    email = req.body.email;
    pwd = req.body.pwd;
    sql = "SELECT email,pwd from Students where email = ? and pwd = ? ";
    input = [email,pwd]
    input1 = [email]
    con.query(sql,input,function(err,result,fields){
        if (err) throw err;
        if(result.length == 1){
           res.status(204).send("login successful")
           con.query(sql1,input1,function(err,result,fields){
               console.log(result)
           })

        }else{
           res.status(200).send("login failed")
        }
        
    });
})

app.get('/getdetails',function(req,res){
    email = req.query.hari;
    console.log(email)
    sql1 = "SELECT * from student_desc where email = ?"
    input1 = [email]
    con.query(sql1,input1,function(err,result,fields){
        console.log(result)
        res.status(200).send(result);
    })
})
app.put('/edit',function(req,res){
    title = req.body.title;
    email = req.body.email;
    position = req.body.position
    work = req.body.work
    project1 = req.body.project1;
    language1 =  req.body.language1;
    projdesc1 = req.body.projdesc1;
    project2 = req.body.project2;
    language2 = req.body.language2;
    projdesc2 = req.body.projdesc2;
    deg = req.body.deg;
    cgpa = req.body.cgpa;
    portfolio = req.body.portfolio;
    linkedIn = req.body.linkedIn;

    sql1 = "UPDATE Student_desc SET company='" + title + "', position ='" + position + "',work='" + work +"',projecttitle1='" + project1 + "',languages1='" + language1 + "',projdesc1='" + projdesc1 + "',projecttitle2='" + project2 + "',languages2='" + language2 + "',deg='" + deg +"',cgpa='" + cgpa + "',portfolio='" + portfolio + "',linkedIn='" + linkedIn + "' where email='" + email + "'";
   // sql2 = "UPDATE Student_desc SET projecttitle1='" + project1 + "',languages1='" + language1 + "',projdesc1='" + projdesc1 + "',projecttitle2='" + project2 + "',languages2='" + language2 + "',projdesc2='" + projdesc2 + "', where email='" + email + "'";

    console.log(sql1)
    input = [title,email,work,position]
    con.query(sql1,input,function(err,result){
        //console.log(result)
    })
    // con.query(sql2,input,function(err,result){
    //     console.log(result)
    // })
   
    //console.log(position);

})
app.get('/search',function(req,res){
    search = req.query.search
    console.log(search)
    sql = "SELECT * from company_desc where cname = '" + search + "'";
    con.query(sql,function(err,result){
        res.send(result)
    })
    
})


let port = 1200;


app.listen(port,function(){
    console.log("You are listening to port " + port);
});