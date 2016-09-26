console.log('Loaded!');

var img = document.getElementById('modi');
var marginLeft =0;
function moveRight ()
{
    marginLeft= marginLeft +1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
    var interval = setInterval (moveRight,10);
};

var counter =0;
var button = document.getElementById('counter');
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var counter=  request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    request.open('GET',"http://sahil4129.imad.hasura-app",true);
request.send(null);
};
