document.addEventListener("DOMContentLoaded", () => {
  const driveGrid = document.getElementById("driveGrid");

  if (!driveGrid) return;

  if (!Array.isArray(driveItems) || driveItems.length === 0) {
    driveGrid.innerHTML = `
      <div class="empty">
        No Drive resources available.
      </div>
    `;
    return;
  }

  driveGrid.innerHTML = driveItems.map(item => `
    <article class="drive-card">
      <div class="drive-card-icon">📁</div>

      <div class="drive-card-content">
        <span class="drive-category">${item.category || "Resource"}</span>

        <h3>${item.name}</h3>

        <p>${item.description || ""}</p>

        <a
          href="${item.link}"
          class="drive-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Drive
          <span>↗</span>
        </a>
      </div>
    </article>
  `).join("");
});