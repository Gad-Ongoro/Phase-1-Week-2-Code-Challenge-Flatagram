// write your code here
let form = document.querySelector("form");
let cardTitle = document.querySelector("h2#card-title");
let cardImg = document.querySelector("img#card-image");
let likeBtn = document.querySelector("button#like-button");
let initialComments = document.querySelectorAll("ul#comments-list li");
let commentUl = document.querySelector("ul");
let likeCount = document.querySelector("span#like-count");
let input = document.querySelector("input");
let commentBtn = document.querySelector("button.comment-button");
//console.log(commentUl);

/* Removes the default page reload behaviour when the form is submited */
function removeDefaultSubmit(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        //console.log(e);
    })
};
removeDefaultSubmit();

/* fetch 1 ~ img and title from server */
function imgTitleLikesFetch() {
    fetch("http://localhost:3000/images")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        cardImg.src = data[0].image;
        cardTitle.innerHTML = data[0].title;
        //console.log(data);
    });
}
imgTitleLikesFetch();

/* fetch 2 ~comments */
function fetchComments(){
    fetch("http://localhost:3000/comments")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
            commentUl.innerHTML = `
                <li> ${data[0].content} </li>
                <li> ${data[1].content} </li>
                <li> ${data[2].content} </li>
            `;
    });
};
fetchComments();

/* removes the initial comments */
function removeInitialComments(){
    initialComments.forEach(function(li){
        li.remove();
        //li.style.display = "none";
    });
};
removeInitialComments();

/* event liteners*/
//adds a comment
function addComment(){
    commentBtn.addEventListener("click", (e) => {
        let newCommentLi = document.createElement("li");
        newCommentLi.innerHTML = input.value;
        commentUl.append(newCommentLi);
        //console.log(e);
    })
};
addComment();

//increments likes
function incrementLikes(){
    let x = 0;
    likeBtn.addEventListener("click", function(e){
        likeCount.innerHTML = `${++x} likes`;
        //console.log(likeCount.innerHTML);
    })
};
incrementLikes();