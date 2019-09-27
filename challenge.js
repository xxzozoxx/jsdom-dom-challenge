let count = 0;
let docount;
let likes = document.querySelector('.likes');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let submitBtn = document.getElementById('submit');
let like = document.getElementById('heart');
let form = document.getElementById('comment-form');
let pause = document.getElementById('pause');

function counting() {
    docount = setInterval(function() {
        let counter = document.getElementById('counter');
        counter.innerHTML = ++count;
    }, 1000)
}
window.load = counting();
pause.onclick = function() {
    if (pause.innerHTML == 'resume') {
        counting();
        submitBtn.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        pause.innerHTML = 'pause';
    } else {
        clearInterval(docount);
        submitBtn.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        pause.innerHTML = 'resume';
    }
}
plus.onclick = function increment() {

    counter.innerHTML = ++count;

};
minus.onclick = function decrement() {
    counter.innerHTML = --count;
}

function liking() {
    let likecount = 1;
    //let num = parseInt(counter.innerHTML);
    //let list = document.createElement('li');
    // list.id = 'num-' + num;
    let num = parseInt(counter.innerHTML);
    let list = document.getElementById("num-" + num) || document.createElement('li');
    if (list.id.slice(0, 3) === "num") {
        let innerHtml = list.innerHTML
        innerHtml = innerHtml.split(" ")
        likecount = innerHtml[innerHtml.length - 1];
        likecount = parseInt(likecount) + 1
        list.innerHTML = `${num} is liked ${likecount}`;
    } else {
        list.id = 'num-' + num;
        list.innerHTML = `${num} is liked ${likecount}`;
        likes.appendChild(list);
    }
    //list.innerHTML = `${num} is liked ${likecount}`;
    //likes.appendChild(list);
    //     if (num === index) {
    //         ++likecount;
    //         list.innerHTML = `${num} is liked ${likecount}`;
    //         likecount = 1;
    //     } else {
    //         likecount = 1;
    //         list.innerHTML = `${num} is liked ${likecount}`;
    //     }
}
like.addEventListener('click', liking);
// if (num == num) {
//     list.innerHTML = num + " is liked " + likecount++;
// } else {
//     likecount = 1;
//     list.innerHTML = num + " is liked " + likecount;
// }
//likes.appendChild(list);
//}
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let input = document.getElementById('comment-input');
    let comments = document.querySelector('#list');
    let inputVal = input.value;
    input.value = "";
    let addComment = document.createElement('div');
    addComment.innerHTML = inputVal;
    comments.appendChild(addComment);

});