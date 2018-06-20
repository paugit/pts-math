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

import { Matrix4x4 } from "./Matrix4x4"
import { Vector4 } from "./vector4"
import { Vector3 } from "./vector3"

export function DegreesToRadians(d: GLfloat) {
	return (d * Math.PI) / 180.0
}

export function RadiansToDegrees(r: GLfloat) {
	return (r * 180.0) / Math.PI
}

export function Project(position: Vector3, modelViewMatrix: Matrix4x4, projectionMatrix: Matrix4x4, viewport: Vector4, out: Vector3) {
	const t0 = projectionMatrix.values[0] * modelViewMatrix.values[0] + projectionMatrix.values[4] * modelViewMatrix.values[1] + projectionMatrix.values[8] * modelViewMatrix.values[2] + projectionMatrix.values[12] * modelViewMatrix.values[3]
	const t1 = projectionMatrix.values[1] * modelViewMatrix.values[0] + projectionMatrix.values[5] * modelViewMatrix.values[1] + projectionMatrix.values[9] * modelViewMatrix.values[2] + projectionMatrix.values[13] * modelViewMatrix.values[3]
	const t2 = projectionMatrix.values[2] * modelViewMatrix.values[0] + projectionMatrix.values[6] * modelViewMatrix.values[1] + projectionMatrix.values[10] * modelViewMatrix.values[2] + projectionMatrix.values[14] * modelViewMatrix.values[3]
	const t3 = projectionMatrix.values[3] * modelViewMatrix.values[0] + projectionMatrix.values[7] * modelViewMatrix.values[1] + projectionMatrix.values[11] * modelViewMatrix.values[2] + projectionMatrix.values[15] * modelViewMatrix.values[3]
	const t4 = projectionMatrix.values[0] * modelViewMatrix.values[4] + projectionMatrix.values[4] * modelViewMatrix.values[5] + projectionMatrix.values[8] * modelViewMatrix.values[6] + projectionMatrix.values[12] * modelViewMatrix.values[7]
	const t5 = projectionMatrix.values[1] * modelViewMatrix.values[4] + projectionMatrix.values[5] * modelViewMatrix.values[5] + projectionMatrix.values[9] * modelViewMatrix.values[6] + projectionMatrix.values[13] * modelViewMatrix.values[7]
	const t6 = projectionMatrix.values[2] * modelViewMatrix.values[4] + projectionMatrix.values[6] * modelViewMatrix.values[5] + projectionMatrix.values[10] * modelViewMatrix.values[6] + projectionMatrix.values[14] * modelViewMatrix.values[7]
	const t7 = projectionMatrix.values[3] * modelViewMatrix.values[4] + projectionMatrix.values[7] * modelViewMatrix.values[5] + projectionMatrix.values[11] * modelViewMatrix.values[6] + projectionMatrix.values[15] * modelViewMatrix.values[7]
	const t8 = projectionMatrix.values[0] * modelViewMatrix.values[8] + projectionMatrix.values[4] * modelViewMatrix.values[9] + projectionMatrix.values[8] * modelViewMatrix.values[10] + projectionMatrix.values[12] * modelViewMatrix.values[11]
	const t9 = projectionMatrix.values[1] * modelViewMatrix.values[8] + projectionMatrix.values[5] * modelViewMatrix.values[9] + projectionMatrix.values[9] * modelViewMatrix.values[10] + projectionMatrix.values[13] * modelViewMatrix.values[11]
	const t10 = projectionMatrix.values[2] * modelViewMatrix.values[8] + projectionMatrix.values[6] * modelViewMatrix.values[9] + projectionMatrix.values[10] * modelViewMatrix.values[10] + projectionMatrix.values[14] * modelViewMatrix.values[11]
	const t11 = projectionMatrix.values[3] * modelViewMatrix.values[8] + projectionMatrix.values[7] * modelViewMatrix.values[9] + projectionMatrix.values[11] * modelViewMatrix.values[10] + projectionMatrix.values[15] * modelViewMatrix.values[11]
	const t12 = projectionMatrix.values[0] * modelViewMatrix.values[12] + projectionMatrix.values[4] * modelViewMatrix.values[13] + projectionMatrix.values[8] * modelViewMatrix.values[14] + projectionMatrix.values[12] * modelViewMatrix.values[15]
	const t13 = projectionMatrix.values[1] * modelViewMatrix.values[12] + projectionMatrix.values[5] * modelViewMatrix.values[13] + projectionMatrix.values[9] * modelViewMatrix.values[14] + projectionMatrix.values[13] * modelViewMatrix.values[15]
	const t14 = projectionMatrix.values[2] * modelViewMatrix.values[12] + projectionMatrix.values[6] * modelViewMatrix.values[13] + projectionMatrix.values[10] * modelViewMatrix.values[14] + projectionMatrix.values[14] * modelViewMatrix.values[15]
	const t15 = projectionMatrix.values[3] * modelViewMatrix.values[12] + projectionMatrix.values[7] * modelViewMatrix.values[13] + projectionMatrix.values[11] * modelViewMatrix.values[14] + projectionMatrix.values[15] * modelViewMatrix.values[15]

	const w = t3 * position.values[0] + t7 * position.values[1] + t11 * position.values[2] + t15

	if (w == 0) {
		return false
	}

	const x = ((t0 * position.values[0] + t4 * position.values[1] + t8 * position.values[2] + t12) / w) * 0.5 + 0.5
	const y = ((t1 * position.values[0] + t5 * position.values[1] + t9 * position.values[2] + t13) / w) * 0.5 + 0.5
	const z = ((t2 * position.values[0] + t6 * position.values[1] + t10 * position.values[2] + t14) / w) * 0.5 + 0.5

	out.values[0] = x * viewport.values[2] + viewport.values[0]
	out.values[1] = y * viewport.values[3] + viewport.values[1]
	out.values[2] = z

	return true
}

