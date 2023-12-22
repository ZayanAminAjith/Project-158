AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "aint-me",
        title: "It Aint Me Baby",
        url: "./assets/thumbnails/aintme.jpeg",
      },
      {
        id: "dc",
        title: "Justice League",
        url: "./assets/thumbnails/dc.jpeg",
      },

      {
        id: "marvel",
        title: "Avengers",
        url: "./assets/thumbnails/marvel.jpeg",
      },
      {
        id: "thor",
        title: "Thor",
        url: "./assets/thumbnails/thor.jpeg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbnailEl = this.createThumbnail(item)
      borderEl.appendChild(thumbnailEl)
      // Title Text Element
      const titleEL = this.createTitle(item,position)
      borderEl.appendChild(titleEL)
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry",{
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color: "#0077CC",
      opacity: 1
    })

    //Add cursor-listener component to the ring border entity to change it's color 
    //On Cursor 'mouseenter' and 'mouseleave' entity
    entityEl.setAttribute("cursor-listener", {});

    return entityEl
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry",{
      primitive: "circle",
      radius: 9
    })
    entityEl.setAttribute("material",{
      src: item.url
    })
    return entityEl
  },
  createTitle: function(item,position){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text",{
      value: item.title,
      font: "kelsonsans",
      align: "center",
      width: 90,
      color: "black"
    })
    const posTemp = position
    posTemp.y=-20
    entityEl.setAttribute("position",posTemp)
    entityEl.setAttribute("visible", true)

    return entityEl
  }
});
