"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Components
import Button from "../button/Button";
import Badge from "../badge/Badge";
import Projects from "../projects/Projects";
import Info from "../info/Info";
import Header from "../header/Header";
import Table from "../table/Table";
import Moon from "../moon/Moon";
import Footer from "../footer/Footer";
// Images
import planet from "../../../public/image/planet.png";
import comet from "../../../public/image/comet.png";
// Utils
import { BADGE } from "@/utils/constants";
// Local
import styles from "./hero.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    gsap.set(`.${styles.redSpot}`, { rotate: "-32deg" });

    const matchMedia = gsap.matchMedia();

    matchMedia.add(
      {
        isPortrait: "(orientation: portrait)",
        isDesktop: "(orientation: landscape)",
      },
      (context) => {
        const { isPortrait, isDesktop } = context.conditions;

        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: true,
          },
        });

        if (isPortrait) {
          scrollTl
            .to(
              titleRef.current,
              {
                css: {
                  webkitTextFillColor: "#efdfda89",
                },
              },
              "stage1"
            )
            .to(wrapperRef.current, { y: "-10%" }, "stage1")
            .to(`.${styles.image}`, { y: "-10%", x: "-5%" }, "stage1")
            .to(
              `.${styles.blueSpot}`,
              { y: "-20%", x: "-5%", rotate: "-10deg" },
              "stage1"
            )
            .to(
              `.${styles.redSpot}`,
              { y: "10%", x: "40%", rotate: "10deg" },
              "stage1"
            )
            .to(`.${styles.list}`, { y: "-260%" }, "stage1")
            .to(".gsap-badge", { y: 0, stagger: 0.15, duration: 0.2 }, "stage1")
            .to(headerRef.current, { y: "-800%", duration: 0.1 }, "stage2")
            .to(wrapperRef.current, { y: "-200%" }, "stage2")
            .to(`.${styles.list}`, { y: "-1500%" }, "stage2")
            .to(`.${styles.image}`, { y: "-25%", x: "-7%" }, "stage2")
            .to(
              `.${styles.redSpot}`,
              { y: "-50%", x: "30%", rotate: "10deg" },
              "stage2"
            )
            .to(`.${styles.projects}`, { y: "-350%" }, "-=0.4")
            .to(projectRef.current, { x: "-40%" }, "-=0.6")
            .to(`.${styles.projects}`, { y: "-900%" }, "stage3")
            .to(projectRef.current, { x: "-80%" }, "stage3")
            .to(`.${styles.info}`, { y: "-200%" }, "stage3")
            .to(`.${styles.image}`, { y: "-80%" }, "stage3")
            .to(`.${styles.comet}`, { y: "60%", x: "1200%" }, "stage3")
            .to(`.${styles.info}`, { y: "-300%" }, "stage4")
            .to(`.${styles.table}`, { y: "-180%" }, "stage4")
            .to(`.${styles.image}`, { y: "-120%", x: "-20%" }, "-=0.4")
            .to(
              `.${styles.redSpot}`,
              { y: "-50%", x: "20%", rotate: "15deg" },
              "-=0.4"
            );
        }

        if (isDesktop) {
          scrollTl
            .to(
              titleRef.current,
              {
                css: {
                  webkitTextFillColor: "#efdfda89",
                },
              },
              "stage1"
            )
            .to(wrapperRef.current, { y: "-10%" }, "stage1")
            .to(`.${styles.image}`, { y: "-10%", x: "-5%" }, "stage1")
            .to(
              `.${styles.blueSpot}`,
              { y: "-20%", x: "-5%", rotate: "-10deg" },
              "stage1"
            )
            .to(
              `.${styles.redSpot}`,
              { y: "10%", x: "40%", rotate: "10deg" },
              "stage1"
            )
            .to(`.${styles.list}`, { y: "-160%" }, "stage1")
            .to(".gsap-badge", { y: 0, stagger: 0.15, duration: 0.2 }, "stage1")
            .to(headerRef.current, { y: "-800%", duration: 0.1 }, "stage2")
            .to(wrapperRef.current, { y: "-200%" }, "stage2")
            .to(`.${styles.list}`, { y: "-1000%" }, "stage2")
            .to(`.${styles.image}`, { y: "-15%", x: "-7%" }, "stage2")
            .to(
              `.${styles.redSpot}`,
              { y: "-50%", x: "30%", rotate: "10deg" },
              "stage2"
            )
            .to(`.${styles.projects}`, { y: "-310%" }, "-=0.6")
            .to(projectRef.current, { x: "-25%" }, "-=0.6")
            .to(`.${styles.projects}`, { y: "-900%" }, "stage3")
            .to(projectRef.current, { x: "-50%" }, "stage3")
            .to(`.${styles.info}`, { y: "-300%" }, "stage3")
            .to(`.${styles.image}`, { y: "-40%", x: "-20%" }, "stage3")
            .to(`.${styles.comet}`, { y: "60%", x: "1200%" }, "stage3")
            .to(`.${styles.info}`, { y: "-500%" }, "stage5")
            .to(`.${styles.table}`, { y: "-135%" }, "stage5")
            .to(`.${styles.image}`, { y: "-60%", x: "-30%" }, "-=0.4");
        }
      }
    );

    return () => matchMedia.revert();
  }, []);

  return (
    <section className={styles.container} ref={containerRef}>
      <header className={styles.header} ref={headerRef}>
        <Header />
      </header>
      <div className={styles.wrapper} ref={wrapperRef}>
        <h1 className={styles.title} ref={titleRef}>
          A new economic primitive for funding decentralized AI
        </h1>
        <p className={styles.subTitle}>
          We track, rank and pay for the best open source decentralized LLMs to
          compete against OpenAI
        </p>
        <div className={styles.buttonContainer}>
          <Button
            text="Buy Spice AI"
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              padding: "1.25rem 2.5rem",
            }}
          />
        </div>
      </div>
      <ul className={styles.list}>
        {BADGE.map((item) => (
          <li className={styles.item} key={item.bigText}>
            <Badge bigText={item.bigText} smallText={item.smallText} />
          </li>
        ))}
      </ul>
      <div className={styles.projects}>
        <Projects projectRef={projectRef} />
      </div>
      <div className={styles.info}>
        <Info />
      </div>
      <div className={styles.table}>
        <Table />
      </div>
      <Image src={planet} alt="background planet" className={styles.image} />
      <Image src={comet} alt="comet" className={styles.comet} />
      <div className={styles.blueSpot}></div>
      <div className={styles.redSpot}></div>
      <div className={styles.moon}>
        <Moon />
      </div>
      <Footer />
    </section>
  );
}

export default Hero;
