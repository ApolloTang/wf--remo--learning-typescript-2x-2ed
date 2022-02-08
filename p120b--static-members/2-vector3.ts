class Vector3 {
  public static GetDefault() {
    return new Vector3(0, 0, 0);
  }

  public constructor(
    private _x: number,
    private _y: number,
    private _z: number
  ) {}

  public length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }

  public normalize() {
    // change its length to 1 without changing its direction
    let len = 1 / this.length();
    this._x *= len;
    this._y *= len;
    this._z *= len;
  }
}

const vector1 = Vector3.GetDefault();
vector1.normalize();

const vector2 = new Vector3(1, 1, 1);
vector2.normalize();
