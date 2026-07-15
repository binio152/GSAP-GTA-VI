import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".second-vd-wrapper", { marginTop: "-90vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: ".second-vd-wrapper",
        start: "top top",
        end: "+=200% bottom",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(".second-vd-wrapper", {
      delay: 0.5,
      opacity: 0,
      ease: "power1.inOut",
    });
    tl.to(
      ".second-vd-wrapper",
      {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      "<",
    );

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<",
      );
    };

    tl.to(".lucia", { opacity: 1, duration: 1, ease: "power1.inOut" });
  }, []);

  return (
    <section className="second-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-video"
          style={{ objectPosition: "30% 0%" }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
