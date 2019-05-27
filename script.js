(function(){
    var html = document.querySelector('html').outerHTML;
    console.log(html);
    console.log(htmlComment())

})();

function htmlComment() {
    comments = [];
    var d = document.getElementsByTagName("html")[0].childNodes;
    for (i=0;i<d.length;i++){
        if(d[i].nodeType == 8){
            comments.push(d[i].data);
        }
    }
    return comments
} 
