/**
 * Ambient dotted background texture: a fine static dot grid plus a second,
 * slowly drifting dot layer, both fading out at the top and bottom edges.
 */
export default function DotGrid() {
  const mask = 'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)'
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(45,184,199,0.10) 1px, transparent 1.7px)',
          backgroundSize: '30px 30px',
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
      <div
        className="animate-dot-drift absolute inset-[-12%]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,56,103,0.10) 1.6px, transparent 2.3px)',
          backgroundSize: '64px 64px',
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </div>
  )
}
