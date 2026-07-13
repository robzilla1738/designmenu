"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { DesignElement } from "@/lib/catalog";
import { formatPromptDisplay } from "@/lib/prompt-display";
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

/** Preview stage height — demos must fit inside with stage padding. */
export const EXAMPLE_STAGE_HEIGHT_PX = 200;
export const EXAMPLE_STAGE_PADDING_PX = 16;

export function ElementCard({ element }: { element: DesignElement }) {
  const [copied, setCopied] = useState(false);
  const isAvoid = element.promptKind === "avoid";

  async function copyPrompt() {
    try {
      // Copy original tip (ASCII hyphens) for pasting into prompts
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
        "group flex h-full flex-col gap-0 overflow-hidden rounded-[20px] border border-border/60 bg-card p-0 py-0 shadow-[var(--card-shadow)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1.5px] hover:shadow-[var(--card-shadow-hover)] will-change-transform",
        isAvoid && "border-[var(--slop-border)]/30 hover:border-[var(--slop-border)]/40",
      )}
    >
      {/* Preview stage — fixed viewport; demos must fit, not clip mid-glyph */}
      <div
        data-testid="example-stage"
        data-stage-height={EXAMPLE_STAGE_HEIGHT_PX}
        className={cn(
          "relative flex h-[200px] shrink-0 items-center justify-center overflow-hidden border-b p-4",
          isAvoid
            ? "border-[var(--slop-border)]/20 bg-[var(--slop-stage)]"
            : "border-border/50 bg-[var(--example-stage)]",
        )}
      >
        <div className="flex h-full max-h-full w-full max-w-full min-h-0 items-center justify-center overflow-hidden text-center [&>*]:max-w-full">
          <ElementExample exampleKey={element.exampleKey} />
        </div>
      </div>

      <CardHeader className="shrink-0 gap-1.5 space-y-0 px-[18px] pt-4 pb-0">
        <div className="flex min-h-7 items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 min-w-0 flex-1 text-[15px] font-semibold leading-[1.32] tracking-[-0.015em] break-words hyphens-none">
            {element.name}
          </CardTitle>
          <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
            {isAvoid && (
              <Badge className="h-[22px] rounded-full border-0 bg-destructive/10 px-2 text-[10px] font-medium tracking-wide text-destructive">
                Anti-pattern
              </Badge>
            )}
            {element.alsoKnownAs?.[0] && (
              <Badge
                title={`aka ${element.alsoKnownAs[0]}`}
                className="max-w-[10rem] truncate rounded-full border-0 bg-secondary px-2 text-[10px] font-normal tracking-wide text-muted-foreground h-[22px]"
              >
                aka {element.alsoKnownAs[0]}
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="line-clamp-2 min-h-[2.75rem] text-[13px] leading-[1.5] tracking-[-0.01em] text-muted-foreground break-words hyphens-none">
          {element.description}
        </CardDescription>
      </CardHeader>

      {/* Prompt pinned to bottom for equal-height footer alignment */}
      <CardContent className="mt-auto flex flex-1 flex-col px-[14px] pt-3 pb-[14px]">
        <div
          className={cn(
            "mt-auto rounded-[14px] p-3.5 transition-colors",
            isAvoid
              ? "border border-[var(--slop-border)]/25 bg-[var(--slop-stage)]/80"
              : "border-0 bg-muted/70",
          )}
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <p
              className={cn(
                "text-[10px] font-semibold tracking-[0.14em] uppercase",
                isAvoid ? "text-destructive/80" : "text-muted-foreground/70",
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
              className="h-7 shrink-0 gap-1 rounded-full px-2.5 text-[11px] font-medium tracking-wide text-muted-foreground/70 hover:bg-background/80 hover:text-foreground"
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
          <p
            data-testid="prompt-tip"
            className="line-clamp-4 min-h-[4.25rem] text-[13px] leading-[1.55] tracking-[-0.01em] text-foreground/85 break-words hyphens-none"
          >
            {formatPromptDisplay(element.promptTip)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
