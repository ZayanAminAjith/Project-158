AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents()
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["aint-me", "dc", "marvel", "thor"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave",()=>{
      if(this.data.selectedItemId){
        const el = document.querySelector(`#${this.data.selectedItemId}`)
        const id = el.getAttribute("id")
        if(id == this.data.selectedItemId){
          el.setAttribute("material",{
            color: "#0077CC",
            opacity: 1,
          })
        }
      }
    })
  },
});
