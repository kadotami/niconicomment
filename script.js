var start = function() {
    return function() {
        var ul = document.getElementById('niconicomments');
        ul.childNodes.forEach(element => {
            console.log(element);
            element.className = 'move';
        });
    }
}

function innerJSComments(scripts) {
    comment = [];
    for (var i = 0; i < scripts.length; i++) {
        text = scripts[i].innerText
        var block = text.match(/\/\*(.*?)\*\//gim);
        if (!block) block = [];
        text = text.replace(/https?:\/\//gi, '');
        var inline = text.match(/\/\/(.*?)\n/gim);
        if (!inline) inline = [];

        comment.concat(block).concat(inline);
    }
    return comment;
}

function htmlComment(html) {
    var result = html.match(/<!--(.*?)-->/gim);
    return result;
} 

function createCss() {
    var style = document.createElement("style");
    var css = document.createTextNode('\
        #niconicomments { position: fixed; width: 100%; top: 0; z-index: 99999;}\
        #niconicomments li {list-style: none; position: absolute; width: 100%; z-index: 99999; }\
        #niconicomments li.move { left: -1500px !important;}\
    ');
    style.appendChild(css);
    document.body.appendChild(style);
}

function appendComments(comments) {
    var ul = document.createElement("ul");
    ul.id = 'niconicomments';
    for (var i = 0; i < comments.length; i++) {
        var element = comments[i];
        element = element.replace(/<!--/gi, '');
        element = element.replace(/-->/gi, '');
        var top = getRandomInt(window.innerHeight);
        var li = document.createElement("li");
        var font_size = 12 + getRandomInt(25);
        var duration = 10 + getRandomInt(15);
        var deray = getRandomInt(10);
        var initial_left = window.innerWidth + getRandomInt(window.innerWidth*2)
        li.style = "top:"+top+"px;\
                    transition: left "+ duration + "s linear " + deray +"s; \
                    left:"+ initial_left +"px;\
                    font-size:" + font_size +"px;";
        var comment = document.createTextNode(element);
        li.appendChild(comment);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

(function(){
    createCss()
    var html = document.querySelector('html').outerHTML;
    var html_comment = htmlComment(html);
    // var js_comment = jsComment(html);
    var scripts = document.getElementsByTagName('script');
    var js_comment = innerJSComments(scripts)
    console.log(js_comment);
    var comments = html_comment.concat(js_comment);
    console.log(comments);
    appendComments(comments);
    setTimeout(start(),500); 
})();