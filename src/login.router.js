const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post( "/api/login", ( req, res ) => {
    const { username, password } = req.body;

    if( !username || !password
        || !username.length || !password.length 
    ){
        res.json({
            message: "用户名或密码不得为空",
            url: "./login.html"
        });
    }else if( username != "吴晗羽" || password != "20071026" ){
        res.json({
            message: "用户名或密码错误",
            url: "./login.html"
        });
    }else if( username == "吴晗羽" && password == "20071026" ) {
        const cookie = new Date().getTime();
        
        fs.readFile( "./src/cookie.json", ( err, data ) => {
            if( err ) return console.log( err.message );

            const jsonData = JSON.parse( data );

            jsonData[ Object.keys( jsonData ).length ] = new String( cookie );

            fs.writeFile( "./src/cookie.json", JSON.stringify( jsonData ), err => {
                if( err ) return console.log( err.message );
            } )

        } )

        res.json({
            message: "登录成功",
            url: "./index.html",
            cookie
        });
    }
} )

module.exports = router;