const express = require("express");
const bodyParse = require("body-parser");

const loginRouter = require("./login.router");
const indexRouter = require("./index.router");

const app = express();

app.use( bodyParse.urlencoded() );
app.use( loginRouter );
app.use( indexRouter );
app.use( express.static("./static") );
app.use( express.static(".") );
app.use( express.static("./src") );

app.listen( 80, () => {
    console.log("----------|THE WEB SERVER IS SUCCESSFULLY RUNNING AT PORT 80|----------");
} )