// Gregory Lewis | ITEC 362 | JavaScript Project 4
// November 5, 2026 | Random civil engineering quote generator
// These are original project messages, not attributed quotations.
"use strict";

const quotes = [
  { topic: "PUBLIC SAFETY", text: "A strong design begins with responsibility for the people who will use it." },
  { topic: "TEAMWORK", text: "Infrastructure grows stronger when different perspectives meet at the same table." },
  { topic: "WATER RESOURCES", text: "Thoughtful water management connects the needs of a community with the systems around it." },
  { topic: "TRANSPORTATION", text: "A better route connects people to opportunities, not just one place to another." },
  { topic: "INTEGRITY", text: "Good engineering makes room for questions before it makes promises." },
  { topic: "CONTINUOUS IMPROVEMENT", text: "Every careful review is a chance to turn a workable idea into a better solution." }
];

const topicElement = document.querySelector("#quote-topic");
const textElement = document.querySelector("#quote-text");
const countElement = document.querySelector("#quote-count");
const button = document.querySelector("#new-quote");
let currentIndex = 0;

function showNextQuote() {
  // Choose 1 through 5, then wrap around the six-item array.
  // A nonzero offset prevents an immediate repeat.
  const offset = 1 + Math.floor(Math.random() * (quotes.length - 1));
  currentIndex = (currentIndex + offset) % quotes.length;
  const nextQuote = quotes[currentIndex];

  topicElement.textContent = nextQuote.topic;
  textElement.textContent = nextQuote.text;
  countElement.textContent = `Message ${currentIndex + 1} of ${quotes.length}`;
}

button.addEventListener("click", showNextQuote);

