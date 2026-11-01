import React, { useRef, useMemo, Component, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Generate static deterministic particle coordinates to ensure React purity
const STATIC_PARTICLES = Array.from({ length: 70 }, (_, i) => ({
  x: ((i * 17) % 70) / 10 - 3.5,
  y: -1.5 + ((i * 23) % 50) / 10,
  z: ((i * 13) % 50) / 10 - 2.5,
  speed: 0.4 + ((i * 7) % 8) / 10,
  color: i % 2 === 0 ? '#55B51F' : '#F5A000',
  size: 0.03 + ((i * 3) % 5) / 100,
  offset: (i * 0.4) % (Math.PI * 2),
}));

// Robust Error Boundary so Three/WebGL issues never break the landing page
class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Three.js Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative w-full h-[480px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#063B18] to-[#101A13] p-8 flex flex-col items-center justify-center text-white text-center shadow-2xl border border-[#55B51F]/30">
          <div className="relative w-28 h-28 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-[#55B51F] animate-pulse"></div>
            <img
              src="/logo-footer.png"
              alt="SAM Green Power"
              className="w-full h-full object-contain p-2"
            />
          </div>
          <h3 className="text-2xl font-black mb-2 text-white font-display">
            High-Efficiency Photovoltaic Array
          </h3>
          <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
            Engineered Tier-1 Monocrystalline Solar Installation generating clean, reliable energy for homes and industries.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
            <span className="text-[#55B51F]">● Live Output: 8.42 kW</span>
            <span className="text-white/40">|</span>
            <span className="text-[#F5A000]">● Peak Irradiance: 985 W/m²</span>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Single Photovoltaic Solar Panel with Aluminum frame and Cell texture
function SolarPanel({ position, rotation, texture }) {
  const panelWidth = 1.9;
  const panelHeight = 3.0;
  const frameThickness = 0.08;
  const frameDepth = 0.08;

  return (
    <group position={position} rotation={rotation}>
      {/* Aluminum Anodized Metal Frame */}
      {/* Top Frame */}
      <mesh position={[0, panelHeight / 2 - frameThickness / 2, 0]}>
        <boxGeometry args={[panelWidth, frameThickness, frameDepth]} />
        <meshStandardMaterial color="#B0B8C0" metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Bottom Frame */}
      <mesh position={[0, -panelHeight / 2 + frameThickness / 2, 0]}>
        <boxGeometry args={[panelWidth, frameThickness, frameDepth]} />
        <meshStandardMaterial color="#B0B8C0" metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Left Frame */}
      <mesh position={[-panelWidth / 2 + frameThickness / 2, 0, 0]}>
        <boxGeometry args={[frameThickness, panelHeight, frameDepth]} />
        <meshStandardMaterial color="#B0B8C0" metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Right Frame */}
      <mesh position={[panelWidth / 2 - frameThickness / 2, 0, 0]}>
        <boxGeometry args={[frameThickness, panelHeight, frameDepth]} />
        <meshStandardMaterial color="#B0B8C0" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* Backsheet */}
      <mesh position={[0, 0, -frameDepth / 4]}>
        <boxGeometry args={[panelWidth - frameThickness * 2, panelHeight - frameThickness * 2, 0.02]} />
        <meshStandardMaterial color="#0A1826" roughness={0.9} />
      </mesh>

      {/* Photovoltaic Active Cell Surface */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[panelWidth - frameThickness * 2, panelHeight - frameThickness * 2]} />
        {texture ? (
          <meshStandardMaterial
            map={texture}
            metalness={0.3}
            roughness={0.15}
            envMapIntensity={1.2}
          />
        ) : (
          <meshStandardMaterial
            color="#1762A5"
            metalness={0.4}
            roughness={0.2}
          />
        )}
      </mesh>

      {/* Anti-Reflective Tempered Glass Cover */}
      <mesh position={[0, 0, 0.025]}>
        <planeGeometry args={[panelWidth - frameThickness * 2, panelHeight - frameThickness * 2]} />
        <meshPhysicalMaterial
          color="#1762A5"
          transparent
          opacity={0.15}
          roughness={0.05}
          transmission={0.85}
          thickness={0.02}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </group>
  );
}

