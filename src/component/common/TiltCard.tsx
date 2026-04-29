import React, { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useTilt } from "../../hooks/useTilt";

type TiltCardProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  surfaceClassName?: string;
  glossClassName?: string;
  perspective?: number;
};

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  surfaceClassName,
  glossClassName,
  perspective = 900,
  style,
  ...props
}) => {
  const { tiltHandlers, tiltStyle, highlightStyle, isTiltDisabled } = useTilt();

  return (
    <div
      className={className}
      style={{
        perspective: isTiltDisabled ? undefined : perspective,
      }}
    >
      <motion.div
        className={[
          "project-tilt-surface relative h-full w-full overflow-hidden",
          surfaceClassName ?? "",
        ].join(" ")}
        style={{ ...tiltStyle, ...style }}
        {...tiltHandlers}
        {...props}
      >
        <motion.div
          className={[
            "project-tilt-gloss absolute inset-0 z-20 pointer-events-none opacity-0 transition-opacity duration-200",
            glossClassName ?? "",
          ].join(" ")}
          style={highlightStyle}
        />
        {children}
      </motion.div>
    </div>
  );
};

export default TiltCard;
