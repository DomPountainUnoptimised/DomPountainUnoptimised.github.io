
// the JS for the Search Bar
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let items = document.querySelectorAll("#productList li");

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}

// THIS IS THE ARRAY OF ITEMS, THIS IS WHERE YOU CAN CHANGE THE NAME AND LINK
const products = [
  { name: "Cola", link: "cola.html" },
  { name: "Milk", link: "milk.html" },
  { name: "Orange Juice", link: "orangejuice.html" },
  { name: "Wine", link: "wine.html" },
  { name: "Blackberries", link: "blackberries.html" },
  { name: "Fig", link: "fig.html" },
  { name: "Grapefruit", link: "grapefruit.html" },
  { name: "Mango", link: "mango.html" },
  { name: "Pomegranate", link: "pomegranate.html" },
  { name: "Watermelon", link: "watermelon.html" },
  { name: "Chicken Goujon", link: "chickengoujon.html" },
  { name: "Corn", link: "corn.html" },
  { name: "Peas", link: "peas.html" },
  { name: "Pigs In Blankets", link: "pigsinblankets.html" },
  { name: "Chicken Fillets", link: "chickenfillets.html" },
  { name: "Diced Chicken", link: "dicedchicken.html" },
  { name: "Ham", link: "ham.html" },
  { name: "Lamb", link: "lamb.html" },
  { name: "Mince", link: "mince.html" },
  { name: "Prawns", link: "prawns.html" },
  { name: "Ready-To-Eat Chicken", link: "readytoeatchicken.html" },
  { name: "Seabass", link: "seabass.html" },
];

const input = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  dropdown.innerHTML = "";

  if (!query) {
    dropdown.style.display = "none";
    return;
  }

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  filtered.forEach(product => {
    const li = document.createElement("li");

    // creates the link element
    const link = document.createElement("a");
    link.textContent = product.name;
    link.href = product.link;
    link.style.textDecoration = "none";
    link.style.color = "black";

    li.appendChild(link);
    dropdown.appendChild(li);
  });

  dropdown.style.display = filtered.length ? "block" : "none";
});

// hides the dropdown when clicking anywhere else
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    dropdown.style.display = "none";
  }
});