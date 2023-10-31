const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });


    document.addEventListener("click", (event) => {
      if (!drawer.contains(event.target) && !button.contains(event.target)) {
        this._closeDrawer(event, drawer);
      }
    });

   
    const drawerLinks = drawer.querySelectorAll("li");

    
    drawerLinks.forEach((item) => {
      item.addEventListener("click", (event) => {
        const link = item.querySelector("a");
        if (link) {
          window.location.href = link.href;
          this._closeDrawer(event, drawer);
        }
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
