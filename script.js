const shops = [
  {
    name: "Adidas",
    floor: "Level LG2",
    zone: "Orange Zone",
    landmark: "near the ice rink entrance",
    image: "images/adidas.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk straight to the central concourse.",
        "Take the escalator down to LG2.",
        "Follow the Orange Zone signs toward the ice rink.",
        "Adidas is on your right."
      ],
      pillarA: [
        "Start from Pillar A in the central concourse.",
        "Head toward the nearest down escalator.",
        "Go down to LG2.",
        "Follow the Orange Zone signs toward the ice rink.",
        "Adidas is beside the sportswear shop row."
      ],
      info: [
        "Start at the Information Counter.",
        "Walk toward the central escalators.",
        "Go down to LG2.",
        "Turn toward the Orange Zone and continue to the ice rink side.",
        "Adidas is near the rink entrance."
      ]
    }
  },
  {
    name: "Uniqlo",
    floor: "Level G",
    zone: "Fashion Zone",
    landmark: "near the main concourse",
    image: "images/uniqlo.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk into the main concourse.",
        "Stay on Level G.",
        "Follow the fashion retail row.",
        "Uniqlo is along the main walkway."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Stay on the same level and face the fashion shops.",
        "Walk along the main retail corridor.",
        "Uniqlo is ahead on the wider shopfront row."
      ],
      info: [
        "Start at the Information Counter.",
        "Walk toward the main concourse.",
        "Stay on Level G.",
        "Look for the large fashion store frontage.",
        "Uniqlo is nearby."
      ]
    }
  },
  {
    name: "Starbucks",
    floor: "Level G",
    zone: "Cafe Zone",
    landmark: "near the main entrance walkway",
    image: "images/starbuck.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk past the entrance lobby.",
        "Keep to the cafe side of the walkway.",
        "Look for the Starbucks sign near the seating area.",
        "The store is a short walk from the entrance."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Walk toward the Main Entrance direction.",
        "Stay on Level G.",
        "Follow the cafe signs.",
        "Starbucks is near the entrance walkway."
      ],
      info: [
        "Start at the Information Counter.",
        "Head toward the Main Entrance.",
        "Stay on the cafe side of the walkway.",
        "Starbucks is near the seating area."
      ]
    }
  },
  {
    name: "TGV Cinemas",
    floor: "Level 1",
    zone: "Entertainment Zone",
    landmark: "near the cinema lobby",
    image: "images/TGV.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk to the central concourse.",
        "Take the escalator up to Level 1.",
        "Follow signs for Cinema or Entertainment Zone.",
        "TGV Cinemas is at the cinema lobby."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Take the nearby escalator up to Level 1.",
        "Turn toward the Entertainment Zone.",
        "Follow the cinema signs.",
        "TGV Cinemas is at the lobby area."
      ],
      info: [
        "Start at the Information Counter.",
        "Walk to the central escalators.",
        "Go up to Level 1.",
        "Follow the Cinema signs.",
        "TGV Cinemas is ahead near the lobby."
      ]
    }
  },
  {
    name: "Watsons",
    floor: "Level LG1",
    zone: "Health and Beauty Zone",
    landmark: "near the pharmacy and beauty stores",
    image: "images/watsons.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk to the central concourse.",
        "Take the escalator down to LG1.",
        "Follow the Health and Beauty Zone signs.",
        "Watsons is along the pharmacy shop row."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Take the nearest escalator down to LG1.",
        "Turn toward the health and beauty stores.",
        "Watsons is along the main walkway."
      ],
      info: [
        "Start at the Information Counter.",
        "Go to the central escalators.",
        "Head down to LG1.",
        "Walk toward the health and beauty shop row.",
        "Watsons is nearby."
      ]
    }
  },
  {
    name: "Popular Bookstore",
    aliases: ["Popular"],
    floor: "Level 1",
    zone: "Books and Lifestyle Zone",
    landmark: "near the learning and lifestyle shops",
    image: "images/popular.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk straight to the central concourse.",
        "Take the escalator up to Level 1.",
        "Follow the bookstore and lifestyle shop row.",
        "Popular Bookstore is along the corridor."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Go up to Level 1 using the nearby escalator.",
        "Turn toward the lifestyle shop row.",
        "Popular Bookstore is along that walkway."
      ],
      info: [
        "Start at the Information Counter.",
        "Walk to the escalators.",
        "Go up to Level 1.",
        "Follow signs toward books and lifestyle.",
        "Popular Bookstore is on the shop row."
      ]
    }
  },
  {
    name: "Nike",
    floor: "Level LG2",
    zone: "Sports Zone",
    landmark: "near the sportswear section",
    image: "images/nike.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk to the central concourse.",
        "Take the escalator down to LG2.",
        "Follow the Sports Zone shop row.",
        "Nike is nearby on the sportswear side."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Take the escalator down to LG2.",
        "Walk toward the sportswear shops.",
        "Nike is along the sports shop row."
      ],
      info: [
        "Start at the Information Counter.",
        "Go down to LG2.",
        "Follow signs toward sportswear.",
        "Nike is along the sports retail walkway."
      ]
    }
  },
  {
    name: "Sephora",
    floor: "Level G",
    zone: "Beauty Zone",
    landmark: "near the beauty retail area",
    image: "images/sephora.jpg",
    directions: {
      main: [
        "Start at the Main Entrance.",
        "Walk into the main concourse.",
        "Stay on Level G.",
        "Follow the Beauty Zone shop row.",
        "Sephora is along the main walkway."
      ],
      pillarA: [
        "Start from Pillar A.",
        "Stay on Level G.",
        "Walk toward the beauty retail area.",
        "Sephora is on the beauty shop row."
      ],
      info: [
        "Start at the Information Counter.",
        "Walk toward the main concourse.",
        "Follow the Beauty Zone signs.",
        "Sephora is nearby."
      ]
    }
  }
];

