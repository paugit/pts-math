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

import { Matrix4x4 } from "./matrix4x4"

export class Vector4 {
    public readonly values: Float32Array = new Float32Array(4)

    constructor(x?: number, y?: number, z?: number, w?: number) {
        this.values[0] = x || 0
        this.values[1] = y || 0
        this.values[2] = z || 0
        this.values[3] = w || 0
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

    public set z(z: number) {
        this.values[2] = z
    }

    public get z(): number {
        return this.values[2]
    }

    public set w(w: number) {
        this.values[3] = w
    }

    public get w(): number {
        return this.values[3]
    }

    public set r(r: number) {
        this.values[0] = r
    }

    public get r(): number {
        return this.values[0]
    }

    public set g(g: number) {
        this.values[1] = g
    }

    public get g(): number {
        return this.values[1]
    }

    public set b(b: number) {
        this.values[2] = b
    }

    public get b(): number {
        return this.values[2]
    }

    public set a(a: number) {
        this.values[3] = a
    }

    public get a(): number {
        return this.values[3]
    }

    public set width(width: number) {
        this.values[2] = width
    }

    public get width(): number {
        return this.values[2]
    }

    public set height(height: number) {
        this.values[3] = height
    }

    public get height(): number {
        return this.values[3]
    }

    public get length(): number {
        return Math.sqrt(this.values[0] * this.values[0] + this.values[1] * this.values[1] + this.values[2] * this.values[2] + this.values[3] * this.values[3])
    }

    public get squaredLength(): number {
        return (this.values[0] * this.values[0] + this.values[1] * this.values[1] + this.values[2] * this.values[2] + this.values[3] * this.values[3])
    }

    public Set(x: number, y: number, z: number, w: number) {
        this.values[0] = x
        this.values[1] = y
        this.values[2] = z
        this.values[3] = w
    }

    public Add(v: Vector4) {
        this.values[0] += v.values[0]
        this.values[1] += v.values[1]
        this.values[2] += v.values[2]
        this.values[3] += v.values[3]
    }

    public Subtract(v: Vector4) {
        this.values[0] -= v.values[0]
        this.values[1] -= v.values[1]
        this.values[2] -= v.values[2]
        this.values[3] -= v.values[3]
    }

    public Multiply(v: Vector4) {
        this.values[0] *= v.values[0]
        this.values[1] *= v.values[1]
        this.values[2] *= v.values[2]
        this.values[3] *= v.values[3]
    }

    public Divide(v: Vector4) {
        this.values[0] /= v.values[0]
        this.values[1] /= v.values[1]
        this.values[2] /= v.values[2]
        this.values[3] /= v.values[3]
    }

    public MultiplyScalar(v: number) {
        this.values[0] *= v
        this.values[1] *= v
        this.values[2] *= v
        this.values[3] *= v
    }

    public DivideScalar(v: number) {
        this.values[0] *= v
        this.values[1] *= v
        this.values[2] *= v
        this.values[3] *= v
    }

    public Negate() {
        this.values[0] = -this.values[0]
        this.values[1] = -this.values[1]
        this.values[2] = -this.values[2]
        this.values[3] = -this.values[3]
    }

    public Invert() {
        this.values[0] = 1.0 / this.values[0]
        this.values[1] = 1.0 / this.values[1]
        this.values[2] = 1.0 / this.values[2]
        this.values[3] = 1.0 / this.values[3]
    }

    public Normalize() {
        let l = this.values[0] * this.values[0] + this.values[1] * this.values[1] + this.values[2] * this.values[2] + this.values[3] * this.values[3]

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            this.values[0] *= l
            this.values[1] *= l
            this.values[2] *= l
            this.values[3] *= l
        }
    }

    public DotProduct(v: Vector4): number {
        return this.values[0] * v.values[0] + this.values[1] * v.values[1] + this.values[2] * v.values[2] + this.values[3] * v.values[3]
    }

    public TransformMatrix4x4(m: Matrix4x4) {
        const x = this.values[0]
        const y = this.values[1]
        const z = this.values[2]
        const w = this.values[3]

        this.values[0] = m.values[0] * x + m.values[4] * y + m.values[8] * z + m.values[12] * w
        this.values[1] = m.values[1] * x + m.values[5] * y + m.values[9] * z + m.values[13] * w
        this.values[2] = m.values[2] * x + m.values[6] * y + m.values[10] * z + m.values[14] * w
        this.values[3] = m.values[3] * x + m.values[7] * y + m.values[11] * z + m.values[15] * w
    }

    public static Add(o: Vector4, a: Vector4, b: Vector4) {
        o.values[0] = a.values[0] + b.values[0]
        o.values[1] = a.values[1] + b.values[1]
        o.values[2] = a.values[2] + b.values[2]
        o.values[3] = a.values[3] + b.values[3]
    }

    public static Subtract(o: Vector4, a: Vector4, b: Vector4) {
        o.values[0] = a.values[0] - b.values[0]
        o.values[1] = a.values[1] - b.values[1]
        o.values[2] = a.values[2] - b.values[2]
        o.values[3] = a.values[3] - b.values[3]
    }

    public static Multiply(o: Vector4, a: Vector4, b: Vector4) {
        o.values[0] = a.values[0] * b.values[0]
        o.values[1] = a.values[1] * b.values[1]
        o.values[2] = a.values[2] * b.values[2]
        o.values[3] = a.values[3] * b.values[3]
    }

    public static Divide(o: Vector4, a: Vector4, b: Vector4) {
        o.values[0] = a.values[0] / b.values[0]
        o.values[1] = a.values[1] / b.values[1]
        o.values[2] = a.values[2] / b.values[2]
        o.values[3] = a.values[3] / b.values[3]
    }

    public static Negate(out: Vector4, v: Vector4) {
        out.values[0] = -v.values[0]
        out.values[1] = -v.values[1]
        out.values[2] = -v.values[2]
        out.values[3] = -v.values[3]
    }

    public static Invert(out: Vector4, v: Vector4) {
        out.values[0] = 1.0 / v.values[0]
        out.values[1] = 1.0 / v.values[1]
        out.values[2] = 1.0 / v.values[2]
        out.values[3] = 1.0 / v.values[3]
    }

    public static Normalize(out: Vector4, v: Vector4) {
        let l = v.values[0] * v.values[0] + v.values[1] * v.values[1] + v.values[2] * v.values[2] + v.values[3] * v.values[3]

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            out.values[0] *= l
            out.values[1] *= l
            out.values[2] *= l
            out.values[3] *= l
        }
    }

    public static DotProduct(a: Vector4, b: Vector4): number {
        return a.values[0] * b.values[0] + a.values[1] * b.values[1] + a.values[2] * b.values[2] + a.values[3] * b.values[3]
    }

    public static TransformMatrix4x4(out: Vector4, v: Vector4, m: Matrix4x4) {
        out.values[0] = m.values[0] * v.values[0] + m.values[4] * v.values[1] + m.values[8] * v.values[2] + m.values[12] * v.values[3]
        out.values[1] = m.values[1] * v.values[0] + m.values[5] * v.values[1] + m.values[9] * v.values[2] + m.values[13] * v.values[3]
        out.values[2] = m.values[2] * v.values[0] + m.values[6] * v.values[1] + m.values[10] * v.values[2] + m.values[14] * v.values[3]
        out.values[3] = m.values[3] * v.values[0] + m.values[7] * v.values[1] + m.values[11] * v.values[2] + m.values[15] * v.values[3]
    }
}
