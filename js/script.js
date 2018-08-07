"use strict";

$(document).ready (() => {

    $.get("https://www.reddit.com/r/aww/.json").then((data) => {
        console.log(data);
        $.each(data.data.children, function (index, post) {

            if (index > 0 && index <= 10) {
                console.log(post.data.title);
            $(".posts").append(`
            <a class="links" href="${post.data.url}">
            <section class="post_item">
            <h4 class="title">${post.data.title}</h4>
            <img src="${post.data.thumbnail}"></img>
            </section>
            <a>
            `)
            }
        });
    });
});