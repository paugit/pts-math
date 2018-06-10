/* MIT License

Copyright (c) 2018 Pauli Ojanen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

export class Matrix2x2 {
    public readonly values: Float32Array = new Float32Array(4)

    public Identify() {
        this.values[0] = 1.0
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 1.0
    }

    public Clone(m: Matrix2x2) {
        this.values[0] = m.values[0]
        this.values[1] = m.values[1]
        this.values[2] = m.values[2]
        this.values[3] = m.values[3]
    }

    public Multiply(m: Matrix2x2) {
        const t0 = this.values[0]
        const t1 = this.values[1]
        const t2 = this.values[2]
        const t3 = this.values[3]

        this.values[0] = t0 * m.values[0] + t2 * m.values[1]
        this.values[1] = t1 * m.values[0] + t3 * m.values[1]
        this.values[2] = t0 * m.values[2] + t2 * m.values[3]
        this.values[3] = t1 * m.values[2] + t3 * m.values[3]
    }

    public static Copy(src: Matrix2x2, dst: Matrix2x2) {
        dst.values[0] = src.values[0]
        dst.values[1] = src.values[1]
        dst.values[2] = src.values[2]
        dst.values[3] = src.values[3]
    }

    public static Transpose(out: Matrix2x2, m: Matrix2x2) {
        out.values[0] = m.values[0]
        out.values[1] = m.values[2]
        out.values[2] = m.values[1]
        out.values[3] = m.values[3]
    }

    public static Multiply(out: Matrix2x2, a: Matrix2x2, b: Matrix2x2) {
        out.values[0] = a.values[0] * b.values[0] + a.values[2] * b.values[1]
        out.values[1] = a.values[1] * b.values[0] + a.values[3] * b.values[1]
        out.values[2] = a.values[0] * b.values[2] + a.values[2] * b.values[3]
        out.values[3] = a.values[1] * b.values[2] + a.values[3] * b.values[3]
    }
}
