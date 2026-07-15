import { useGSAP } from "@gsap/react";
import ComingSoon from "./ComingSoon";
import { useMaskSettings } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const {
    initialMaskPos,
    initialMaskSize,
    maskPos,
    maskSize,
    maskMarginTop = "-6vh",
    scale = 1.1,
  } = useMaskSettings();

  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set(".mask-logo", {
      marginTop: "-100vh",
      opacity: 0,
    });

    gsap.set(".entrance-message", { marginTop: "0vh" });
    gsap.set(".entrance-logo", { marginTop: "-8vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        top: "top top",
        end: "+=200%",
        scrub: 2.5,
        pin: true,
      },
    });

    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" });
    tl.to(".scale-out", { scale: 1, ease: "power1.inOut" });
    tl.to(
      ".mask-wrapper",
      {
        maskSize: maskSize,
        ease: "power1.inOut",
        maskPosition: maskPos,
        scale: scale,
        marginTop: maskMarginTop,
      },
      "<",
    );
    tl.to(".mask-wrapper", { opacity: 0, backgroundColor: "white" });
    tl.to(
      ".entrance-message",
      {
        duration: 1,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      },
      "<-0.01s",
    );
  });

  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="size-full object-cover mask-logo"
        />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
