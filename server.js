const express = require('express');


const app = express();

app.use(express.static("public",{
  setHeaders:function(res,path,stat){
    res.set('Cross-Origin-Opener-Policy','same-origin');
    res.set('Cross-Origin-Embedder-Policy','require-corp');
  },
}));

// app.get('/', function (req, res) {
//   res.send('Hello World');
// });


app.listen(3000);