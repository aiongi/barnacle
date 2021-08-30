let barnacle = {
  X: [],
  Y: [],
  index: -1,
  diametro: 15,
  margen: 2,
  historial: 100,
  color: 0,

  // da origen al primer bicho
  nacer: function () {
    let origenX =
      Math.floor(Math.random() * Math.floor(width / this.diametro)) *
        this.diametro +
      this.diametro / 2;
    let origenY =
      Math.floor(Math.random() * Math.floor(height / this.diametro)) *
        this.diametro +
      this.diametro / 2;
    this.X.push(origenX);
    this.Y.push(origenY);
    this.index++;
    fill(this.color);
    stroke(255);
    strokeWeight(this.margen);
    circle(origenX, origenY, this.diametro);
  },
  /*   distancia: function() {
    for (let i = 0; i < 50; i++) {

      let distanciaX = this.X[this.index] - this.X[this.index - i];
      
      let distanciaY = this.Y[this.index] - this.Y[this.index - i];
      
      return Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
    }
  }, */

  // reproducción autónoma por radio de alcance de cada barnacle
  reproducir: function () {
    for (let i = 0; i < this.historial; i++) {
      let distanciaX = this.X[this.index] - this.X[this.index - i];

      let distanciaY = this.Y[this.index] - this.Y[this.index - i];

      if (
        /* this.distancia() < this.diametro * 8 */ distanciaX <
          (this.diametro + this.margen) * 8 &&
        distanciaY < (this.diametro + this.margen) * 8
      ) {
        let nacimientoX =
          this.X[this.index] +
          this.diametro * (Math.round(Math.random() * 2) - 1);
        let nacimientoY =
          this.Y[this.index] +
          this.diametro * (Math.round(Math.random() * 2) - 1);
        this.X.push(nacimientoX);
        this.Y.push(nacimientoY);
        this.index++;
        /*         let r = map(i, 0, this.historial, 0, 255);
        let b = map(i, 0, this.historial, 255, 0);
        fill(r, 0, b); */
        fill(this.color);
        stroke(255);
        strokeWeight(this.margen);
        circle(nacimientoX, nacimientoY, this.diametro);

        //return Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
      }
    }
  }
};

barnacle.diametro = window.prompt("Tamaño para cada crustáceo:", 10);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  barnacle.reproducir();
}

function mousePressed() {
  barnacle.nacer();
/*   barnacle.reproducir(); */
}