export function Unproject(position: Vector3, modelViewMatrix: Matrix4x4, projectionMatrix: Matrix4x4, viewport: Vector4, out: Vector3) {
	const t0 = projectionMatrix.values[0] * modelViewMatrix.values[0] + projectionMatrix.values[4] * modelViewMatrix.values[1] + projectionMatrix.values[8] * modelViewMatrix.values[2] + projectionMatrix.values[12] * modelViewMatrix.values[3]
	const t1 = projectionMatrix.values[1] * modelViewMatrix.values[0] + projectionMatrix.values[5] * modelViewMatrix.values[1] + projectionMatrix.values[9] * modelViewMatrix.values[2] + projectionMatrix.values[13] * modelViewMatrix.values[3]
	const t2 = projectionMatrix.values[2] * modelViewMatrix.values[0] + projectionMatrix.values[6] * modelViewMatrix.values[1] + projectionMatrix.values[10] * modelViewMatrix.values[2] + projectionMatrix.values[14] * modelViewMatrix.values[3]
	const t3 = projectionMatrix.values[3] * modelViewMatrix.values[0] + projectionMatrix.values[7] * modelViewMatrix.values[1] + projectionMatrix.values[11] * modelViewMatrix.values[2] + projectionMatrix.values[15] * modelViewMatrix.values[3]
	const t4 = projectionMatrix.values[0] * modelViewMatrix.values[4] + projectionMatrix.values[4] * modelViewMatrix.values[5] + projectionMatrix.values[8] * modelViewMatrix.values[6] + projectionMatrix.values[12] * modelViewMatrix.values[7]
	const t5 = projectionMatrix.values[1] * modelViewMatrix.values[4] + projectionMatrix.values[5] * modelViewMatrix.values[5] + projectionMatrix.values[9] * modelViewMatrix.values[6] + projectionMatrix.values[13] * modelViewMatrix.values[7]
	const t6 = projectionMatrix.values[2] * modelViewMatrix.values[4] + projectionMatrix.values[6] * modelViewMatrix.values[5] + projectionMatrix.values[10] * modelViewMatrix.values[6] + projectionMatrix.values[14] * modelViewMatrix.values[7]
	const t7 = projectionMatrix.values[3] * modelViewMatrix.values[4] + projectionMatrix.values[7] * modelViewMatrix.values[5] + projectionMatrix.values[11] * modelViewMatrix.values[6] + projectionMatrix.values[15] * modelViewMatrix.values[7]
	const t8 = projectionMatrix.values[0] * modelViewMatrix.values[8] + projectionMatrix.values[4] * modelViewMatrix.values[9] + projectionMatrix.values[8] * modelViewMatrix.values[10] + projectionMatrix.values[12] * modelViewMatrix.values[11]
	const t9 = projectionMatrix.values[1] * modelViewMatrix.values[8] + projectionMatrix.values[5] * modelViewMatrix.values[9] + projectionMatrix.values[9] * modelViewMatrix.values[10] + projectionMatrix.values[13] * modelViewMatrix.values[11]
	const t10 = projectionMatrix.values[2] * modelViewMatrix.values[8] + projectionMatrix.values[6] * modelViewMatrix.values[9] + projectionMatrix.values[10] * modelViewMatrix.values[10] + projectionMatrix.values[14] * modelViewMatrix.values[11]
	const t11 = projectionMatrix.values[3] * modelViewMatrix.values[8] + projectionMatrix.values[7] * modelViewMatrix.values[9] + projectionMatrix.values[11] * modelViewMatrix.values[10] + projectionMatrix.values[15] * modelViewMatrix.values[11]
	const t12 = projectionMatrix.values[0] * modelViewMatrix.values[12] + projectionMatrix.values[4] * modelViewMatrix.values[13] + projectionMatrix.values[8] * modelViewMatrix.values[14] + projectionMatrix.values[12] * modelViewMatrix.values[15]
	const t13 = projectionMatrix.values[1] * modelViewMatrix.values[12] + projectionMatrix.values[5] * modelViewMatrix.values[13] + projectionMatrix.values[9] * modelViewMatrix.values[14] + projectionMatrix.values[13] * modelViewMatrix.values[15]
	const t14 = projectionMatrix.values[2] * modelViewMatrix.values[12] + projectionMatrix.values[6] * modelViewMatrix.values[13] + projectionMatrix.values[10] * modelViewMatrix.values[14] + projectionMatrix.values[14] * modelViewMatrix.values[15]
	const t15 = projectionMatrix.values[3] * modelViewMatrix.values[12] + projectionMatrix.values[7] * modelViewMatrix.values[13] + projectionMatrix.values[11] * modelViewMatrix.values[14] + projectionMatrix.values[15] * modelViewMatrix.values[15]

	const a = t10 * t15 - t11 * t14
	const b = t9 * t15 - t11 * t13
	const c = t9 * t14 - t10 * t13
	const d = t8 * t15 - t11 * t12
	const e = t8 * t14 - t10 * t12
	const f = t8 * t13 - t9 * t12

	const d0 = t5 * a - t6 * b + t7 * c
	let d1 = t4 * a - t6 * d + t7 * e
	const d2 = t4 * b - t5 * d + t7 * f
	let d3 = t4 * c - t5 * e + t6 * f

	let det = t0 * d0 - t1 * d1 + t2 * d2 - t3 * d3

	if (det == 0) {
		return false
	}

	d1 *= -1.0
	d3 *= -1.0

	const g = t6 * t15 - t7 * t14
	const h = t5 * t15 - t7 * t13
	const i = t5 * t14 - t6 * t13
	const j = t4 * t15 - t7 * t12
	const k = t4 * t14 - t6 * t12
	const l = t4 * t13 - t5 * t12
	const mm = t6 * t11 - t7 * t10
	const n = t5 * t11 - t7 * t9
	const o = t5 * t10 - t6 * t9
	const p = t4 * t11 - t7 * t8
	const q = t4 * t10 - t6 * t8
	const r = t4 * t9 - t5 * t8

	const d4 = -(t1 * a - t2 * b + t3 * c)
	const d5 = t0 * a - t2 * d + t3 * e
	const d6 = -(t0 * b - t1 * d + t3 * f)
	const d7 = t0 * c - t1 * e + t2 * f

	const d8 = t1 * g - t2 * h + t3 * i
	const d9 = -(t0 * g - t2 * j + t3 * k)
	const d10 = t0 * h - t1 * j + t3 * l
	const d11 = -(t0 * i - t1 * k + t2 * l)

	const d12 = -(t1 * mm - t2 * n + t3 * o)
	const d13 = t0 * mm - t2 * p + t3 * q
	const d14 = -(t0 * n - t1 * p + t3 * r)
	const d15 = t0 * o - t1 * q + t2 * r

	det = 1.0 / det

	const i0 = d0 * det
	const i1 = d4 * det
	const i2 = d8 * det
	const i3 = d12 * det
	const i4 = d1 * det
	const i5 = d5 * det
	const i6 = d9 * det
	const i7 = d13 * det
	const i8 = d2 * det
	const i9 = d6 * det
	const i10 = d10 * det
	const i11 = d14 * det
	const i12 = d3 * det
	const i13 = d7 * det
	const i14 = d11 * det
	const i15 = d15 * det

	let x = ((position.values[0] - viewport.values[0]) / viewport.values[2]) * 2 - 1
	let y = ((position.values[1] - viewport.values[1]) / viewport.values[3]) * 2 - 1
	let z = position.values[2] * 2 - 1

	const w = i3 * x + i7 * y + i11 * z + i15

	if (w == 0) {
		return false
	}

	out.values[0] = (i0 * x + i4 * y + i8 * z + i12) / w
	out.values[1] = (i1 * x + i5 * y + i9 * z + i13) / w
	out.values[2] = (i2 * x + i6 * y + i10 * z + i14) / w

	return true
}
