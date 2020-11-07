const express=require('express');
const app=express();
const mysql=require('mysql');
const md5=require('MD5')
const bodyParse=require('body-parser');
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'web2006',
    connectionLimit:15
})

// 引入cros模块
const cors=require('cors');
app.use(cors({
    origin:['http://localhost:8080','http://127.0.0.1:8080']
}))

app.use(bodyParse.urlencoded({
    extended:false
}))

// 用户登录验证
app.post('/login',(req,res)=>{
    let uname=req.body.uname;
    let password=req.body.password;
    let sql='SELECT uid,uname,password,u_nickname,u_phone,u_addr,u_sex FROM user WHERE uname=? AND password=?';
    console.log(uname);
    console.log(password);
    pool.query(sql,[uname,password],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length==1){
            res.send({message:'登录成功',code:1})
        }else{
            res.send({message:'登录失败',code:0})
        }
    })
})

// 请求导航栏数据
app.get('/top',(req,res)=>{
    let sql='SELECT pid,pname,sub_id FROM category';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({message:'成功',code:1,res:result})
    })
})

app.get('/',(req,res)=>{
    let sql='SELECT p_id,p_title,p_price,p_img,p_desc,pname,p_number,p_class FROM products';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/living',(req,res)=>{
    let sql="SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='客厅'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(res);
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/bath',(req,res)=>{
    let sql="SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='浴室'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/bed',(req,res)=>{
    let sql="SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='卧室'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/cook',(req,res)=>{
    let sql="SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='厨房'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/dining',(req,res)=>{
    let sql="SELECT p_id,p_title,p_price,p_img,p_desc,p_number FROM products WHERE pname='餐厅'";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/list',(req,res)=>{
    let id=req.query.id;
    let sql='SELECT pname,p_title,p_price,p_desc,p_number,p_img FROM products WHERE p_id=?';
    // console.log(req);
    // console.log(id);
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        // console.log(result);
        res.send({message:'成功',code:1,result:result})
    })
})

app.get('/cart',(req,res)=>{
    let id=req.query.id;
    let sql='SELECT p_title,p_price,p_img FROM products WHERE p_id=?';

    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send({message:'成功',code:1,result:result})
    })
})

app.listen(3000,()=>{
    console.log('serve is runing');
})