import "./styles.css";
import getHomeContent from "./home.js";
import getMenuContent from "./menu.js";
import getContactContent from "./contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

homeButton.addEventListener("click", () => getHomeContent(content));
menuButton.addEventListener("click", () => getMenuContent(content));
contactButton.addEventListener("click", () => getContactContent(content));
