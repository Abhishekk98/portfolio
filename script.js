const projects = [
  {
    title: "Fitness Website",
    image: "https://via.placeholder.com/400x250?text=Fitness+Website",
    link: "https://example.com/fitness"
  },
  {
    title: "Real Estate Platform",
    image: "https://via.placeholder.com/400x250?text=Real+Estate",
    link: "https://example.com/real-estate"
  },
  {
    title: "Cooking Channel Page",
    image: "https://via.placeholder.com/400x250?text=Cooking+Channel",
    link: "https://example.com/cooking"
  }
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <div class="content">
      <h3>${project.title}</h3>
      <a href="${project.link}" target="_blank">Visit Website →</a>
    </div>
  `;

  projectGrid.appendChild(card);
});