const chatLog = document.querySelector("#chat-log");
const chatForm = document.querySelector("#chat-form");
const shopInput = document.querySelector("#shop-input");
const startPoint = document.querySelector("#start-point");
const quickShopButtons = document.querySelectorAll("[data-shop]");

function addMessage(text, sender = "bot") {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatLog.append(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function addResultCard(shop) {
  const card = document.createElement("article");
  card.className = "result-card";

  const top = document.createElement("div");
  top.className = "result-top";

  const mark = document.createElement("div");
  mark.className = "shop-mark";
  mark.textContent = shop.name.charAt(0);

  const details = document.createElement("div");
  const title = document.createElement("strong");
  title.className = "shop-title";
  title.textContent = shop.name;

  const meta = document.createElement("span");
  meta.className = "shop-meta";
  meta.textContent = `${shop.floor}, ${shop.zone} - ${shop.landmark}`;

  const status = document.createElement("span");
  status.className = "status-pill";
  status.textContent = "Found";

  details.append(title, meta);
  top.append(mark, details, status);

  const photo = document.createElement("div");
  photo.className = "destination-photo";

  if (shop.image) {
    const image = document.createElement("img");
    image.src = shop.image;
    image.alt = `${shop.name} destination photo`;
    photo.append(image);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "destination-photo-placeholder";
    placeholder.innerHTML = `
      <span class="photo-icon" aria-hidden="true"></span>
      <strong>Destination photo</strong>
      <small>Add a storefront or nearby landmark picture here.</small>
    `;
    photo.append(placeholder);
  }

  const directionTitle = document.createElement("div");
  directionTitle.className = "directions-title";
  directionTitle.textContent = "Step-by-step directions";

  const list = document.createElement("ol");
  list.className = "directions";
  shop.directions[startPoint.value].forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    list.append(item);
  });

  const feedback = document.createElement("div");
  feedback.className = "find-feedback";

  const feedbackQuestion = document.createElement("p");
  feedbackQuestion.textContent = "Can you find the shop?";

  const feedbackActions = document.createElement("div");
  feedbackActions.className = "find-feedback-actions";

  const yesButton = document.createElement("button");
  yesButton.type = "button";
  yesButton.textContent = "Yes";
  yesButton.addEventListener("click", () => {
    feedback.remove();
    addMessage("Thank you. Enjoy your visit!", "bot");
  });

  const noButton = document.createElement("button");
  noButton.type = "button";
  noButton.textContent = "No";
  noButton.className = "secondary";
  noButton.addEventListener("click", () => {
    feedback.remove();
    addMessage(
      "No worries. Please go to the nearest information counter or ask mall staff for help.",
      "bot"
    );
  });

  feedbackActions.append(yesButton, noButton);
  feedback.append(feedbackQuestion, feedbackActions);

  card.append(top, photo, directionTitle, list, feedback);
  chatLog.append(card);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function findShop(query) {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return null;

  return shops.find((shop) => {
    const names = [shop.name, ...(shop.aliases || [])];
    return names.some((name) => {
      const cleanName = normalize(name);
      return cleanName.includes(cleanQuery) || cleanQuery.includes(cleanName);
    });
  });
}

function showUnknownShop(query) {
  const suggestions = shops.slice(0, 5).map((shop) => shop.name).join(", ");
  addMessage(
    `I could not find "${query}" in the demo data yet. Try one of these: ${suggestions}.`,
    "bot"
  );
}

function askForShop(query) {
  const trimmed = query.trim();
  if (!trimmed) {
    addMessage("Please type a shop name, for example Adidas or Starbucks.", "bot");
    return;
  }

  addMessage(trimmed, "user");
  const shop = findShop(trimmed);

  window.setTimeout(() => {
    if (!shop) {
      showUnknownShop(trimmed);
      return;
    }

    addMessage(
      `Found ${shop.name}. It is on ${shop.floor}, ${shop.zone}, ${shop.landmark}.`,
      "bot"
    );
    addResultCard(shop);
  }, 280);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askForShop(shopInput.value);
  shopInput.value = "";
  shopInput.focus();
});

quickShopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    askForShop(button.dataset.shop);
  });
});

startPoint.addEventListener("change", () => {
  const label = startPoint.options[startPoint.selectedIndex].text;
  addMessage(`Starting point updated to ${label}.`, "bot");
});

addMessage(
  "Hello, I can help you find shops in Sunway Pyramid. Type a shop name, for example Adidas."
);
