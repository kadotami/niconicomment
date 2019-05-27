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
        #niconicomments li {position: fixed; top: 0; z-index: 99999;}\
    ');
    style.appendChild(css);
    document.body.appendChild(style);
}

function appendComments(comments) {
    var ul = document.createElement("ul");
    ul.id = 'niconicomments';
    comments.forEach(element => {
        var li = document.createElement("li");
        var comment = document.createTextNode(element);
        li.appendChild(comment);
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}