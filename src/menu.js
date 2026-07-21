export default function getMenuContent(content) {
  content.innerHTML = "";
  const header = document.createElement("h2");
  const para = document.createElement("p");
  para.textContent = "This is menu paragraph!";
  header.classList.add("menu-header");
  header.textContent = "Welcome to the Menu Page!";
  content.appendChild(header);
  content.appendChild(para);
}
