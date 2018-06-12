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

import { Vector3 } from "./vector3"

export class Matrix4x4 {
    public readonly values: Float32Array = new Float32Array(16)

    public Identify() {
        this.values[0] = 1.0
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = 1.0
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = 1.0
        this.values[11] = 0
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = 0
        this.values[15] = 1.0
    }

    public TranslationMatrix(v: Vector3) {
        this.values[0] = 1
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = 1
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = 1
        this.values[11] = 0
        this.values[12] = v.values[0]
        this.values[13] = v.values[1]
        this.values[14] = v.values[2]
        this.values[15] = 1
    }

    public ScalingMatrix(v: Vector3) {
        this.values[0] = v.values[0]
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = v.values[1]
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = v.values[2]
        this.values[11] = 0
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = 0
        this.values[15] = 1
    }

    public XRotationMatrix(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        this.values[0] = 1
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = c
        this.values[6] = s
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = -s
        this.values[10] = c
        this.values[11] = 0
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = 0
        this.values[15] = 1
    }

    public YRotationMatrix(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        this.values[0] = c
        this.values[1] = 0
        this.values[2] = -s
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = 1
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = s
        this.values[9] = 0
        this.values[10] = c
        this.values[11] = 0
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = 0
        this.values[15] = 1
    }

    public ZRotationMatrix(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        this.values[0] = c
        this.values[1] = s
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = -s
        this.values[5] = c
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = 1
        this.values[11] = 0
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = 0
        this.values[15] = 1
    }

    public Scale(s: Vector3) {
        this.values[0] *= s.values[0]
        this.values[1] *= s.values[0]
        this.values[2] *= s.values[0]
        this.values[3] *= s.values[0]
        this.values[4] *= s.values[1]
        this.values[5] *= s.values[1]
        this.values[6] *= s.values[1]
        this.values[7] *= s.values[1]
        this.values[8] *= s.values[2]
        this.values[9] *= s.values[2]
        this.values[10] *= s.values[2]
        this.values[11] *= s.values[2]
    }

    public Translate(v: Vector3) {
        this.values[12] = this.values[0] * v.values[0] + this.values[4] * v.values[1] + this.values[8] * v.values[2] + this.values[12]
        this.values[13] = this.values[1] * v.values[0] + this.values[5] * v.values[1] + this.values[9] * v.values[2] + this.values[13]
        this.values[14] = this.values[2] * v.values[0] + this.values[6] * v.values[1] + this.values[10] * v.values[2] + this.values[14]
        this.values[15] = this.values[3] * v.values[0] + this.values[7] * v.values[1] + this.values[11] * v.values[2] + this.values[15]
    }

    public RotateX(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        const t4 = this.values[4]
        const t5 = this.values[5]
        const t6 = this.values[6]
        const t7 = this.values[7]
        const t8 = this.values[8]
        const t9 = this.values[9]
        const t10 = this.values[10]
        const t11 = this.values[11]

        this.values[4] = c * t4 + s * t8
        this.values[5] = c * t5 + s * t9
        this.values[6] = c * t6 + s * t10
        this.values[7] = c * t7 + s * t11
        this.values[8] = c * t8 - s * t4
        this.values[9] = c * t9 - s * t5
        this.values[10] = c * t10 - s * t6
        this.values[11] = c * t11 - s * t7
    }

    public RotateY(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        const t0 = this.values[0]
        const t1 = this.values[1]
        const t2 = this.values[2]
        const t3 = this.values[3]
        const t8 = this.values[8]
        const t9 = this.values[9]
        const t10 = this.values[10]
        const t11 = this.values[11]

        this.values[0] = c * t0 - s * t8
        this.values[1] = c * t1 - s * t9
        this.values[2] = c * t2 - s * t10
        this.values[3] = c * t3 - s * t11
        this.values[8] = s * t0 + c * t8
        this.values[9] = s * t1 + c * t9
        this.values[10] = s * t2 + c * t10
        this.values[11] = s * t3 + c * t11
    }

