export default function getHomeContent(content) {
  content.innerHTML = "";
  const header = document.createElement("h2");
  const body = document.createElement("p");
  const hoursHeader = document.createElement("h2");
  const hoursBody = document.createElement("p");
  const locationHeader = document.createElement("h2");
  const locationBody = document.createElement("p");

  header.textContent = "Welcome to Misir's";

  body.classList.add("home-body");
  body.textContent = `Where exceptional flavors meet timeless hospitality.

Every dish is prepared with carefully selected ingredients,
bringing together traditional recipes and modern culinary artistry.
Whether you're enjoying a quiet dinner or celebrating a special occasion,
Misir's offers an unforgettable dining experience in a warm and elegant atmosphere.

We look forward to serving you.

`;

  hoursHeader.textContent = "Opening Hours";

  hoursBody.classList.add("home-hours");
  hoursBody.textContent = `Monday - Thursday    11:00 AM - 10:00 PM
Friday               11:00 AM - 11:00 PM
Saturday             10:00 AM - 11:00 PM
Sunday               10:00 AM - 09:00 PM

`;

  locationHeader.textContent = "Location";

  locationBody.classList.add("home-location");
  locationBody.textContent = `123 Main Street New York, NY 10001`;

  content.append(
    header,
    body,
    hoursHeader,
    hoursBody,
    locationHeader,
    locationBody,
  );
}
