(function () {
  const headerContainer = document.getElementById("site-header");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header>
      <div class="header-top">
        <div class="header-brand">
          <img src="images/hero.jpg" alt="XR500 Only Logo" class="header-logo">
          <div>
            <div class="site-title">XR500 Only</div>
            <div class="site-tagline">40 years riding and tinkering with a few Honda XR500</div>
          </div>
        </div>

        <button type="button" class="menu-toggle-btn" id="menu-open-btn" aria-label="Open menu">
          &#9776; Menu
        </button>
      </div>
    </header>

    <div class="nav-overlay" id="nav-overlay"></div>

    <aside class="nav-drawer" id="nav-drawer" aria-label="Site navigation">
      <div class="nav-drawer-header">
        <span class="nav-drawer-title">XR500 Only</span>
        <button type="button" class="nav-close-btn" id="menu-close-btn" aria-label="Close menu">&times;</button>
      </div>

      <ul class="nav-drawer-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="how-it-all-began.html">How it all began</a></li>
        <li><a href="unusual-1981.html">Unusual 1981 model</a></li>
        <li><a href="hpf-monoshock.html">HPF monoshock</a></li>
        <li><a href="baja-250.html">Baja 250</a></li>
        <li><a href="cj-mugen.html">C&amp;J Mugen Baja Commander</a></li>
        <li><a href="xl500s-special.html">XL500S special</a></li>
        <li><a href="xr500-cj-mx.html">XR500 C&amp;J MX</a></li>
        <li><a href="xr500-big-bore-591cc.html">XR500 Big Bore 591cc</a></li>
        <li><a href="xr500r-1984-stock.html">XR500R 1984 stock</a></li>

        <li class="drawer-group">
          <button type="button" class="drawer-sub-toggle">
            <span>Restoration tips</span>
            <span class="sub-arrow">&#9662;</span>
          </button>
          <ul class="drawer-submenu">
            <li><a href="paint-plastic-gas-tank.html">Paint a plastic gas tank</a></li>
            <li><a href="restoration-tip-2.html">Restoration Tip 2</a></li>
            <li><a href="restoration-tip-3.html">Restoration Tip 3</a></li>
          </ul>
        </li>

        <li class="drawer-group">
          <button type="button" class="drawer-sub-toggle">
            <span>Modifications</span>
            <span class="sub-arrow">&#9662;</span>
          </button>
          <ul class="drawer-submenu">
            <li><a href="mikuni-38mm.html">Mikuni 38mm</a></li>
            <li><a href="electric-start-conversion.html">Electric start conversion</a></li>
            <li><a href="12-volts-conversion.html">12 Volts conversion</a></li>
            <li><a href="mod-4.html">Modification 4</a></li>
          </ul>
        </li>

        <li><a href="wonderful-people.html">The wonderful people</a></li>
        <li><a href="contacts.html">Contacts and share</a></li>
      </ul>
    </aside>
  `;

  const openBtn = document.getElementById("menu-open-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-overlay");

  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
  }

  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Expand/collapse submenus inside the drawer
  headerContainer.querySelectorAll(".drawer-sub-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const submenu = btn.nextElementSibling;
      submenu.classList.toggle("open");
    });
  });

  // Highlight the current page and auto-open its submenu if applicable
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  headerContainer.querySelectorAll(".nav-drawer-list a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      const parentSubmenu = link.closest(".drawer-submenu");
      if (parentSubmenu) {
        parentSubmenu.classList.add("open");
        const toggleBtn = parentSubmenu.previousElementSibling;
        if (toggleBtn) toggleBtn.classList.add("active");
      }
    }
  });
})();
