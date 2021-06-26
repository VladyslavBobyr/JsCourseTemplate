'use strict'
var myDiv = document.getElementById('container');
var myImages = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var myArr = [{name: 'cat1', url: './img/1.jpg', description: 'nice cat #1'},
             {name: 'cat2', url: './img/2.jpg', description: 'nice cat #2'},
             {name: 'cat3', url: './img/2.jpg', description: 'nice cat #3'}
]
var createElement = (tag, cls, content='', flag=false ) => {
    var newTag = document.createElement(tag);
    newTag.classList.add(cls);
    if (flag) newTag.src = content;

}

var createImage = (el) => {
    {
        var img = document.createElement('img');
        img.src='./img/'+el;
        img.style.width = "200px";
        img.classList.add('nice-cats');
        myDiv.appendChild(img);
    }

}
createElement('div','container');




