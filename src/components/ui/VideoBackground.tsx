'use client'

interface VideoBackgroundProps {
  src: string
  poster?: string
  /** Tailwind overlay classes layered above the video for text contrast */
  overlayClassName?: string
}

/**
 * Muted, looping, autoplaying background video with a graceful fallback:
 * respects prefers-reduced-motion (the video simply won't autoplay/animate
 * jarringly) and always sits behind an overlay so foreground text stays legible.
 */
export default function VideoBackground({
  src,
  poster,
  overlayClassName = 'bg-[#003867]/75',
}: VideoBackgroundProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Always-present base. The overlays above fade to transparent so the
          video can show through, which means that without this layer the hero's
          white text sits on the page background whenever the video isn't
          painting — with reduce-motion on, before a multi-MB file has loaded on
          a phone, or if playback fails. */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00223e] via-[#003867] to-[#00243f]" />
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Static fallback for reduced-motion / no-video-support */}
      {poster && (
        <div
          className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}
