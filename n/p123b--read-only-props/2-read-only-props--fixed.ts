namespace readOnly_Fixed {

    class Vector3 {

        public constructor(
            public readonly x: number,
            public readonly y: number,
            public readonly z: number
        ) {}

        public is3D() {
            return this.z !== undefined;
        }

        public is2D() {
            return this.z === undefined;
        }

        public Length() {
          return Math.sqrt(
              Math.pow(this.x, 2) +
              Math.pow(this.y, 2) +
              Math.pow(this.z, 2)
          );
        }

        // change its length to 1 without changing its direction
        public normalize() {
          let len = 1 / this.Length();
          return new Vector3(
            this.x * len, // OK
            this.y * len, // OK
            this.z * len  // OK
          )
        }
    }

    const vector3 = new Vector3(3,4,5)
    console.log(vector3.normalize())
}
