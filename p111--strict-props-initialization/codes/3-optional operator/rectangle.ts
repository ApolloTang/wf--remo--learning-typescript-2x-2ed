class Rectangle {
  public width: number;
  public height!: number;  // <-- ! non-null assertion operator

  public constructor(width: number, height: number) {
    this.width = width;
    // this.height = height; // missing height initialization
  }

  public setHeight(height: number) {
    this.height = height;
  }
}

