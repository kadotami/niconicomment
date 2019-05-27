(function(){
    
    createCss()
    var html = document.querySelector('html').outerHTML;
    console.log(html);
    console.log(htmlComment(html))
    appendComments(htmlComment(html));

})();

function htmlComment(html) {
    var result = html.match(/<!--(.*?)-->/gi);
    return result;
} 

function createCss() {
    var style = document.createElement("style");
    var css = document.createTextNode('\
        #niconicomments { position: fixed; width: 100%; top: 0; z-index: 99999;}\
        #niconicomments li {position: absolute; width: 100%; z-index: 99999; transition: left 10s linear 0;}\
        #niconicomments li.move { left: -1500px; }\
    ');
    style.appendChild(css);
    document.body.appendChild(style);
}

function appendComments(comments) {
    var ul = document.createElement("ul");
    ul.id = 'niconicomments';
    comments.forEach(element => {
        element = element.replace(/<!--/gi, '');
        element = element.replace(/-->/gi, '');
        var top = getRandomInt(window.innerHeight);
        var li = document.createElement("li");
        var initial_left = window.innerWidth + getRandomInt(window.innerWidth*2)
        li.style = "top:"+top+"px; left:"+ initial_left +"px;";
        var comment = document.createTextNode(element);
        li.appendChild(comment);
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }