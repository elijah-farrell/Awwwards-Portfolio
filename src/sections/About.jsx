import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `Committed to continuous growth in tech—from web development to AI research. Every challenge is a chance: expanding skills and contributing to meaningful projects.
  When I'm not learning:`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Innovating with code, Growing through technology"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-0 sm:px-1 md:px-3 lg:px-6 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ultra-small-screen">
        <img
          ref={imgRef}
          src="images/pfp.png"
          alt="John Doe Smith"
          className="w-md rounded-3xl"
        />
        <div className="w-full">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:code" className="text-white/80" />
              <span>Open-sourcing my latest experiment—because rising tides lift all ships</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:search" className="text-white/80" />
              <span>Exploring new technologies</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:mountain" className="text-white/80" />
              <span>Hiking the Adirondacks</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:gamepad-2" className="text-white/80" />
              <span>Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
