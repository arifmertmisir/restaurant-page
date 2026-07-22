import locationIcon from "./icons/map-marker.svg";
import phoneIcon from "./icons/phone.svg";
import emailIcon from "./icons/email-outline.svg";

export default function getContactContent(content) {
  content.innerHTML = "";

  const header = document.createElement("h2");
  const headerAddress = document.createElement("h3");
  const headerPhone = document.createElement("h3");
  const headerEmail = document.createElement("h3");

  const addressText = document.createElement("p");
  const phoneText = document.createElement("p");
  const emailText = document.createElement("p");

  const locationImg = document.createElement("img");
  const phoneImg = document.createElement("img");
  const emailImg = document.createElement("img");

  const addressRow = document.createElement("div");
  const phoneRow = document.createElement("div");
  const emailRow = document.createElement("div");

  locationImg.src = locationIcon;
  locationImg.alt = "Location";
  locationImg.classList.add("contact-icon");

  phoneImg.src = phoneIcon;
  phoneImg.alt = "Phone";
  phoneImg.classList.add("contact-icon");

  emailImg.src = emailIcon;
  emailImg.alt = "Email";
  emailImg.classList.add("contact-icon");

  header.classList.add("contact-header");
  headerAddress.classList.add("contact-header-address");
  headerPhone.classList.add("contact-header-phone");
  headerEmail.classList.add("contact-header-email");

  header.textContent = "Contact Us";
  headerAddress.textContent = "Address";
  headerPhone.textContent = "Phone";
  headerEmail.textContent = "Email";

  addressRow.classList.add("contact-row");
  addressRow.append(locationImg, headerAddress);

  phoneRow.classList.add("contact-row");
  phoneRow.append(phoneImg, headerPhone);

  emailRow.classList.add("contact-row");
  emailRow.append(emailImg, headerEmail);

  addressText.textContent = `123 Main Street
New York, NY 10001`;
  phoneText.textContent = `+1 (555) 123-4567`;
  emailText.textContent = `contact@misirs.com`;

  const body = document.createElement("p");
  body.classList.add("contact-body");
  body.textContent = `We'd love to hear from you!
Whether you'd like to make a reservation, ask a question,
or share your feedback, our team is always happy to help.
`;

  content.append(
    header,
    body,
    addressRow,
    addressText,
    phoneRow,
    phoneText,
    emailRow,
    emailText,
  );
}
