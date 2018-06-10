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

export class Matrix3x3 {
    public readonly values: Float32Array = new Float32Array(9)

    public Identify() {
        this.values[0] = 1.0
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 1.0
        this.values[5] = 0
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 1.0
    }

    public Clone(m: Matrix3x3) {
        this.values[0] = m.values[0]
        this.values[1] = m.values[1]
        this.values[2] = m.values[2]
        this.values[3] = m.values[3]
        this.values[4] = m.values[4]
        this.values[5] = m.values[5]
        this.values[6] = m.values[6]
        this.values[7] = m.values[7]
        this.values[8] = m.values[8]
    }

    public Multiply(m: Matrix3x3) {
        const t0 = this.values[0]
        const t1 = this.values[1]
        const t2 = this.values[2]
        const t3 = this.values[3]
        const t4 = this.values[4]
        const t5 = this.values[5]
        const t6 = this.values[6]
        const t7 = this.values[7]
        const t8 = this.values[8]

        this.values[0] = t0 * m.values[0] + t3 * m.values[1] + t6 * m.values[2]
        this.values[1] = t1 * m.values[0] + t4 * m.values[1] + t7 * m.values[2]
        this.values[2] = t2 * m.values[0] + t5 * m.values[1] + t8 * m.values[2]
        this.values[3] = t0 * m.values[3] + t3 * m.values[4] + t6 * m.values[5]
        this.values[4] = t1 * m.values[3] + t4 * m.values[4] + t7 * m.values[5]
        this.values[5] = t2 * m.values[3] + t5 * m.values[4] + t8 * m.values[5]
        this.values[6] = t0 * m.values[6] + t3 * m.values[7] + t6 * m.values[8]
        this.values[7] = t1 * m.values[6] + t4 * m.values[7] + t7 * m.values[8]
        this.values[8] = t2 * m.values[6] + t5 * m.values[7] + t8 * m.values[8]
    }

    public static Copy(src: Matrix3x3, dst: Matrix3x3) {
        dst.values[0] = src.values[0]
        dst.values[1] = src.values[1]
        dst.values[2] = src.values[2]
        dst.values[3] = src.values[3]
        dst.values[4] = src.values[4]
        dst.values[5] = src.values[5]
        dst.values[6] = src.values[6]
        dst.values[7] = src.values[7]
        dst.values[8] = src.values[8]
    }

    public static Transpose(out: Matrix3x3, m: Matrix3x3) {
        out.values[0] = m.values[0]
        out.values[1] = m.values[3]
        out.values[2] = m.values[6]
        out.values[3] = m.values[1]
        out.values[4] = m.values[4]
        out.values[5] = m.values[7]
        out.values[6] = m.values[2]
        out.values[7] = m.values[5]
        out.values[8] = m.values[8]
    }

    public static Multiply(out: Matrix3x3, a: Matrix3x3, b: Matrix3x3) {
        out.values[0] = a.values[0] * b.values[0] + a.values[3] * b.values[1] + a.values[6] * b.values[2]
        out.values[1] = a.values[1] * b.values[0] + a.values[4] * b.values[1] + a.values[7] * b.values[2]
        out.values[2] = a.values[2] * b.values[0] + a.values[5] * b.values[1] + a.values[8] * b.values[2]
        out.values[3] = a.values[0] * b.values[3] + a.values[3] * b.values[4] + a.values[6] * b.values[5]
        out.values[4] = a.values[1] * b.values[3] + a.values[4] * b.values[4] + a.values[7] * b.values[5]
        out.values[5] = a.values[2] * b.values[3] + a.values[5] * b.values[4] + a.values[8] * b.values[5]
        out.values[6] = a.values[0] * b.values[6] + a.values[3] * b.values[7] + a.values[6] * b.values[8]
        out.values[7] = a.values[1] * b.values[6] + a.values[4] * b.values[7] + a.values[7] * b.values[8]
        out.values[8] = a.values[2] * b.values[6] + a.values[5] * b.values[7] + a.values[8] * b.values[8]
    }
}
