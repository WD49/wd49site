// These arrays need to be manually updated if a new section is added
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

    const posDown = $(sectionIds[downSectionIndex]).offset().top;
    const posUp = $(sectionIds[upSectionIndex]).offset().top;

    if ($("#downLinkText").text() !== sectionNames[downLink]) {
      $("#downLink").click(() => window.scrollTo(0, posDown));
      $("#downLink").attr("disabled", atBottom);
      $("#downLinkText").text(sectionNames[downSectionIndex]);
    }
    if ($("#upLinkText").text() !== sectionNames[upLink]) {
      $("#upLink").click(() => window.scrollTo(0, posUp));
      $("#upLink").attr("disabled", visibleSectionIndex === 0);
      $("#upLinkText").text(sectionNames[upSectionIndex]);
    }
  }
}

$(() => {
  $(".club-name-header > p").each((i, pTag) => {
    $(pTag).css({ left: "1000px" }).delay(i * 200).animate({ left: "0px" }, 900)
  })
  $(window).scroll(() => handleScroll());
  handleScroll();
  $("#navBar").css({ bottom: "-100px" }).delay(100).animate({ bottom: 0 }, 1000);

  // navBar doesn't have a set height so calculate height on load to add space below contact form
  $("main").css({ paddingBottom: $("#navBar").innerHeight() });
})