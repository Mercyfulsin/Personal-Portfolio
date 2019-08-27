let repos;
let htmlStuff;
$.ajax({
    url: "https://api.github.com/users/Mercyfulsin/repos",
    method: 'GET'
}).done(function(reply){
    console.log("reply",reply);
    repos = reply;
});

$.ajax({
    url: "https://raw.githubusercontent.com/Mercyfulsin/Mercyfulsin.github.io/master/index.html",
    method: 'GET'
}).done(function(reply){
    htmlStuff = reply;
    addContent();
});

function addContent(){
    console.log($("#Word-Guess-Game").html());
    console.log(htmlStuff)
}