// Glowing Orange Sun with Corona Flare
function Sun({ position = [3.6, 2.6, -3.2] }) {
  const sunMesh = useRef();
  const coronaMesh = useRef();
  const raysMesh = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (coronaMesh.current) {
      coronaMesh.current.rotation.z = t * 0.08;
      const scale = 1 + Math.sin(t * 1.5) * 0.03;
      coronaMesh.current.scale.set(scale, scale, scale);
    }
    if (raysMesh.current) {
      raysMesh.current.rotation.z = -t * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Sun Core */}
      <mesh ref={sunMesh}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#F5A000" />
      </mesh>

      {/* Warm Corona Glow */}
      <mesh ref={coronaMesh} position={[0, 0, -0.05]}>
        <planeGeometry args={[4.2, 4.2]} />
        <meshBasicMaterial
          color="#FFA726"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer Radiance Halo */}
      <mesh ref={raysMesh} position={[0, 0, -0.1]}>
        <circleGeometry args={[3.2, 32]} />
        <meshBasicMaterial
          color="#FF9800"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Point light casting solar warmth */}
      <pointLight color="#FFF3E0" intensity={3.5} distance={25} decay={1.8} />
    </group>
  );
}

// Subtle Green Energy Flow along conduits
function EnergyFlowConduits() {
  const pulseRef = useRef();
  const pulsePoints = useMemo(() => [
    [-1.05, -1.8, 0.15],
    [1.05, -1.8, 0.15],
    [0, -2.4, 0.15],
    [0, -3.0, 0.15]
  ], []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pulseRef.current) {
      pulseRef.current.children.forEach((mesh, idx) => {
        if (mesh.material && mesh.material.opacity !== undefined) {
          mesh.material.opacity = 0.4 + Math.sin(t * 4 + idx) * 0.4;
        }
      });
    }
  });

  return (
    <group ref={pulseRef}>
      {/* Central Inverter Box */}
      <mesh position={[0, -2.6, -0.3]}>
        <boxGeometry args={[0.9, 0.7, 0.35]} />
        <meshStandardMaterial color="#063B18" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Status LED on Inverter */}
      <mesh position={[0, -2.5, -0.1]}>
        <circleGeometry args={[0.07, 16]} />
        <meshBasicMaterial color="#55B51F" />
      </mesh>

      {/* Conduit lines */}
      <mesh position={[-1.0, -1.8, -0.2]}>
        <cylinderGeometry args={[0.025, 0.025, 1.4, 8]} />
        <meshStandardMaterial color="#55B51F" emissive="#55B51F" emissiveIntensity={0.8} />
      </mesh>

      <mesh position={[1.0, -1.8, -0.2]}>
        <cylinderGeometry args={[0.025, 0.025, 1.4, 8]} />
        <meshStandardMaterial color="#55B51F" emissive="#55B51F" emissiveIntensity={0.8} />
      </mesh>

      {/* Pulsing energy particles along conduit */}
      {pulsePoints.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#55B51F" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Floating Solar & Green Energy Particles
function EnergyParticles() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.children.forEach((child, i) => {
        const p = STATIC_PARTICLES[i];
        if (p) {
          child.position.y += p.speed * 0.015;
          child.position.x += Math.sin(t * 1.5 + p.offset) * 0.005;
          if (child.position.y > 4.5) {
            child.position.y = -1.8;
          }
        }
      });
    }
  });

  return (
    <group ref={meshRef}>
      {STATIC_PARTICLES.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
}

// Rooftop Angled Mounting Racks
function MountingStructure() {
  return (
    <group position={[0, -0.2, -0.4]} rotation={[-0.32, 0, 0]}>
      {/* Aluminum mounting rails */}
      <mesh position={[0, 1.0, -0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 4.4, 8]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.0, -0.15]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 4.4, 8]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Support stanchions / legs */}
      {[-1.8, 0, 1.8].map((x, idx) => (
        <group key={idx} position={[x, 0, 0]}>
          {/* Back taller support */}
          <mesh position={[0, 1.2, -0.5]} rotation={[0.4, 0, 0]}>
            <cylinderGeometry args={[0.035, 0.035, 1.0, 8]} />
            <meshStandardMaterial color="#64748B" metalness={0.8} />
          </mesh>
          {/* Front base bracket */}
          <mesh position={[0, -1.2, -0.3]}>
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshStandardMaterial color="#475569" metalness={0.85} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Main Interactive Solar Installation Group
function SolarInstallation() {
  const groupRef = useRef();

  // Load texture reliably with standard Three.js loader (non-suspending, 100% stable)
  const texture = useMemo(() => {
    try {
      const loader = new THREE.TextureLoader();
      const tex = loader.load(
        '/textures/solar-cell-texture.png',
        () => {},
        undefined,
        () => {
          console.warn('Could not load solar cell texture, using color fallback');
        }
      );
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    } catch {
      return null;
    }
  }, []);

  // Smooth mouse follow and gentle auto-rotation
  useFrame(({ pointer, clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      const targetRotY = pointer.x * 0.35 + Math.sin(t * 0.4) * 0.06;
      const targetRotX = -pointer.y * 0.2 + 0.15;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }
  });

  const panelTilt = [-0.35, 0, 0];
  const spacingX = 2.05;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 2x2 Photovoltaic Panels */}
      <SolarPanel
        position={[-spacingX / 2, 0.8, -0.25]}
        rotation={panelTilt}
        texture={texture}
      />
      <SolarPanel
        position={[spacingX / 2, 0.8, -0.25]}
        rotation={panelTilt}
        texture={texture}
      />
      
      {/* Mounting racks */}
      <MountingStructure />

      {/* Energy flow conduits */}
      <EnergyFlowConduits />
    </group>
  );
}

// Loading Skeleton while canvas initializes
function CanvasFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#F7FAF5] to-[#EEF5E8]">
      <div className="w-16 h-16 rounded-full border-4 border-[#55B51F] border-t-transparent animate-spin mb-4" />
      <p className="text-xs font-bold text-[#063B18] uppercase tracking-wider">
        Initializing 3D Solar Array...
      </p>
    </div>
  );
}

