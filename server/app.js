const express = require("express");
const app = express();
const mysql = require("mysql");
const md5 = require("MD5");
const bodyParse = require("body-parser");
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "web2006",
  connectionLimit: 15,
});

// 引入cros模块
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
  })
);

app.use(
  bodyParse.urlencoded({
    extended: false,
  })
);

// 用户登录验证
app.post("/login", (req, res) => {
  let uname = req.body.uname;
  let password = req.body.password;
  let sql =
    "SELECT uid,uname,password,u_nickname,u_phone,u_addr,u_sex FROM user WHERE uname=? AND password=?";
  console.log(uname);
  console.log(password);
  pool.query(sql, [uname, password], (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length == 1) {
      res.send({ message: "登录成功", code: 1, result: result });
    } else {
      res.send({ message: "登录失败", code: 0 });
    }
  });
});

// 请求导航栏数据
app.get("/top", (req, res) => {
  let sql = "SELECT pid,pname,sub_id FROM category";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: "成功", code: 1, res: result });
  });
});

app.get("/", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,pname,p_number,p_class FROM products";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get("/living", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='客厅'";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    // console.log(res);
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get("/bath", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='浴室'";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get("/bed", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='卧室'";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get("/cook", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='厨房'";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get("/dining", (req, res) => {
  let sql =
    "SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='餐厅'";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.get('/carts',(req,res)=>{
    let sql='SELECT p_id,c_count,p_price,p_img,p_title FROM carts';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length!=0){
            res.send({message:'查询成功',code:1,result:result})
        }else{
            res.send({message:"购物车为空",code:0,result:result})
        }
    })
})

app.get("/list", (req, res) => {
  let id = req.query.id;
  let sql =
    "SELECT pname,p_title,p_price,p_desc,p_number,p_img FROM products WHERE p_id=?";
  // console.log(req);
  // console.log(id);
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    // console.log(result);
    res.send({ message: "成功", code: 1, result: result });
  });
});

app.post("/cart", (req, res) => {
  let id = req.body.id; //客户端传过来的商品id
  let count = req.body.count; //客户端传过来的商品数量
  let img=req.body.img;
  let price=req.body.price;
  let title=req.body.title;
  console.log(id,count,img,price,title);
  // 先判断carts数据表当中是否已经包含该商品和数量，通过客户端传来的id进行查询，
  // 如果数据库中没有该商品及数量，直接将商品id和数量count存进数据表当中
  let sql = "SELECT c_id,c_count FROM carts WHERE p_id=?";
  // 将商品添加到数据表语句
  let new_sql = "INSERT INTO carts(c_id,p_id,c_count,p_price,p_img,p_title) VALUES(NULL,?,?,?,?,?)"; 
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length) {
        let _count=result[0].c_count*1+count*1;
        let c_id=result[0].c_id;
        // console.log(_count,c_id);
        // 通过返回结果，将商品数量更新
        pool.query('UPDATE carts SET c_count=? WHERE c_id=?',[_count,c_id],(err,result)=>{
            if(err) throw err;
            if(result.changedRows!=0){
                res.send({code:1})
            }else{
                res.send({code:0})
            }
        })  
    } else {
      pool.query(new_sql, [id, count,price,img,title], (err, result) => {
        if (err) throw err;
        console.log(result);
        if (result.affectedRows==1) {
          res.send({ code: 1 });
        } else {
          res.send({ code: 0 });
        }
      });
    }
  });
});

app.get('/clear',(req,res)=>{
  let sql='TRUNCATE TABLE carts';
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result);
    if(result.fieldCount==0){
      res.send({code:1})
    }else{
      res.send({code:0})
    }
  })
})

app.listen(3000, () => {
  console.log("serve is runing");
});
