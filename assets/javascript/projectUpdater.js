let repos = [];
let htmlStuff;
$.ajax({
    url: "https://api.github.com/users/Mercyfulsin/repos",
    method: 'GET'
}).done(function (reply) {
    let count = 0;
    reply.forEach(function (content) {
        let raw = `https://raw.githubusercontent.com/Mercyfulsin/${content.name}/master/profile.txt`;
        verifiedRepo(raw, content, count);
        console.log("Checking " + count);
        count++
    });
});

function verifiedRepo(site, obj, cnt) {
    $.ajax({
        url: site,
        method: 'GET'
    }).done(function (reply) {
        repos.push(obj);
        addContent(reply, obj);
    });
}

function addContent(html, obj) {
    $("#" + obj.name).html(html);
}