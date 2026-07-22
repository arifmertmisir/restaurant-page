export default function getMenuContent(content) {
  content.innerHTML = "";
  const header = document.createElement("h2");

  const headerStarter = document.createElement("h3");
  const headerMainCourse = document.createElement("h3");
  const headerDessert = document.createElement("h3");
  const headerBeverage = document.createElement("h3");

  const starters = [
    "Grilled Halloumi — served with honey and toasted walnuts — €8",
    "Roasted Beet Salad — goat cheese, arugula, candied pecans — €9",
    "Soup of the Day — ask your server for today's selection — €7",
  ];

  const mainCourses = [
    "Herb-Crusted Salmon — pan-seared, lemon butter sauce, seasonal vegetables — €22",
    "Braised Short Rib — slow-cooked in red wine, creamy polenta — €26",
    "Wild Mushroom Risotto — parmesan, truffle oil, fresh thyme — €19",
    "Grilled Ribeye Steak — 300g, garlic butter, roasted potatoes — €29",
  ];

  const desserts = [
    "Classic Tiramisu — espresso-soaked ladyfingers, mascarpone cream — €7",
    "Dark Chocolate Fondant — molten center, vanilla ice cream — €8",
    "Seasonal Fruit Tart — house-made pastry, fresh berries — €6",
  ];

  const beverages = [
    "House Red / White Wine — glass €6 / bottle €24",
    "Craft Beer Selection — €5",
    "Freshly Squeezed Juices — €4",
  ];

  header.classList.add("menu-header");
  headerStarter.classList.add("menu-starter");
  headerMainCourse.classList.add("menu-main");
  headerDessert.classList.add("menu-dessert");
  headerBeverage.classList.add("menu-beverage");

  header.textContent = "Menu";
  headerStarter.textContent = "Starters";
  headerMainCourse.textContent = "Main Courses";
  headerDessert.textContent = "Desserts";
  headerBeverage.textContent = "Beverages";

  content.appendChild(header);
  content.appendChild(headerStarter);
  extractMenu(starters, content);
  content.appendChild(headerMainCourse);
  extractMenu(mainCourses, content);
  content.appendChild(headerDessert);
  extractMenu(desserts, content);
  content.appendChild(headerBeverage);
  extractMenu(beverages, content);
}

function extractMenu(items, content) {
  items.forEach((item) => {
    const para = document.createElement("p");
    para.textContent = item;
    content.appendChild(para);
  });
}
