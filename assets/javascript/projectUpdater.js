let repos = [];
let htmlStuff;

$.ajax({
    url: "https://api.github.com/users/Mercyfulsin/repos",
    method: 'GET'
}).then(function (reply) {
    let count = 0;
    reply.forEach(function (content) {
        let rawText = `https://raw.githubusercontent.com/Mercyfulsin/${content.name}/master/profile.txt`;
        let rawImage = `https://raw.githubusercontent.com/Mercyfulsin/${content.name}/master/profile.png`;
        verifiedRepo(rawText, rawImage, content, count, reply.length - 1);
        console.log(count, reply.length);
        count++;
    });
});

function attach() {
    console.log("attached");
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, {
        fullWidth: true
    });
}

function verifiedRepo(site, image, obj, curr, max) {
    $.ajax({
        url: site,
        method: 'GET'
    }).done(function (reply) {
        repos.push(obj);
        addContent(reply, image, obj);
        if (curr === max){
            attach();
        }
    });
}

function addContent(html, image, obj) {
    let container = $("#carousel-slides");
    console.log(container);
    let newSlide = $(`<div style="background-image: url('${image}'); background-position: center center; z-index: 0; opacity: 1; visibility: visible; transform: translateX(0px) translateX(0px) translateX(0px) translateZ(0px);" class="carousel-item white-text">`);
    console.log(newSlide);
    let slideText = $(`<div id="${obj.name}" style="background-color: rgb(114, 196, 196,0.5)">`);
    slideText.html(html);
    console.log(slideText);
    console.log(slideText);
    newSlide.append(slideText);
    container.prepend(newSlide);
}