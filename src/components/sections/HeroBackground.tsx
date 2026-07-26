/**
 * Fully CSS/SVG animated hero backdrop — no video, no images. Layers, back to front:
 *  1. soft white → pale-teal base gradient
 *  2. two drifting brand glows (teal + navy)
 *  3. a fine dot grid, masked so it fades at the edges
 *  4. a large faint teal "blueprint" ring for depth
 *  5. an animated ECG heartbeat line that draws itself, with a moving pulse dot
 *  6. a few slow-rising light particles
 * Everything is decorative and loops seamlessly; it respects reduced-motion.
 */
export default function HeroBackground() {
  const edgeMask =
    'radial-gradient(120% 120% at 50% 40%, #000 55%, transparent 100%)'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* 1 — base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/50 to-white" />

      {/* 2 — drifting brand glows */}
      <div className="animate-float-slow absolute -left-40 -top-24 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-3xl" />
      <div
        className="animate-float-slow absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-navy/10 blur-3xl"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="animate-orbit-slow absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-[#25a5b3]/10 blur-3xl"
        style={{ animationDelay: '1.5s' }}
      />

      {/* 3 — dot grid, edge-masked */}
      <div
        className="absolute inset-0 motion-reduce:hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,56,103,0.10) 1px, transparent 1.6px)',
          backgroundSize: '32px 32px',
          maskImage: edgeMask,
          WebkitMaskImage: edgeMask,
        }}
      />

      {/* 4 + 5 — blueprint ring & ECG line (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ecgGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2db8c7" stopOpacity="0" />
            <stop offset="20%" stopColor="#2db8c7" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#003867" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#003867" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#2db8c7" stopOpacity="0" />
            <stop offset="90%" stopColor="#2db8c7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2db8c7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* faint concentric rings, right side, for depth */}
        <g className="animate-float-slow" style={{ transformOrigin: '1120px 300px' }}>
          <circle cx="1120" cy="300" r="260" fill="url(#ringGrad)" />
          <circle cx="1120" cy="300" r="230" fill="none" stroke="#2db8c7" strokeOpacity="0.10" strokeWidth="1" />
          <circle cx="1120" cy="300" r="170" fill="none" stroke="#003867" strokeOpacity="0.08" strokeWidth="1" />
          <circle cx="1120" cy="300" r="110" fill="none" stroke="#2db8c7" strokeOpacity="0.12" strokeWidth="1" />
        </g>

        {/* ECG baseline (very faint) */}
        <path
          d="M0 330 H420 l24 0 l16 -70 l20 150 l18 -190 l20 250 l16 -140 l14 0 H900 l24 0 l16 -60 l18 120 l16 -150 l18 190 l16 -110 l12 0 H1440"
          fill="none"
          stroke="#003867"
          strokeOpacity="0.06"
          strokeWidth="2"
        />
        {/* ECG animated draw */}
        <path
          className="animate-ecg-dash motion-reduce:animate-none"
          d="M0 330 H420 l24 0 l16 -70 l20 150 l18 -190 l20 250 l16 -140 l14 0 H900 l24 0 l16 -60 l18 120 l16 -150 l18 190 l16 -110 l12 0 H1440"
          fill="none"
          stroke="url(#ecgGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1400"
        />
      </svg>

      {/* 5b — pulse dot sweeping along the line */}
      <div className="absolute inset-x-0 top-[55%] motion-reduce:hidden">
        <div className="animate-ecg-sweep h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_4px_rgba(45,184,199,0.6)]" />
      </div>

      {/* 6 — slow-rising particles */}
      <div className="absolute inset-0 motion-reduce:hidden">
        {[
          { left: '12%', top: '70%', d: '0s', s: '9s' },
          { left: '28%', top: '82%', d: '2.5s', s: '11s' },
          { left: '46%', top: '76%', d: '1.2s', s: '10s' },
          { left: '63%', top: '85%', d: '3.4s', s: '12s' },
          { left: '78%', top: '72%', d: '0.8s', s: '10.5s' },
          { left: '88%', top: '80%', d: '4.2s', s: '13s' },
        ].map((p, i) => (
          <span
            key={i}
            className="animate-particle-rise absolute h-1.5 w-1.5 rounded-full bg-primary/50"
            style={{ left: p.left, top: p.top, animationDelay: p.d, animationDuration: p.s }}
          />
        ))}
      </div>

      {/* soft bottom fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}
