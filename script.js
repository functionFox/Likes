function likePlus(userId) {
    var likes = document.querySelector("#" + userId + " .likes");
    likes.innerText++;
}