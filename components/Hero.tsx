export function Hero() {
  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-40"
          poster="/hero-poster.jpg"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          A Trichy Sanctuary
          <br />
          Reimagined in 3D.
        </h1>
        <p className="mt-6 text-sm tracking-[0.3em] text-foreground/60 uppercase sm:text-base">
          Setting the new standard above Zazzle & POSH.
        </p>
      </div>
    </section>
  );
}