// 3D Scene Wrapper with Lighting, Shadows, and Ambient Environment
export default function SolarScene3D() {
  return (
    <ThreeErrorBoundary>
      <div className="relative w-full h-[480px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#F7FAF5] via-[#EEF5E8] to-[#E3EFE0] border border-[#55B51F]/20 shadow-2xl">
        {/* Live Telemetry Floating Pill */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#55B51F]/30 shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55B51F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#55B51F]"></span>
            </span>
            <span className="text-xs font-semibold text-[#063B18] tracking-wide">
              3D REAL-TIME PV HARVEST SIMULATOR
            </span>
          </div>

          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-xs text-[#101A13] shadow-sm">
            <div>
              <span className="text-[#718078] block text-[10px] uppercase font-bold tracking-wider">Output</span>
              <span className="font-extrabold text-[#063B18] text-sm">8.42 kW</span>
            </div>
            <div className="w-[1px] h-6 bg-slate-200" />
            <div>
              <span className="text-[#718078] block text-[10px] uppercase font-bold tracking-wider">Sun Irradiance</span>
              <span className="font-bold text-[#F5A000] text-sm">985 W/m²</span>
            </div>
            <div className="w-[1px] h-6 bg-slate-200" />
            <div>
              <span className="text-[#718078] block text-[10px] uppercase font-bold tracking-wider">Efficiency</span>
              <span className="font-bold text-[#55B51F] text-sm">22.8%</span>
            </div>
          </div>
        </div>

        {/* Interactive Drag Hint */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#063B18]/80 text-white/90 text-xs backdrop-blur-sm border border-white/10">
          <svg className="w-4 h-4 text-[#55B51F] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          <span>Drag to rotate 3D solar array</span>
        </div>

        {/* 3D Canvas with Lighting & Controls */}
        <Suspense fallback={<CanvasFallback />}>
          <Canvas
            camera={{ position: [0, 0.6, 6.2], fov: 42 }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={0.7} color="#F7FAF5" />
            
            {/* Key Sunlight */}
            <directionalLight
              position={[5, 4.5, -2]}
              intensity={2.8}
              color="#FFF8E7"
            />
            
            {/* Soft fill light */}
            <directionalLight
              position={[-4, 2, 4]}
              intensity={0.6}
              color="#D4EDDA"
            />

            {/* Subtle orange bounce light */}
            <pointLight position={[3, -1, 2]} intensity={0.8} color="#FFE0B2" />

            {/* Realistic Orange Sun */}
            <Sun />

            {/* Floating Green and Solar Energy Particles */}
            <EnergyParticles />

            {/* Floating 3D Solar Array Installation */}
            <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
              <SolarInstallation />
            </Float>

            {/* Interactive Smooth Orbit Controls */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2 + 0.15}
              minPolarAngle={Math.PI / 3}
              maxAzimuthAngle={Math.PI / 3}
              minAzimuthAngle={-Math.PI / 3}
              rotateSpeed={0.6}
            />
          </Canvas>
        </Suspense>
      </div>
    </ThreeErrorBoundary>
  );
}
