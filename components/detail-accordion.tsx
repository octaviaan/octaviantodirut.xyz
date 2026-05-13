"use client";

import type { ReactNode } from "react";

import { Accordion } from "@base-ui/react/accordion";

import { cn } from "@/lib/utils";

type DetailAccordionItem = {
  value: string;
  label: string;
  eyebrow?: string;
  content: ReactNode;
};

type DetailAccordionProps = {
  items: DetailAccordionItem[];
  defaultValue?: string[];
  className?: string;
};

export function DetailAccordion({
  items,
  defaultValue,
  className,
}: DetailAccordionProps) {
  return (
    <Accordion.Root
      multiple
      defaultValue={defaultValue ?? items.slice(0, 1).map((item) => item.value)}
      className={cn("space-y-4", className)}
    >
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value} className="panel overflow-hidden rounded-lg">
          <Accordion.Header>
            <Accordion.Trigger
              className={({ open }) =>
                cn(
                  "group flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition sm:px-8 sm:py-6",
                  open && "bg-(--surface-soft)",
                )
              }
            >
              <span className="space-y-3">
                {item.eyebrow ? (
                  <span className="block text-xs uppercase text-(--accent)">{item.eyebrow}</span>
                ) : null}
                <span className="block font-display text-2xl leading-tight text-(--text) sm:text-3xl">
                  {item.label}
                </span>
              </span>

              <span className="chip mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-lg transition">
                <span aria-hidden="true" className="group-data-[panel-open]:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden group-data-[panel-open]:block">
                  -
                </span>
              </span>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="overflow-hidden">
            <div className="border-t border-(--border-soft) px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
              {item.content}
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
