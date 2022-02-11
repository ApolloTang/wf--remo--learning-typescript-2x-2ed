class Rectangle {
  public width: number;
  public height: number;

  public constructor(width: number, height: number) {
    this.width = width;
    // this.height = height; // missing height initialization
  }

  public setHeight(height: number) {
    this.height = height;
  }
}

