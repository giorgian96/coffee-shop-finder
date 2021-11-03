export const mapService = {
  mapSettings: {
    defaultWidth: 360,
    defaultHeight: 180,
    scale: 1.5
  },

  getMapElement(){
    return document.getElementById("map");
  },

  getMapWidth() {
    return this.mapSettings.defaultWidth * this.mapSettings.scale;
  },

  getMapHeight(){
    return this.mapSettings.defaultHeight * this.mapSettings.scale;
  },

  mapLongitudeToPx(longitude){
    return (longitude + this.mapSettings.defaultWidth / 2) * this.mapSettings.scale;
  },

  mapLatitudeToPx(latitude){
    return ((this.mapSettings.defaultHeight / 2) - latitude) * this.mapSettings.scale;
  },

  drawMap(userLocation, coffeeShopLocations){
    const mapCanvas = this.getMapElement();
    const ctx = mapCanvas.getContext("2d");
    ctx.canvas.width = this.getMapWidth();
    ctx.canvas.height = this.getMapHeight();

    // draw some coffee shops
    for(const coffeeShop of coffeeShopLocations){
      this.drawCoffeeShopAt(ctx, coffeeShop.latitude, coffeeShop.longitude);
    }

    // draw user's location
    this.drawUserLocation(ctx, userLocation.latitude, userLocation.longitude);
  },

  drawCoffeeShopAt(ctx, latitude, longitude) {
    // Map api longitude and latitude to canvas x and y
    const xLon = this.mapLongitudeToPx(longitude);
    const yLat = this.mapLatitudeToPx(latitude);

    const size = 7;

    ctx.beginPath();

    ctx.moveTo(xLon - size, yLat - size);
    ctx.lineTo(xLon + size, yLat + size);

    ctx.moveTo(xLon + size, yLat - size);
    ctx.lineTo(xLon - size, yLat + size);
    ctx.stroke();
  },

  drawUserLocation(ctx, latitude, longitude){
    // Map api longitude and latitude to canvas x and y
    const xLon = this.mapLongitudeToPx(longitude);
    const yLat = this.mapLatitudeToPx(latitude);

    const size = 5;

    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(xLon, yLat, size, 0, 2 * Math.PI);
    ctx.fill();
  }
}