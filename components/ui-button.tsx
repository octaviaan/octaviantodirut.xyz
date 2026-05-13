"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Button as BaseButton } from "@base-ui/react/button";
import Link from "next/link";

import { cn } from "@/lib/utils";

type UiButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  target?: string;
  rel?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function UiButton({
  children,
  href,
  variant = "secondary",
  size = "md",
  className,
  target,
  rel,
  type = "button",
}: UiButtonProps) {
  const buttonClassName = cn(
    "ui-button",
    variant === "primary" ? "ui-button-primary" : "ui-button-secondary",
    size === "sm" ? "ui-button-sm" : "ui-button-md",
    className,
  );

  if (href) {
    if (isExternalHref(href)) {
      return (
        <BaseButton
          nativeButton={false}
          render={<a href={href} target={target} rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)} />}
          className={buttonClassName}
        >
          {children}
        </BaseButton>
      );
    }

    return (
      <BaseButton nativeButton={false} render={<Link href={href} />} className={buttonClassName}>
        {children}
      </BaseButton>
    );
  }

  return (
    <BaseButton type={type} className={buttonClassName}>
      {children}
    </BaseButton>
  );
}
