"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export function Card(props: {
  index: number;
  setIndex: (i: number) => void;
  frontCard: boolean;
  width?: number;
  height?: number;
  borderRadius?: number;
  drag?:string;
  certImg:string[];
}) {
  const SWIPE_THRESHOLD = 100;
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    initial: { scale: 1, y: 0, opacity: 1 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  function handleDragEnd(_: any, info: { offset: { x: number } }) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      setExitX(250);
      if(props.index + 1 < props.certImg.length){

          props.setIndex( props.index + 1);
      }else {
        props.setIndex(0);
      }
    }
  }

  const cardWidth = props.width ?? 150;
  const cardHeight = props.height ?? 150;
  const borderRadius = props.borderRadius ?? 30;

  return (
    <motion.div
      style={{
        width: cardWidth,
        height: cardHeight,
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag="x"
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.img
        style={{
          width: cardWidth,
          height: cardHeight,
          backgroundColor: "#fff",
          borderRadius,
          scale,
        }}
        draggable={false}
        src={props.certImg.length > props.index ? `/cert/${props.certImg[props.index]}`:`/cert/${props.certImg[0]}`}
      
      />
        
    </motion.div>
  );
}
