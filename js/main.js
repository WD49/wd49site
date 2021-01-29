const sectionIds = [
  "#main",
  "#about",
  "#upcomingEvents",
  "#ourWork",
  "#contact",
];
const sectionNames = [
  "Home",
  "About Us",
  "Upcoming Events",
  "Our Work",
  "Contact Us",
];

function handleScroll() {
  const visibleSectionIndex = sectionIds.findIndex((id) => $(id).visible(true));

  if (visibleSectionIndex !== -1) {

    const atBottom = $(document).scrollTop() + document.body.offsetHeight - document.body.scrollHeight >= -200;

    let upSectionIndex = -1;
    let downSectionIndex = -1;
    
    if (atBottom) {
      upSectionIndex = sectionIds.length - 2;
      downSectionIndex = sectionIds.length - 1;
    } else {
      upSectionIndex = visibleSectionIndex === 0 ? 0 : visibleSectionIndex - 1;
      downSectionIndex = visibleSectionIndex === sectionIds.length - 1 ? visibleSectionIndex : visibleSectionIndex + 1;
    }

    if ($("#downLinkText").text() !== sectionNames[downLink]) {
      $("#downLink").click(() => $.scrollTo(sectionIds[downSectionIndex]));
      $("#downLink").attr("disabled", atBottom);
      $("#downLinkText").text(sectionNames[downSectionIndex]);
    }
    if ($("#upLinkText").text() !== sectionNames[upLink]) {
      $("#upLink").click(() => $.scrollTo(sectionIds[upSectionIndex]));
      $("#upLink").attr("disabled", visibleSectionIndex === 0);
      $("#upLinkText").text(sectionNames[upSectionIndex]);
    }
  }
}

$(() => {
  $(window).scroll(() => handleScroll());
  handleScroll();
})