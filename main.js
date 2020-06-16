const quoteParagraph = document.getElementById("quoteParagraph");
const authorParagraph = document.getElementById("authorParagraph");
const getQuoteBtn = document.getElementById("getQuoteBtn");
const loaderHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;

// Quotes is generated from external API from following URL
// https://programming-quotes-api.herokuapp.com/
const API_URL = "https://programming-quotes-api.herokuapp.com/quotes/random";

//Event listener for when user clicks on get new quote btn
getQuoteBtn.addEventListener("click",getNewQuote);

function getNewQuote(){

    // Set CSS loader in DOM
    quoteParagraph.innerHTML = loaderHTML;
    authorParagraph.innerText = "";

    fetch(API_URL)
    .then((response) => {
        if(!response.ok)
            throw new Error("Network problems while getting new quote");
        return response.json();
    })
    .then((quote) => {
        //Set new quote and remove CSS loader
        quoteParagraph.innerHTML = `"${quote.en}"`;
        authorParagraph.innerText = `~ ${quote.author}`
    })
    .catch((error) => {
        // Set new error alert and remove CSS loader
        quoteParagraph.innerHTML = `"${error}"`;
        authorParagraph.innerText = ``;
        console.log(error);
    })
}