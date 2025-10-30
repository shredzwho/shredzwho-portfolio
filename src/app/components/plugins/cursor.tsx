"use client";
import styles from "./cursor.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IDesktop {
  isDesktop?: boolean;
}

const isSmallScreen = (): boolean =>
  typeof window !== "undefined" ? window.innerWidth <= 768 : false;

const CURSOR_STYLES = {
  CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const follower = useRef<HTMLDivElement | null>(null);

  const onHover = () => {
    if (cursor.current) {
      gsap.to(cursor.current, {
        scale: 0.5,
        duration: 0.3,
      });
    }
    if (follower.current) {
      gsap.to(follower.current, {
        scale: 3,
        duration: 0.3,
      });
    }
  };

  const onUnhover = () => {
    if (cursor.current) {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
      });
    }
    if (follower.current) {
      gsap.to(follower.current, {
        scale: 1,
        duration: 0.3,
      });
    }
  };

  const moveCircle = (e: MouseEvent) => {
    if (cursor.current) {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
      });
    }
    if (follower.current) {
      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "none",
      });
    }
  };

  const initCursorAnimation = () => {
    if (follower.current) {
      follower.current.classList.remove("hidden");
    }
    if (cursor.current) {
      cursor.current.classList.remove("hidden");
    }

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();

      return () => {
        document.removeEventListener("mousemove", moveCircle);
        document.querySelectorAll(".link").forEach((el) => {
          el.removeEventListener("mouseenter", onHover);
          el.removeEventListener("mouseleave", onUnhover);
        });
      };
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={follower}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;