import "./styles.css";
import getHomeContent from "./home.js";
import getMenuContent from "./menu.js";
import getContactContent from "./contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

homeButton.style.background = "rgba(255, 255, 255, 0.65)";
getHomeContent(content);

homeButton.addEventListener("click", () => {
  homeButton.style.background = "rgba(255, 255, 255, 0.65)";
  getHomeContent(content);
});
menuButton.addEventListener("click", () => {
  homeButton.style.background = "none";
  getMenuContent(content);
});
contactButton.addEventListener("click", () => {
  homeButton.style.background = "none";
  getContactContent(content);
});
