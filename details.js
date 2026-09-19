/* =========================================================
   POWERFUL WEBS
   DETAILS PAGE JAVASCRIPT

   "tools" array data.js se aa raha hai.
   ========================================================= */


/* =========================================================
   GET TOOL ID FROM URL
========================================================= */

const params =
  new URLSearchParams(
    window.location.search
  );


const toolId =
  params.get("id");


/* =========================================================
   DETAILS CONTAINER
========================================================= */

const detailsContainer =
  document.getElementById("details");


/* =========================================================
   SAFETY CHECK
========================================================= */

if (!detailsContainer) {

  console.error(
    'Details container with id="details" was not found.'
  );

}


/* =========================================================
   FIND TOOL FROM SHARED DATA
========================================================= */

const tool = Array.isArray(tools)
  ? tools.find(item => {
      return String(item.id) === String(toolId);
    })
  : null;


/* =========================================================
   TOOL NOT FOUND
========================================================= */

if (!tool) {

  if (detailsContainer) {

    detailsContainer.innerHTML = `

      <div class="details-card not-found">

        <h1>
          Tool Not Found
        </h1>

        <p>
          The requested tool could not be found.
          Please go back to the homepage and try again.
        </p>

        <div class="details-actions">

          <a
            href="index.html"
            class="back-btn"
          >
            ← Back to Tools
          </a>

        </div>

      </div>

    `;

  }

}


/* =========================================================
   TOOL FOUND
========================================================= */

else {

  /* =========================
     PRICING CLASS
  ========================= */

  let pricingClass = "";


  if (tool.pricing) {

    pricingClass =
      `pricing-${String(
        tool.pricing
      ).toLowerCase()}`;

  }


  /* =========================
     FEATURES
  ========================= */

  const features =
    Array.isArray(tool.features)
      ? tool.features
      : [];


  let featuresHTML = "";


  if (features.length > 0) {

    featuresHTML =
      features
        .map(feature => {

          return `
            <li>
              ${feature}
            </li>
          `;

        })
        .join("");

  }

  else {

    featuresHTML = `
      <li>
        Information about features is not available.
      </li>
    `;

  }


  /* =========================
     RENDER DETAILS
  ========================= */

  if (detailsContainer) {

    detailsContainer.innerHTML = `

      <div class="details-card">


        <!-- CATEGORY -->

        <div class="details-category">
          ${tool.category || "Tool"}
        </div>


        <!-- TITLE + PRICING -->

        <div class="details-title-row">

          <h1>
            ${tool.name || ""}
          </h1>


          ${
            tool.pricing
              ? `
                <span class="pricing-badge ${pricingClass}">
                  ${tool.pricing}
                </span>
              `
              : ""
          }

        </div>


        <!-- SHORT DESCRIPTION -->

        <p class="details-description">
          ${tool.desc || ""}
        </p>


        <!-- LONG DESCRIPTION -->

        ${
          tool.longDesc
            ? `
              <p class="details-long-description">
                ${tool.longDesc}
              </p>
            `
            : ""
        }


        <!-- FEATURES -->

        <h2>
          Features
        </h2>


        <ul class="details-features">
          ${featuresHTML}
        </ul>


        <!-- ACTION BUTTONS -->

        <div class="details-actions">


          <!-- VISIT TOOL -->

          <a
            href="${tool.link || "#"}"
            class="visit-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tool →
          </a>


          <!-- BACK TO TOOLS -->

          <a
            href="index.html"
            class="back-btn"
            id="backToTools"
          >
            ← Back to Tools
          </a>


        </div>


      </div>

    `;

  }


  /* =========================
     PAGE TITLE
  ========================= */

  document.title =
    `${tool.name} — Powerful Webs`;


  /* =========================
     BACK BUTTON
     ========================= */

  const backButton =
    document.getElementById(
      "backToTools"
    );


  if (backButton) {

    backButton.addEventListener(
      "click",
      () => {

        /*
           script.js ne homepage state
           pehle hi sessionStorage mein save
           kiya hai.

           Isliye normal index.html navigation
           ke baad state restore ho jayegi.
        */

      }
    );

  }

}