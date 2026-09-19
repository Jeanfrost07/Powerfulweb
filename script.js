/* =========================================================
   POWERFUL WEBS
   HOMEPAGE JAVASCRIPT

   "tools" array data.js se aa raha hai.
   ========================================================= */


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const toolsGrid = document.getElementById("toolsGrid");
const searchInput = document.getElementById("search");
const categoryButtons = document.querySelectorAll(".category-btn");
const emptyMessage = document.getElementById("empty");


/* =========================================================
   FILTER STATE
   ========================================================= */

let activeCategory = "all";


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const HOME_STATE_KEY = "powerfulWebsHomeState";
const RESTORE_HOME_KEY = "powerfulWebsRestoreHome";
const ROUTE_KEY = "powerfulWebsRoute";


/* =========================================================
   PRICING CLASS
   ========================================================= */

function getPricingClass(pricing) {
  if (!pricing) {
    return "";
  }

  return `pricing-${String(pricing).toLowerCase()}`;
}


/* =========================================================
   SAVE CURRENT HOMEPAGE STATE
   ========================================================= */

function saveHomeState() {
  const state = {
    category: activeCategory,
    search: searchInput ? searchInput.value : "",
    scrollY: window.scrollY
  };

  try {
    sessionStorage.setItem(
      HOME_STATE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.warn("Could not save homepage state.", error);
  }
}


/* =========================================================
   RENDER TOOLS
   ========================================================= */

function renderTools(toolList) {

  if (!toolsGrid) {
    return;
  }

  toolsGrid.innerHTML = "";


  if (toolList.length === 0) {

    if (emptyMessage) {
      emptyMessage.style.display = "block";
      toolsGrid.appendChild(emptyMessage);
    }

    return;
  }


  if (emptyMessage) {
    emptyMessage.style.display = "none";
  }


  toolList.forEach(tool => {

    const card = document.createElement("article");

    card.className = "tool-card";


    card.innerHTML = `
      <div class="tool-card-header">

        <div>

          <h3>
            ${tool.name || ""}
          </h3>

          <div class="tool-category">
            ${tool.category || ""}
          </div>

        </div>


        ${
          tool.pricing
            ? `
              <span class="pricing-badge ${getPricingClass(tool.pricing)}">
                ${tool.pricing}
              </span>
            `
            : ""
        }

      </div>


      <p>
        ${tool.desc || ""}
      </p>


      <div class="tool-card-actions">

        <a
          class="details-btn"
          href="details.html?id=${encodeURIComponent(tool.id)}"
        >
          View Details →
        </a>

      </div>
    `;


    toolsGrid.appendChild(card);

  });
}


/* =========================================================
   CATEGORY MATCHING
   ========================================================= */

function categoryMatches(tool, selectedCategory) {

  if (selectedCategory === "all") {
    return true;
  }


  const toolCategory = String(tool.category || "")
    .trim()
    .toLowerCase();


  const category = String(selectedCategory || "")
    .trim()
    .toLowerCase();


  if (category === "ai") {

    return (
      toolCategory === "ai" ||
      toolCategory === "ai tools"
    );

  }


  return toolCategory === category;
}


/* =========================================================
   FILTER TOOLS
   ========================================================= */

function filterTools() {

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";


  const filteredTools = tools.filter(tool => {

    const matchesCategory = categoryMatches(
      tool,
      activeCategory
    );


    const searchableText = `
      ${tool.name || ""}
      ${tool.desc || ""}
      ${tool.longDesc || ""}
      ${tool.category || ""}
      ${(tool.features || []).join(" ")}
    `.toLowerCase();


    const matchesSearch =
      searchTerm === "" ||
      searchableText.includes(searchTerm);


    return matchesCategory && matchesSearch;

  });


  renderTools(filteredTools);
}


/* =========================================================
   CATEGORY BUTTONS
   ========================================================= */

categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    activeCategory =
      button.dataset.category || "all";


    categoryButtons.forEach(btn => {
      btn.classList.remove("active");
    });


    button.classList.add("active");


    filterTools();

  });

});


/* =========================================================
   SEARCH
   ========================================================= */

if (searchInput) {

  searchInput.addEventListener("input", () => {
    filterTools();
  });

}


/* =========================================================
   BEFORE OPENING DETAILS
   SAVE CATEGORY + SEARCH + SCROLL
   ========================================================= */

if (toolsGrid) {

  toolsGrid.addEventListener("click", event => {

    const detailsLink =
      event.target.closest(".details-btn");


    if (!detailsLink) {
      return;
    }


    saveHomeState();


    try {

      sessionStorage.setItem(
        RESTORE_HOME_KEY,
        "true"
      );

    } catch (error) {

      console.warn(
        "Could not mark homepage state.",
        error
      );

    }

  });

}


/* =========================================================
   RESTORE HOMEPAGE STATE
   ========================================================= */

