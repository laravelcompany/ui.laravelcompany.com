import { Button } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const AnalyticsPlatformHero: FC = function () {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
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

    const torusKnot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.8, 0.3, 128, 16),
      new THREE.MeshBasicMaterial({
        color: "#06b6d4",
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      }),
    );
    torusKnot.position.x = 2.5;
    torusKnot.position.y = 0.5;
    scene.add(torusKnot);

    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.MeshBasicMaterial({
        color: "#8b5cf6",
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    );
    icosahedron.position.x = -2.5;
    icosahedron.position.y = -0.3;
    scene.add(icosahedron);

    const positions = new Float32Array(1500 * 3);
    const colors = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      colors[i3] = 0.02 + Math.random() * 0.3;
      colors[i3 + 1] = 0.4 + Math.random() * 0.5;
      colors[i3 + 2] = 0.7 + Math.random() * 0.3;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    camera.position.z = 6;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.01;
      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.007;
      particles.rotation.y += 0.0003;
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Analytics Platform
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Real-time Analytics for{" "}
            <span className="text-cyan-400">Data-Driven Teams</span>
          </h1>
          <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed text-white/60">
            Track user behavior, monitor conversion funnels, and uncover
            insights with lightning-fast queries. Built for product teams who
            need answers in seconds, not hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-cyan-600 enabled:hover:bg-cyan-700">
              Start Free Trial
            </Button>
            <Button
              color="gray"
              className="border-white/10 bg-white/5 text-white enabled:hover:bg-white/10"
            >
              View Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { val: "10M+", label: "Events/day" },
              { val: "99.9%", label: "Uptime SLA" },
              { val: "<50ms", label: "Query latency" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white">{s.val}</p>
                <p className="text-xs text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden flex-1 lg:flex lg:justify-center">
          <div className="w-full max-w-[480px] space-y-3">
            <div className="rounded-lg border border-white/10 bg-gray-900/60 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/50">
                  Page Views
                </span>
                <span className="text-xs text-green-400">+24%</span>
              </div>
              <div className="flex items-end gap-1">
                {[40, 55, 48, 72, 65, 90, 85, 95, 78, 88, 92, 100].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-cyan-500/40"
                      style={{ height: `${h * 0.35}px` }}
                    />
                  ),
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "Active Users",
                  val: "2,847",
                  change: "+12%",
                  color: "text-green-400",
                },
                {
                  label: "Bounce Rate",
                  val: "32.1%",
                  change: "-5%",
                  color: "text-green-400",
                },
                {
                  label: "Avg. Session",
                  val: "4m 32s",
                  change: "+8%",
                  color: "text-green-400",
                },
                {
                  label: "Conversions",
                  val: "847",
                  change: "+18%",
                  color: "text-green-400",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-white/5 bg-white/5 p-3"
                >
                  <p className="text-xs text-white/50">{s.label}</p>
                  <p className="text-lg font-bold text-white">{s.val}</p>
                  <p className={`text-xs ${s.color}`}>{s.change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPlatformHero;