    public RotateZ(a: number) {
        const s = Math.sin(a)
        const c = Math.cos(a)

        const t0 = this.values[0]
        const t1 = this.values[1]
        const t2 = this.values[2]
        const t3 = this.values[3]
        const t4 = this.values[4]
        const t5 = this.values[5]
        const t6 = this.values[6]
        const t7 = this.values[7]

        this.values[0] = c * t0 + s * t4
        this.values[1] = c * t1 + s * t5
        this.values[2] = c * t2 + s * t6
        this.values[3] = c * t3 + s * t7
        this.values[4] = c * t4 - s * t0
        this.values[5] = c * t5 - s * t1
        this.values[6] = c * t6 - s * t2
        this.values[7] = c * t7 - s * t3
    }

    public Ortho(left: number, right: number, bottom: number, top: number, near: number, far: number) {
        const rml = right - left
        const tmb = top - bottom
        const fmn = far - near

        this.values[0] = 2 / rml
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = 2 / tmb
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = -2 / fmn
        this.values[11] = 0
        this.values[12] = -(right + left) / rml
        this.values[13] = -(top + bottom) / tmb
        this.values[14] = -(far + near) / fmn
        this.values[15] = 1
    }

    public Frustum(left: number, right: number, bottom: number, top: number, near: number, far: number) {
        const n2 = 2 * near
        const rml = right - left
        const tmb = top - bottom
        const fmn = far - near

        this.values[0] = n2 / rml
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = n2 / tmb
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = (right + left) / rml
        this.values[9] = (top + bottom) / tmb
        this.values[10] = - (far + near) / fmn
        this.values[11] = -1
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = - n2 * far / fmn
        this.values[15] = 0
    }

    public Perspective(fov: number, aspectRatio: number, near: number, far: number) {
        const top = near * Math.tan(fov * 0.5)
        const fmn = far - near

        this.values[0] = near / (top * aspectRatio)
        this.values[1] = 0
        this.values[2] = 0
        this.values[3] = 0
        this.values[4] = 0
        this.values[5] = near / top
        this.values[6] = 0
        this.values[7] = 0
        this.values[8] = 0
        this.values[9] = 0
        this.values[10] = - (far + near) / fmn
        this.values[11] = -1
        this.values[12] = 0
        this.values[13] = 0
        this.values[14] = - 2 * near * far / fmn
        this.values[15] = 0
    }

    public LookAt(eye: Vector3, target: Vector3, up: Vector3) {
        let forwardX = target.values[0] - eye.values[0]
        let forwardY = target.values[1] - eye.values[1]
        let forwardZ = target.values[2] - eye.values[2]

        let l = forwardX * forwardX + forwardY * forwardY + forwardZ * forwardZ

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            forwardX *= l
            forwardY *= l
            forwardZ *= l
        }

        let sideX = forwardY * up.values[2] - forwardZ * up.values[1]
        let sideY = forwardZ * up.values[0] - forwardX * up.values[2]
        let sideZ = forwardX * up.values[1] - forwardY * up.values[0]

        l = sideX * sideX + sideY * sideY + sideZ * sideZ

        if (l > 0) {
            l = 1.0 / Math.sqrt(l)
            sideX *= l
            sideY *= l
            sideZ *= l
        }

        const upX = sideY * forwardZ - sideZ * forwardY
        const upY = sideZ * forwardX - sideX * forwardZ
        const upZ = sideX * forwardY - sideY * forwardX

        this.values[0] = sideX
        this.values[4] = sideY
        this.values[8] = sideZ
        this.values[12] = 0

        this.values[1] = upX
        this.values[5] = upY
        this.values[9] = upZ
        this.values[13] = 0

        this.values[2] = -forwardX
        this.values[6] = -forwardY
        this.values[10] = -forwardZ
        this.values[14] = 0

        this.values[3] = 0
        this.values[7] = 0
        this.values[11] = 0
        this.values[15] = 1.0