function restoreHomeState() {

  let shouldRestore = false;
  let savedState = null;


  try {

    shouldRestore =
      sessionStorage.getItem(
        RESTORE_HOME_KEY
      ) === "true";


    const saved =
      sessionStorage.getItem(
        HOME_STATE_KEY
      );


    if (saved) {
      savedState = JSON.parse(saved);
    }

  } catch (error) {

    console.warn(
      "Could not read homepage state.",
      error
    );

    return false;
  }


  if (!shouldRestore || !savedState) {
    return false;
  }


  activeCategory =
    savedState.category || "all";


  if (searchInput) {

    searchInput.value =
      savedState.search || "";

  }


  categoryButtons.forEach(button => {

    const buttonCategory =
      button.dataset.category || "all";


    button.classList.toggle(
      "active",
      buttonCategory === activeCategory
    );

  });


  filterTools();


  const savedScroll =
    Number(savedState.scrollY) || 0;


  requestAnimationFrame(() => {

    requestAnimationFrame(() => {

      window.scrollTo(
        0,
        savedScroll
      );

    });

  });


  try {

    sessionStorage.removeItem(
      RESTORE_HOME_KEY
    );

  } catch (error) {

    console.warn(
      "Could not clear restore flag.",
      error
    );

  }


  return true;
}


/* =========================================================
   SIDEBAR + ROUTING
   ========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const sidebar =
  document.getElementById("sidebar");

const sidebarClose =
  document.getElementById("sidebarClose");

const sidebarOverlay =
  document.getElementById("sidebarOverlay");

const navItems =
  document.querySelectorAll(
    ".sidebar-nav-item"
  );


/*
 * Route configuration
 *
 * Future sections can be added here.
 *
 * Example:
 *
 * new-section: "newSection"
 */

const routes = {

  websites: "websitesSection",

  "drive-links": "driveLinksSection"

};


/* =========================================================
   OPEN SIDEBAR
   ========================================================= */

function openSidebar() {

  if (
    !sidebar ||
    !sidebarOverlay ||
    !menuToggle
  ) {
    return;
  }


  sidebar.classList.add("open");

  sidebarOverlay.classList.add("open");


  sidebar.setAttribute(
    "aria-hidden",
    "false"
  );


  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );


  document.body.classList.add(
    "sidebar-open"
  );

}


/* =========================================================
   CLOSE SIDEBAR
   ========================================================= */

function closeSidebar() {

  if (
    !sidebar ||
    !sidebarOverlay ||
    !menuToggle
  ) {
    return;
  }


  sidebar.classList.remove("open");

  sidebarOverlay.classList.remove("open");


  sidebar.setAttribute(
    "aria-hidden",
    "true"
  );


  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );


  document.body.classList.remove(
    "sidebar-open"
  );

}


/* =========================================================
   SECTION ROUTING
   ========================================================= */

function showRoute(routeName) {

  const sectionId =
    routes[routeName];


  if (!sectionId) {
    return;
  }


  /*
   * Hide all registered sections
   */

  Object.values(routes).forEach(id => {

    const section =
      document.getElementById(id);


    if (section) {
      section.classList.remove("active");
    }

  });


  /*
   * Show selected section
   */

  const activeSection =
    document.getElementById(sectionId);


  if (activeSection) {
    activeSection.classList.add("active");
  }


  /*
   * Update active sidebar item
   */

  navItems.forEach(item => {

    item.classList.toggle(
      "active",
      item.dataset.route === routeName
    );

  });


  /*
   * Save current route
   */

  try {

    sessionStorage.setItem(
      ROUTE_KEY,
      routeName
    );

  } catch (error) {

    console.warn(
      "Could not save route.",
      error
    );

  }


  /*
   * Close sidebar
   */

  closeSidebar();


  /*
   * Scroll to top when changing section
   */

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   MENU BUTTON
   ========================================================= */

if (menuToggle) {

  menuToggle.addEventListener(
    "click",
    openSidebar
  );

}


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

if (sidebarClose) {

  sidebarClose.addEventListener(
    "click",
    closeSidebar
  );

}


/* =========================================================
   OVERLAY CLICK
   ========================================================= */

if (sidebarOverlay) {

  sidebarOverlay.addEventListener(
    "click",
    closeSidebar
  );

}


/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

navItems.forEach(item => {

  item.addEventListener("click", () => {

    const route =
      item.dataset.route;


    if (route) {
      showRoute(route);
    }

  });

});


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeSidebar();
    }

  }
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

let savedRoute = null;


try {

  savedRoute =
    sessionStorage.getItem(
      ROUTE_KEY
    );

} catch (error) {

  savedRoute = null;

}


const restored =
  restoreHomeState();


/*
 * If we didn't restore a previous homepage state,
 * render all tools normally.
 */

if (!restored) {
  renderTools(tools);
}


/*
 * Restore previously selected section.
 */

if (
  savedRoute &&
  routes[savedRoute]
) {

  showRoute(savedRoute);

} else {

  showRoute("websites");

}