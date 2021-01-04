import { Text } from "./text.js";

import { Particle } from "./particle.js";

export class Visual {
  constructor() {
    this.text = new Text();

    this.texture = PIXI.Texture.from("particle.png");
  }
}
