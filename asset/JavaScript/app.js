document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.querySelector(".overlay");
    const sidebarCollapse = document.getElementById("sidebarCollapse");
    const sidebarCollapseX = document.getElementById("sidebarCollapseX");

    sidebarCollapse.addEventListener("click", function () {
      sidebar.classList.add("active");
      overlay.classList.add("visible");
    });

    sidebarCollapseX.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("visible");
    });

    overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("visible");
    });
  });
  