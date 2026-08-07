(function () {
  "use strict";

  var filterGroup = document.querySelector("[data-publication-filters]");
  var papers = Array.prototype.slice.call(document.querySelectorAll("[data-publication-categories]"));
  var count = document.querySelector("[data-publication-count]");

  if (!filterGroup || !papers.length) {
    return;
  }

  function applyFilter(button) {
    var selected = button.getAttribute("data-publication-filter");
    var visibleCount = 0;

    filterGroup.querySelectorAll("[data-publication-filter]").forEach(function (filterButton) {
      filterButton.setAttribute("aria-pressed", filterButton === button ? "true" : "false");
    });

    papers.forEach(function (paper) {
      var categories = paper.getAttribute("data-publication-categories").split(" ");
      var visible = selected === "all" || categories.indexOf(selected) !== -1;

      paper.hidden = !visible;
      if (visible) {
        visibleCount += 1;
      }
    });

    if (count) {
      count.textContent = visibleCount;
    }
  }

  filterGroup.addEventListener("click", function (event) {
    var button = event.target.closest("[data-publication-filter]");

    if (!button) {
      return;
    }

    applyFilter(button);
  });

  var activeFilter = filterGroup.querySelector('[data-publication-filter][aria-pressed="true"]');

  if (activeFilter) {
    applyFilter(activeFilter);
  }
}());
