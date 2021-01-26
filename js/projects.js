const projectList = [
  {
    title: "Example Project 1",
    imgLink: "/illustrations/ProjectEmptyPlaceholder.svg",
    description: "Description of the project. Perhaps include who all worked on it and the technologies used to build this app.",
  },
  {
    title: "Example Project 2",
    imgLink: "/illustrations/ProjectEmptyPlaceholder.svg",
    description: "Description of the project. Perhaps include who all worked on it and the technologies used to build this app.",
  }
];

$(() => {
  projectList.forEach((project) => {
    $("#ourWork").append(`<div class="club-project">
      <h4>${project.title}</h4>
      <hr class="left">
      <img src=${project.imgLink} alt="project image coming soon!" />
      <p>${project.description}</p>
    </div>`)
  });
})