        const x = -eye.values[0]
        const y = -eye.values[1]
        const z = -eye.values[2]

        this.values[12] = this.values[0] * x + this.values[4] * y + this.values[8] * z + this.values[12]
        this.values[13] = this.values[1] * x + this.values[5] * y + this.values[9] * z + this.values[13]
        this.values[14] = this.values[2] * x + this.values[6] * y + this.values[10] * z + this.values[14]
        this.values[15] = this.values[3] * x + this.values[7] * y + this.values[11] * z + this.values[15]
    }

    public Clone(m: Matrix4x4) {
        this.values[0] = m.values[0]
        this.values[1] = m.values[1]
        this.values[2] = m.values[2]
        this.values[3] = m.values[3]
        this.values[4] = m.values[4]
        this.values[5] = m.values[5]
        this.values[6] = m.values[6]
        this.values[7] = m.values[7]
        this.values[8] = m.values[8]
        this.values[9] = m.values[9]
        this.values[10] = m.values[10]
        this.values[11] = m.values[11]
        this.values[12] = m.values[12]
        this.values[13] = m.values[13]
        this.values[14] = m.values[14]
        this.values[15] = m.values[15]
    }

    public Multiply(m: Matrix4x4) {
        const t0 = this.values[0]
        const t1 = this.values[1]
        const t2 = this.values[2]
        const t3 = this.values[3]
        const t4 = this.values[4]
        const t5 = this.values[5]
        const t6 = this.values[6]
        const t7 = this.values[7]
        const t8 = this.values[8]
        const t9 = this.values[9]
        const t10 = this.values[10]
        const t11 = this.values[11]
        const t12 = this.values[12]
        const t13 = this.values[13]
        const t14 = this.values[14]
        const t15 = this.values[15]

        this.values[0] = t0 * m.values[0] + t4 * m.values[1] + t8 * m.values[2] + t12 * m.values[3]
        this.values[1] = t1 * m.values[0] + t5 * m.values[1] + t9 * m.values[2] + t13 * m.values[3]
        this.values[2] = t2 * m.values[0] + t6 * m.values[1] + t10 * m.values[2] + t14 * m.values[3]
        this.values[3] = t3 * m.values[0] + t7 * m.values[1] + t11 * m.values[2] + t15 * m.values[3]
        this.values[4] = t0 * m.values[4] + t4 * m.values[5] + t8 * m.values[6] + t12 * m.values[7]
        this.values[5] = t1 * m.values[4] + t5 * m.values[5] + t9 * m.values[6] + t13 * m.values[7]
        this.values[6] = t2 * m.values[4] + t6 * m.values[5] + t10 * m.values[6] + t14 * m.values[7]
        this.values[7] = t3 * m.values[4] + t7 * m.values[5] + t11 * m.values[6] + t15 * m.values[7]
        this.values[8] = t0 * m.values[8] + t4 * m.values[9] + t8 * m.values[10] + t12 * m.values[11]
        this.values[9] = t1 * m.values[8] + t5 * m.values[9] + t9 * m.values[10] + t13 * m.values[11]
        this.values[10] = t2 * m.values[8] + t6 * m.values[9] + t10 * m.values[10] + t14 * m.values[11]
        this.values[11] = t3 * m.values[8] + t7 * m.values[9] + t11 * m.values[10] + t15 * m.values[11]
        this.values[12] = t0 * m.values[12] + t4 * m.values[13] + t8 * m.values[14] + t12 * m.values[15]
        this.values[13] = t1 * m.values[12] + t5 * m.values[13] + t9 * m.values[14] + t13 * m.values[15]
        this.values[14] = t2 * m.values[12] + t6 * m.values[13] + t10 * m.values[14] + t14 * m.values[15]
        this.values[15] = t3 * m.values[12] + t7 * m.values[13] + t11 * m.values[14] + t15 * m.values[15]
    }

    public static Copy(src: Matrix4x4, dst: Matrix4x4) {
        dst.values[0] = src.values[0]
        dst.values[1] = src.values[1]
        dst.values[2] = src.values[2]
        dst.values[3] = src.values[3]
        dst.values[4] = src.values[4]
        dst.values[5] = src.values[5]
        dst.values[6] = src.values[6]
        dst.values[7] = src.values[7]
        dst.values[8] = src.values[8]
        dst.values[9] = src.values[9]
        dst.values[10] = src.values[10]
        dst.values[11] = src.values[11]
        dst.values[12] = src.values[12]
        dst.values[13] = src.values[13]
        dst.values[14] = src.values[14]
        dst.values[15] = src.values[15]
    }

    public static Transpose(out: Matrix4x4, m: Matrix4x4) {
        out.values[0] = m.values[0]
        out.values[1] = m.values[4]
        out.values[2] = m.values[8]
        out.values[3] = m.values[12]
        out.values[4] = m.values[1]
        out.values[5] = m.values[5]
        out.values[6] = m.values[9]
        out.values[7] = m.values[13]
        out.values[8] = m.values[2]
        out.values[9] = m.values[6]
        out.values[10] = m.values[10]
        out.values[11] = m.values[14]
        out.values[12] = m.values[3]
        out.values[13] = m.values[7]
        out.values[14] = m.values[11]
        out.values[15] = m.values[15]
    }

    public static Multiply(out: Matrix4x4, a: Matrix4x4, b: Matrix4x4) {
        out.values[0] = a.values[0] * b.values[0] + a.values[4] * b.values[1] + a.values[8] * b.values[2] + a.values[12] * b.values[3]
        out.values[1] = a.values[1] * b.values[0] + a.values[5] * b.values[1] + a.values[9] * b.values[2] + a.values[13] * b.values[3]
        out.values[2] = a.values[2] * b.values[0] + a.values[6] * b.values[1] + a.values[10] * b.values[2] + a.values[14] * b.values[3]
        out.values[3] = a.values[3] * b.values[0] + a.values[7] * b.values[1] + a.values[11] * b.values[2] + a.values[15] * b.values[3]
        out.values[4] = a.values[0] * b.values[4] + a.values[4] * b.values[5] + a.values[8] * b.values[6] + a.values[12] * b.values[7]
        out.values[5] = a.values[1] * b.values[4] + a.values[5] * b.values[5] + a.values[9] * b.values[6] + a.values[13] * b.values[7]
        out.values[6] = a.values[2] * b.values[4] + a.values[6] * b.values[5] + a.values[10] * b.values[6] + a.values[14] * b.values[7]
        out.values[7] = a.values[3] * b.values[4] + a.values[7] * b.values[5] + a.values[11] * b.values[6] + a.values[15] * b.values[7]
        out.values[8] = a.values[0] * b.values[8] + a.values[4] * b.values[9] + a.values[8] * b.values[10] + a.values[12] * b.values[11]
        out.values[9] = a.values[1] * b.values[8] + a.values[5] * b.values[9] + a.values[9] * b.values[10] + a.values[13] * b.values[11]
        out.values[10] = a.values[2] * b.values[8] + a.values[6] * b.values[9] + a.values[10] * b.values[10] + a.values[14] * b.values[11]
        out.values[11] = a.values[3] * b.values[8] + a.values[7] * b.values[9] + a.values[11] * b.values[10] + a.values[15] * b.values[11]
        out.values[12] = a.values[0] * b.values[12] + a.values[4] * b.values[13] + a.values[8] * b.values[14] + a.values[12] * b.values[15]
        out.values[13] = a.values[1] * b.values[12] + a.values[5] * b.values[13] + a.values[9] * b.values[14] + a.values[13] * b.values[15]
        out.values[14] = a.values[2] * b.values[12] + a.values[6] * b.values[13] + a.values[10] * b.values[14] + a.values[14] * b.values[15]
        out.values[15] = a.values[3] * b.values[12] + a.values[7] * b.values[13] + a.values[11] * b.values[14] + a.values[15] * b.values[15]
    }
}
