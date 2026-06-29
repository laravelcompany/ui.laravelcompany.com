import { Button } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SEODashboardHero: FC = function () {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000 * 3; i++)
      positions[i] = (Math.random() - 0.5) * 30;

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: "#a78bfa",
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    const grid = new THREE.GridHelper(20, 40, "#6366f1", "#4f46e5");
    grid.position.y = -2.5;
    scene.add(grid);

    camera.position.z = 6;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0004;
      grid.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gray-950"
      style={{ minHeight: "100vh" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ touchAction: "none" }}
      />
      <div
        className="relative z-10 mx-auto flex max-w-7xl items-center px-8"
        style={{
          minHeight: "100vh",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="w-full max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/60 px-4 py-1.5 text-sm text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Open Source Laravel Package
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Professional SEO Reports for{" "}
            <span className="text-purple-400">Laravel</span>
          </h1>
          <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed text-white/60">
            Identify critical technical SEO issues and improve your
            website&apos;s health and performance. Automated Lighthouse audits,
            real-time monitoring, and actionable insights built for Laravel
            developers.
          </p>
          <div className="mb-8 flex flex-wrap gap-4">
            <Button className="bg-purple-600 enabled:hover:bg-purple-700">
              View Capabilities
            </Button>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              "Free tier available",
              "Open source",
              "Laravel 10 & 11 compatible",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm text-white/50"
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden flex-1 lg:flex lg:justify-center">
          <div className="w-full max-w-[540px] rounded-xl border border-white/10 bg-gray-900/80 backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-purple-600 text-[10px] font-bold text-white">
                  S
                </div>
                <span className="text-sm font-semibold text-white">
                  SEO Report
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/30">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M10 10l2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold text-white/50">
                  Site Health Score
                </p>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 86 86" width="72" height="72">
                    <circle
                      cx="43"
                      cy="43"
                      r="36"
                      fill="none"
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="43"
                      cy="43"
                      r="36"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="8"
                      strokeDasharray="226"
                      strokeDashoffset="30"
                      strokeLinecap="round"
                      transform="rotate(-90 43 43)"
                      style={{ filter: "drop-shadow(0 0 6px #22c55e)" }}
                    />
                  </svg>
                  <div>
                    <span className="text-2xl font-bold text-white">92</span>
                    <span className="ml-1 text-xs font-medium text-green-400">
                      Excellent
                    </span>
                    <p className="text-xs text-green-400">+12%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold text-white/50">
                  Core Web Vitals
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "LCP", val: "1.2s" },
                    { label: "FID", val: "18ms" },
                    { label: "CLS", val: "0.03" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-[10px] text-white/40">{m.label}</p>
                      <p className="text-sm font-bold text-white">{m.val}</p>
                      <p className="text-[10px] text-green-400">Good↑</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold text-white/50">
                  Issues Overview
                </p>
                <div className="space-y-1.5">
                  {[
                    { label: "Critical", count: "2", color: "#ef4444" },
                    { label: "Warnings", count: "8", color: "#fbbf24" },
                    { label: "Passed", count: "124", color: "#22c55e" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="flex items-center gap-1.5 text-white/60">
                        <span
                          className="inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: m.color }}
                        />
                        {m.label}
                      </span>
                      <span style={{ color: m.color }}>{m.count}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-2 block text-[10px] text-purple-400">
                  View Issues →
                </a>
              </div>
              <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                <p className="mb-2 text-xs font-semibold text-white/50">
                  Crawl Status
                </p>
                <p className="text-xs text-white/30">Pages Crawled</p>
                <p className="text-lg font-bold text-white">256</p>
                <svg viewBox="0 0 180 40" className="mt-1 w-full">
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 C20 34,30 28,45 24 S65 18,80 14 S110 10,130 8 S160 6,180 4"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 35 C20 34,30 28,45 24 S65 18,80 14 S110 10,130 8 S160 6,180 4 L180 40 L0 40z"
                    fill="url(#cg)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEODashboardHero;
