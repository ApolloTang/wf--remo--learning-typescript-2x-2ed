namespace readOnly {

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
          this.x *= len; // Error [see note]
          this.y *= len; // Error [see note]
          this.z *= len; // Error [see note]
          return this
        }
    }


    const vector3 = new Vector3(3,4,5)
    console.log(vector3.normalize())

    // [note] --------------------------------------
    // this.x *=len --> this.x = this.x * len
    // x,y,z is marked as readonly because we don't
    // want to multate the original value ( and lost
    // the magnitue of the vector )
    // ---------------------------------------------
}
