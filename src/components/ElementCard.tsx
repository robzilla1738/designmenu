"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { DesignElement } from "@/lib/catalog";
import { ElementExample } from "./ElementExample";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ElementCard({ element }: { element: DesignElement }) {
  const [copied, setCopied] = useState(false);
  const isAvoid = element.promptKind === "avoid";

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(element.promptTip);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable
    }
  }

  return (
    <Card
      id={element.id}
      data-element-id={element.id}
      data-element-name={element.name}
      data-prompt-kind={element.promptKind ?? "prompt"}
      className={cn(
        // Equal-height grid cells: fill row, column stack, no empty footer strip
        "group flex h-full flex-col gap-0 overflow-hidden py-0 shadow-sm transition-shadow hover:shadow-md",
        isAvoid && "border-[var(--slop-border)]/50",
      )}
    >
      {/* Fixed preview stage — same height on every card */}
      <div
        className={cn(
          "flex h-40 shrink-0 items-center justify-center overflow-hidden border-b border-border p-4",
          isAvoid ? "bg-[var(--slop-stage)]" : "bg-[var(--example-stage)]",
        )}
      >
        <div className="flex max-h-full w-full max-w-full items-center justify-center overflow-hidden text-center [&_*]:max-w-full">
          <ElementExample exampleKey={element.exampleKey} />
        </div>
      </div>

      <CardHeader className="shrink-0 gap-1.5 space-y-0 px-4 pt-4 pb-0">
        <div className="flex min-h-7 items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 min-w-0 flex-1 text-base leading-snug font-semibold">
            {element.name}
          </CardTitle>
          <div className="flex shrink-0 flex-wrap justify-end gap-1">
            {isAvoid && (
              <Badge variant="destructive" className="text-[10px]">
                Anti-pattern
              </Badge>
            )}
            {element.alsoKnownAs?.[0] && (
              <Badge variant="secondary" className="max-w-[9rem] truncate text-[10px] font-normal">
                aka {element.alsoKnownAs[0]}
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed">
          {element.description}
        </CardDescription>
      </CardHeader>

      {/* Prompt pinned to bottom so all cards share the same footer alignment */}
      <CardContent className="mt-auto flex flex-1 flex-col px-4 pt-3 pb-4">
        <div
          className={cn(
            "mt-auto rounded-xl border p-3",
            isAvoid
              ? "border-[var(--slop-border)]/40 bg-[var(--slop-stage)]"
              : "border-border bg-[var(--prompt-bg)]",
          )}
        >
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <p
              className={cn(
                "text-[11px] font-semibold tracking-wider uppercase",
                isAvoid ? "text-destructive" : "text-primary",
              )}
            >
              {isAvoid ? "Avoid by prompting" : "Prompt like this"}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={copyPrompt}
              data-testid={`copy-prompt-${element.id}`}
              className="h-6 shrink-0 gap-1 px-2 text-[11px] text-muted-foreground"
            >
              {copied ? (
                <>
                  <Check className="size-3" /> Copied
                </>
              ) : (
                <>
                  <Copy className="size-3" /> Copy
                </>
              )}
            </Button>
          </div>
          <p className="line-clamp-4 min-h-[4.5rem] text-[13px] leading-relaxed text-foreground/90">
            {element.promptTip}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
