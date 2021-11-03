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
    return (longitude + this.defaultWidth / 2) * this.mapSettings.scale;
  },

  translateLatitudeToCanvasPx(latitude){
    return (latitude + this.defaultHeight / 2) * this.mapSettings.scale;
  },

  initMap(){
    const mapCanvas = this.getMapElement();
    const ctx = mapCanvas.getContext("2d");
    ctx.canvas.width = this.getMapWidth();
    ctx.canvas.height = this.getMapHeight();

    this.draw(ctx);
  },

  draw(ctx){
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  }
}