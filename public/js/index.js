const podcasts = require("../data/index");

const btnClick = $("#btnTest");

function textTest() {
    $("#dynamicTest").text("This btnClick works!")
    console.log(podcasts);
};

// DOM EVENTS
$(btnClick).on("click", textTest);
