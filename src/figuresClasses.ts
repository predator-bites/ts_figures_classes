type Colors = 'blue' | 'red' | 'green';
type Shapes = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public x: number,
    public y: number,
    public z: number,
  ) {
    if (x <= 0 || y <= 0 || z <= 0) {
      throw new Error('Invalid input data');
    }

    if (x + y <= z) {
      throw new Error('Invalid input data');
    }

    if (z + y <= x) {
      throw new Error('Invalid input data');
    }

    if (x + z <= y) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.x + this.y + this.z);
    const exp = s * (s - this.x) * (s - this.y) * (s - this.z);

    return +Math.sqrt(exp).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    return +(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public x: number,
    public y: number,
  ) {
    if (x <= 0 || y <= 0) {
      throw new Error('Invalid input data');
    }
  }

  getArea(): number {
    return +(this.x * this.y).toFixed(2);
  }
}

export function getInfo(figure: Rectangle | Triangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
