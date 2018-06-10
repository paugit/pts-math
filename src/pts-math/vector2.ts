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

import { Matrix2x2 } from "matrix2x2"

export class Vector2 {
    public readonly values: Float32Array = new Float32Array(2)

    constructor(x?: number, y?: number) {
        this.values[0] = x || 0
        this.values[1] = y || 0
    }

    public set x(x: number) {
        this.values[0] = x
    }

    public get x(): number {
        return this.values[0]
    }

    public set y(y: number) {
        this.values[1] = y
    }

    public get y(): number {
        return this.values[1]
    }

    public get length(): number {
        return Math.sqrt(this.values[0] * this.values[0] + this.values[1] * this.values[1])
    }

    public get squaredLength(): number {
        return (this.values[0] * this.values[0] + this.values[1] * this.values[1])
    }

    public Set(x: number, y: number) {
        this.values[0] = x
        this.values[1] = y
    }

    public Add(v: Vector2) {
        this.values[0] += v.values[0]
        this.values[1] += v.values[1]
    }

    public Subtract(v: Vector2) {
        this.values[0] -= v.values[0]
        this.values[1] -= v.values[1]
    }

    public Multiply(v: Vector2) {
        this.values[0] *= v.values[0]
        this.values[1] *= v.values[1]
    }

    public Divide(v: Vector2) {
        this.values[0] /= v.values[0]
        this.values[1] /= v.values[1]
    }

    public MultiplyScalar(v: number) {
        this.values[0] *= v
        this.values[1] *= v
    }

    public DivideScalar(v: number) {
        this.values[0] *= v
        this.values[1] *= v
    }

    public Negate() {
        this.values[0] = -this.values[0]
        this.values[1] = -this.values[1]
    }

    public Invert() {
        this.values[0] = 1.0 / this.values[0]
        this.values[1] = 1.0 / this.values[1]
    }

    public Normalize() {
        let l = this.values[0] * this.values[0] + this.values[1] * this.values[1]

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            this.values[0] *= l
            this.values[1] *= l
        }
    }

    public DotProduct(v: Vector2): number {
        return this.values[0] * v.values[0] + this.values[1] * v.values[1]
    }

    public TransformMatrix2x2(m: Matrix2x2) {
        const x = this.values[0]
        const y = this.values[1]

        this.values[0] = m.values[0] * x + m.values[2] * y
        this.values[1] = m.values[1] * x + m.values[3] * y
    }

    public static Add(o: Vector2, a: Vector2, b: Vector2) {
        o.values[0] = a.values[0] + b.values[0]
        o.values[1] = a.values[1] + b.values[1]
    }

    public static Subtract(o: Vector2, a: Vector2, b: Vector2) {
        o.values[0] = a.values[0] - b.values[0]
        o.values[1] = a.values[1] - b.values[1]
    }

    public static Multiply(o: Vector2, a: Vector2, b: Vector2) {
        o.values[0] = a.values[0] * b.values[0]
        o.values[1] = a.values[1] * b.values[1]
    }

    public static Divide(o: Vector2, a: Vector2, b: Vector2) {
        o.values[0] = a.values[0] / b.values[0]
        o.values[1] = a.values[1] / b.values[1]
    }

    public static Negate(out: Vector2, v: Vector2) {
        out.values[0] = -v.values[0]
        out.values[1] = -v.values[1]
    }

    public static Invert(out: Vector2, v: Vector2) {
        out.values[0] = 1.0 / v.values[0]
        out.values[1] = 1.0 / v.values[1]
    }

    public static Normalize(out: Vector2, v: Vector2) {
        let l = v.values[0] * v.values[0] + v.values[1] * v.values[1]

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            out.values[0] *= l
            out.values[1] *= l
        }
    }

    public static DotProduct(a: Vector2, b: Vector2): number {
        return a.values[0] * b.values[0] + a.values[1] * b.values[1]
    }

    public static TransformMatrix2x2(out: Vector2, v: Vector2, m: Matrix2x2) {
        out.values[0] = m.values[0] * v.values[0] + m.values[2] * v.values[1]
        out.values[1] = m.values[1] * v.values[0] + m.values[3] * v.values[1]
    }
}
