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
        "group flex h-full flex-col gap-0 overflow-hidden rounded-[16px] border border-border/60 bg-card p-0 py-0 shadow-[var(--card-shadow)] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:rounded-[20px] [@media(hover:hover)]:hover:-translate-y-[1.5px] [@media(hover:hover)]:hover:shadow-[var(--card-shadow-hover)]",
        isAvoid && "border-[var(--slop-border)]/30 hover:border-[var(--slop-border)]/40",
      )}
    >
      {/* Preview stage — slightly shorter on phones so cards fit the viewport */}
      <div
        data-testid="example-stage"
        data-stage-height={EXAMPLE_STAGE_HEIGHT_PX}
        className={cn(
          "relative flex h-[168px] shrink-0 items-center justify-center overflow-hidden border-b p-3 sm:h-[200px] sm:p-4",
          isAvoid
            ? "border-[var(--slop-border)]/20 bg-[var(--slop-stage)]"
            : "border-border/50 bg-[var(--example-stage)]",
        )}
      >
        <div className="flex h-full max-h-full w-full max-w-full min-h-0 items-center justify-center overflow-hidden text-center [&>*]:max-w-full">
          <ElementExample exampleKey={element.exampleKey} />
        </div>
      </div>

      <CardHeader className="shrink-0 gap-1.5 space-y-0 px-3.5 pt-3.5 pb-0 sm:px-[18px] sm:pt-4">
        {/* Title on its own full-width row so long names (esp. AI slop) aren't
            crushed beside Anti-pattern + aka badges on desktop. */}
        <div className="flex min-h-7 flex-col gap-1.5">
          <CardTitle
            title={element.name}
            className="w-full text-[14.5px] font-semibold leading-[1.32] tracking-[-0.015em] text-pretty break-normal hyphens-none sm:text-[15px] sm:leading-[1.35]"
          >
            {element.name}
          </CardTitle>
          {(isAvoid || element.alsoKnownAs?.[0]) && (
            <div className="flex max-w-full flex-wrap gap-1.5">
              {isAvoid && (
                <Badge className="h-[22px] rounded-full border-0 bg-destructive/10 px-2 text-[10px] font-medium tracking-wide text-destructive">
                  Anti-pattern
                </Badge>
              )}
              {element.alsoKnownAs?.[0] && (
                <Badge
                  title={`aka ${element.alsoKnownAs[0]}`}
                  className="h-[22px] max-w-full truncate rounded-full border-0 bg-secondary px-2 text-[10px] font-normal tracking-wide text-muted-foreground sm:max-w-[14rem]"
                >
                  aka {element.alsoKnownAs[0]}
                </Badge>
              )}
            </div>
          )}
        </div>
        <CardDescription className="line-clamp-2 min-h-[2.5rem] text-[12.5px] leading-[1.45] tracking-[-0.01em] text-muted-foreground break-words hyphens-none sm:min-h-[2.75rem] sm:text-[13px] sm:leading-[1.5]">
          {element.description}
        </CardDescription>
      </CardHeader>

      {/* Prompt pinned to bottom for equal-height footer alignment */}
      <CardContent className="mt-auto flex flex-1 flex-col px-3 pt-2.5 pb-3 sm:px-[14px] sm:pt-3 sm:pb-[14px]">
        <div
          className={cn(
            "mt-auto rounded-[12px] p-3 transition-colors sm:rounded-[14px] sm:p-3.5",
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
              className="h-8 shrink-0 touch-manipulation gap-1 rounded-full px-2.5 text-[11px] font-medium tracking-wide text-muted-foreground/70 hover:bg-background/80 hover:text-foreground sm:h-7"
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
