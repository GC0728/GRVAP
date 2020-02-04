// const podcasts = require("../data/index");

const btnClick = $("#header");

function consoleTest(event) { 
    event.preventDefault();
    console.log("This console button test works!");
};

// DOM EVENTS
$(btnClick).on("click", consoleTest);
