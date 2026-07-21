export default function getContactContent(content) {
  content.innerHTML = "";
  const header = document.createElement("h2");
  header.classList.add("contact-header");
  header.textContent = "Welcome to the Contact Page!";
  content.appendChild(header);
}
