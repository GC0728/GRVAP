const clicky = $("#btnTest");

function textTest() {
    console.log("Hello")
};

// DOM EVENTS
$(clicky).on("click", textTest);
