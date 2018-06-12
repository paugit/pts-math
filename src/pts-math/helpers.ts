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
	return (d * Math.PI) / 180.0;
}

export function RadiansToDegrees(r: GLfloat) {
	return (r * 180.0) / Math.PI;
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
