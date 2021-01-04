const FRICTION = 0.86;
const MOVE_SPEED = 0.1;

export class Particle {
  constructor(pos, texture) {
    this.sprite = new devicePixelRatio.Sprite(texture);
  }
}
