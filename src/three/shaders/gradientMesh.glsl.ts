/**
 * Hero gradient mesh shader.
 *
 * Pattern: Inigo Quilez's "Warp" — recursive domain warping of fbm noise.
 *   https://www.shadertoy.com/view/4s23zz   (reference)
 *   https://iquilezles.org/articles/warp/   (article)
 *
 * Noise: Ashima Arts / Stefan Gustavson 2D simplex noise (canonical impl).
 *   https://github.com/ashima/webgl-noise   (MIT, attribution preserved below)
 *
 * Vertex shader is a fullscreen NDC quad: pair with a [2,2] PlaneGeometry so
 * position.xy already spans (-1,1). No camera transform applied.
 */

export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uAspect;
  uniform vec3  uBg;
  uniform vec3  uAccent;
  uniform vec3  uPrimary;

  varying vec2 vUv;

  // ─── Ashima 2D simplex noise (Stefan Gustavson) ─────────────────────
  // Copyright (c) 2011 Ashima Arts. MIT License. Do not edit — use as-is.
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4( 0.211324865405187,  0.366025403784439,
                        -0.577350269189626,  0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0))
                     + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0),
                            dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  // ──────────────────────────────────────────────────────────────────────

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * snoise(p);
      p  = p * 2.0 + vec2(100.0);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 p = vUv;
    p.x *= uAspect;

    // Subtle mouse parallax — translates sampling point, not the canvas
    p += (uMouse - 0.5) * 0.08;

    // Slow time — full visual cycle ~30s
    float t = uTime * 0.033;

    // IQ domain warp: q feeds r feeds final fbm
    vec2 q = vec2(
      fbm(p + vec2(0.0, 0.0) + t),
      fbm(p + vec2(5.2, 1.3) - t * 0.8)
    );

    vec2 r = vec2(
      fbm(p + 1.5 * q + vec2(1.7, 9.2) + t * 1.1),
      fbm(p + 1.5 * q + vec2(8.3, 2.8) + t * 0.9)
    );

    float f = fbm(p + 1.5 * r);

    // Normalize fbm (~[-1,1]) → [0,1]
    float n = clamp(f * 0.5 + 0.5, 0.0, 1.0);

    // Composite: bg dominates for legibility, accent only on noise peaks,
    // primary as a tiny rim highlight. Smoothsteps tuned so >60% of pixels
    // stay near uBg → contrast with foreground text preserved.
    vec3 col = uBg;
    col = mix(col, uAccent,  smoothstep(0.55, 0.92, n) * 0.70);
    col = mix(col, uPrimary, smoothstep(0.88, 1.00, n) * 0.12);

    gl_FragColor = vec4(col, 1.0);
  }
`;
