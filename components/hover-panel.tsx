"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type HoverPanelProps = {
  children: ReactNode;
  className?: string;
};

export function HoverPanel({ children, className }: HoverPanelProps) {
  return (
    <motion.div
      className={cn(className)}
      transition={{ type: "spring", stiffness: 320, damping: 30 }}
      whileHover={{ x: -1, y: -2 }}
    >
      {children}
    </motion.div>
  );
}
