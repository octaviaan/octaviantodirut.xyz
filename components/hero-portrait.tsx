import Image from "next/image";

export function HeroPortrait() {
  return (
    <div className="hero-face-wrap">
      <div className="hero-face">
        <Image
          src="/ezgif-resized.gif"
          alt="Animated portrait of Octavian Todirut"
          width={400}
          height={500}
          priority
          unoptimized
          className="hero-portrait"
        />
      </div>
    </div>
  );
}
