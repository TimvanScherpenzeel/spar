/**
 * Inspired by https://github.com/thi-ng/umbrella/blob/master/packages/bitfield/src/bitfield.ts
 */

/**
 * Bitfield is a simple resizable bitfield data structure. It is an efficient way of storing many boolean values.
 */
export class Bitfield {
  private data: Uint32Array;
  private size: number;

  /**
   * Set the size of the bitfield and initializes the internal data buffer
   *
   * @param size Size of the bitfield
   */
  constructor(size: number) {
    this.size = (size + 31) & ~31;
    this.data = new Uint32Array(this.size >>> 5);
  }

  /**
   * Get a bit value by index
   *
   * @param index Index of bit
   */
  public get(index: number): boolean {
    return (this.data[index >>> 5] & (0x80000000 >>> (index & 31))) !== 0;
  }

  /**
   * Set a bit index with value
   *
   * 1 << 0   -> 0b00000000000000000000000000000001
   * 1 << 1   -> 0b00000000000000000000000000000010
   * ......   -> ..................................
   * 1 << 30  -> 0b01000000000000000000000000000000
   * 1 << 31  -> 0b10000000000000000000000000000000
   *
   * @param index Index of bit
   * @param value Value of bit
   */
  public set(index: number, value: boolean = true): boolean {
    const id = index >>> 5;
    const mask = 0x80000000 >>> (index & 31);
    const bit = this.data[id] & mask;

    if (value) {
      this.data[id] |= mask;
    } else {
      this.data[id] &= ~mask;
    }

    return bit !== 0;
  }

  /**
   * Resize the bitfield
   *
   * @param size New size of the bitfield
   */
  public resize(size: number): void {
    size = (size + 31) & ~31;

    const tmp = new Uint32Array(size >>> 5);
    tmp.set(this.data.slice(0, tmp.length));

    this.data = tmp;
    this.size = size;
  }

  /**
   * Stringify the bitfield
   */
  public toString(): string {
    return `0b${[...Array.from(this.data)]
      .map(bit => (bit >>> 0).toString(2).padStart(32, '0'))
      .join('')}`;
  }
}
