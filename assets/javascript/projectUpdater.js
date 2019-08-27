let repos = [];
let htmlStuff;
$.ajax({
    url: "https://api.github.com/users/Mercyfulsin/repos",
    method: 'GET'
}).done(function (reply) {
    reply.forEach(function (content) {
        let raw = `https://raw.githubusercontent.com/Mercyfulsin/${content.name}/master/profile.txt`;
        verifiedRepo(raw) ? console.log("True") : console.log("False");
    });
});

function verifiedRepo(site) {
    $.ajax({
        url: site,
        method: 'GET'
    }).done(function (reply) {
        return true;
    });
}

// $.ajax({
//     url: "https://raw.githubusercontent.com/Mercyfulsin/Word-Guess-Game/master/profile.txt",
//     method: 'GET',
//     statusCode: {
//         404: function () {
//             alert("page not found");
//         }
//     }
// }).done(function (reply) {
//     htmlStuff = reply;
//     addContent();
// });

function addContent() {
    $("#Word-Guess-Game").html(htmlStuff);
}