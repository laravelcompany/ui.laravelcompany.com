import { Button } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const AINetworkHero: FC = function () {
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

    const count = 120;
    const positions = new Float32Array(count * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 16;
      positions[i3 + 1] = (Math.random() - 0.5) * 16;
      positions[i3 + 2] = (Math.random() - 0.5) * 16;
      velocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: (Math.random() - 0.5) * 0.005,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.12,
      color: "#c084fc",
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodes);

    const lineMat = new THREE.LineBasicMaterial({
      color: "#a78bfa",
      transparent: true,
      opacity: 0.15,
    });

    let lineGroup: THREE.LineSegments | null = null;
    camera.position.z = 8;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      const attr = nodes.geometry.getAttribute("position");
      if (!attr) return;
      const pos = attr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const v = velocities[i]!;
        const px = pos[i3]!;
        const py = pos[i3 + 1]!;
        const pz = pos[i3 + 2]!;
        pos[i3] = px + v.x;
        pos[i3 + 1] = py + v.y;
        pos[i3 + 2] = pz + v.z;
        if (Math.abs(pos[i3]!) > 8) v.x *= -1;
        if (Math.abs(pos[i3 + 1]!) > 8) v.y *= -1;
        if (Math.abs(pos[i3 + 2]!) > 8) v.z *= -1;
      }
      attr.needsUpdate = true;

      const linePositions: number[] = [];
      for (let i = 0; i < count; i++) {
        const pi3 = i * 3;
        for (let j = i + 1; j < count; j++) {
          const pj3 = j * 3;
          const dx = pos[pi3]! - pos[pj3]!;
          const dy = pos[pi3 + 1]! - pos[pj3 + 1]!;
          const dz = pos[pi3 + 2]! - pos[pj3 + 2]!;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 2.5) {
            linePositions.push(pos[pi3]!, pos[pi3 + 1]!, pos[pi3 + 2]!);
            linePositions.push(pos[pj3]!, pos[pj3 + 1]!, pos[pj3 + 2]!);
          }
        }
      }

      if (lineGroup) {
        scene.remove(lineGroup);
        lineGroup.geometry.dispose();
        lineGroup = null;
      }
      if (linePositions.length > 0) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3),
        );
        lineGroup = new THREE.LineSegments(geo, lineMat);
        scene.add(lineGroup);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (lineGroup) {
        scene.remove(lineGroup);
        lineGroup.geometry.dispose();
      }
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/60 px-4 py-1.5 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            AI-Powered Intelligence
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Deploy AI Models at{" "}
            <span className="text-violet-400">Lightning Speed</span>
          </h1>
          <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed text-white/60">
            Train, deploy, and monitor machine learning models with a single API
            call. Built for developers who want AI infrastructure without the
            complexity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-violet-600 enabled:hover:bg-violet-700">
              Get Started
            </Button>
            <Button
              color="gray"
              className="border-white/10 bg-white/5 text-white enabled:hover:bg-white/10"
            >
              Read Docs
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              {
                val: "150+",
                label: "Pre-trained models",
                color: "text-violet-400",
              },
              {
                val: "<100ms",
                label: "Avg. inference",
                color: "text-violet-400",
              },
              {
                val: "99.95%",
                label: "Uptime guarantee",
                color: "text-violet-400",
              },
            ].map((s) => (
              <div key={s.label}>
                <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                <p className="text-xs text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden flex-1 lg:flex lg:justify-center">
          <div className="w-full max-w-[460px] space-y-3">
            <div className="rounded-lg border border-white/10 bg-gray-900/60 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-white/70">
                  Model Status: Active
                </span>
                <span className="ml-auto text-xs text-white/30">v2.4.1</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Accuracy", val: "97.3%", bar: "97" },
                  { label: "Precision", val: "94.8%", bar: "95" },
                  { label: "Recall", val: "96.1%", bar: "96" },
                  { label: "F1 Score", val: "95.4%", bar: "95" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-white/50">{m.label}</span>
                      <span className="text-white">{m.val}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-violet-500"
                        style={{ width: `${m.bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-gray-900/60 px-4 py-3 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-xs text-green-400">
                API
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-white/70">
                  Last Prediction
                </p>
                <p className="text-xs text-white/40">
                  2 seconds ago &bull; 98.2% confidence
                </p>
              </div>
              <div className="h-2 w-2 rounded-full bg-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AINetworkHero;
