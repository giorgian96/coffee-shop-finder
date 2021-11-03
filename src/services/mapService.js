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

  translateLongitudeToCanvasPx(longitude){
    let x = (longitude + this.mapSettings.defaultWidth / 2) * this.mapSettings.scale;
    return x;
  },

  translateLatitudeToCanvasPx(latitude){
    let y = ((this.mapSettings.defaultHeight / 2) - latitude) * this.mapSettings.scale;
    return y;
  },

  initMap(){
    const mapCanvas = this.getMapElement();
    const ctx = mapCanvas.getContext("2d");
    ctx.canvas.width = this.getMapWidth();
    ctx.canvas.height = this.getMapHeight();

    // draw some coffee shops
    this.drawCoffeeShopAt(ctx, this.translateLongitudeToCanvasPx(25), this.translateLatitudeToCanvasPx(45));
    this.drawCoffeeShopAt(ctx, this.translateLongitudeToCanvasPx(150), this.translateLatitudeToCanvasPx(30));
    this.drawCoffeeShopAt(ctx, this.translateLongitudeToCanvasPx(-100), this.translateLatitudeToCanvasPx(50));
    this.drawCoffeeShopAt(ctx, this.translateLongitudeToCanvasPx(-60), this.translateLatitudeToCanvasPx(-30));

    // draw user's location
    this.drawUserLocation(ctx, this.translateLongitudeToCanvasPx(25), this.translateLatitudeToCanvasPx(45));
  },

  drawCoffeeShopAt(ctx, xLon, yLat) {
    ctx.beginPath();

    ctx.moveTo(xLon - 10, yLat - 10);
    ctx.lineTo(xLon + 10, yLat + 10);

    ctx.moveTo(xLon + 10, yLat - 10);
    ctx.lineTo(xLon - 10, yLat + 10);
    ctx.stroke();
  },

  drawUserLocation(ctx, xLon, yLat){
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(xLon, yLat, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}