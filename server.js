var express = require('express');
var morgan = require('morgan');
var path = require('path');
var title;
var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one' : {
    title:'Article one',
    heading :'Article one',
    date :' sep 5 ,2016',
    content :` <p>
                Hello i am sahil goyal.
               And this is my first html page.
           </p>
          <p>
               Hello i am sahil goyal.
               And this is my first html page.
          </p>
           <p>
               Hello i am sahil goyal.
               And this is my first html page.
           </p>`
},
  'article-two' : {
      title:'Article two',
    heading :'Article two',
    date :' sep 10,2016',
    content :` <p>
                Hello i am sahil goyal.
               And this is my second html page.
           </p>
          <p>
               Hello i am sahil goyal.
               And this is my second html page.
          </p>
           <p>
               Hello i am sahil goyal.
               And this is my second html page.
           </p>`
  },
  'article-three': {
      title:'Article Three',
    heading :'Article Three',
    date :' sep 15 ,2016',
    content :` <p>
                Hello i am sahil goyal.
               And this is my Third html page.
           </p>
          <p>
               Hello i am sahil goyal.
               And this is my Third html page.
          </p>
           <p>
               Hello i am sahil goyal.
               And this is my Third html page.
           </p>`
  },
};

function createtemplete (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmltemplete = ` 
<html>
   <head>
       <title>
           ${title}
       </title>
           <link href="/ui/style.css" rel="stylesheet" />
   </head>
   <body>
     <div class = "Container">
         <div>
            <a herf = "\">Home</a>
         </div>
        <hr\>
        <h3>
          ${heading}
        </h3>
        <div>
             ${date}
         </div>
        <div>
           ${content}
        </div>
     </div>
   </body>
</html>
`;
return htmltemplete;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;
app.get('/counter',function (req, res){
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
    res.send(createtemplete(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
