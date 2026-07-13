"use client";

import {
  Bell,
  Check,
  Copy,
  Home,
  Loader2,
  Search,
  Settings,
  User,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

/** Live visual demo for a catalog element — shadcn where applicable. */
export function ElementExample({ exampleKey }: { exampleKey: string }) {
  switch (exampleKey) {
    // ── Typography ────────────────────────────────────────
    case "display-heading":
      return (
        <p className="max-w-[16rem] px-1 text-center text-xl font-bold tracking-tight text-balance sm:text-2xl">
          Build something beautiful.
        </p>
      );
    case "page-title":
      return (
        <h2 className="max-w-[14rem] text-center text-lg font-semibold tracking-tight sm:text-xl">
          Settings
        </h2>
      );
    case "section-heading":
      return (
        <div className="space-y-1 text-left">
          <h3 className="text-base font-semibold sm:text-lg">Account details</h3>
          <h4 className="text-sm font-medium text-muted-foreground">Profile</h4>
        </div>
      );
    case "body-text":
      return (
        <p className="max-w-[15rem] text-left text-[13px] leading-snug sm:text-sm sm:leading-relaxed">
          Body text carries the main narrative. Keep line length comfortable and
          line-height open so paragraphs stay easy to scan.
        </p>
      );
    case "caption":
      return <p className="text-xs text-muted-foreground">Updated 2 hours ago · Public</p>;
    case "label-text":
      return <Label>Email address</Label>;
    case "overline":
      return (
        <div className="px-1">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
            New feature
          </p>
          <p className="mt-1 text-base font-semibold sm:text-lg">Ship faster with menus</p>
        </div>
      );
    case "code-inline":
      return (
        <p className="text-sm">
          Run{" "}
          <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-primary">
            npm run dev
          </code>{" "}
          to start.
        </p>
      );
    case "blockquote":
      return (
        <blockquote className="border-l-4 border-primary pl-4 text-sm text-muted-foreground italic">
          Design is intelligence made visible.
          <footer className="mt-1 text-xs not-italic">— Alina Wheeler</footer>
        </blockquote>
      );
    case "link-text":
      return (
        <p className="text-sm">
          Read the{" "}
          <a href="#typography" className="font-medium text-primary underline-offset-4 hover:underline">
            typography guide
          </a>{" "}
          next.
        </p>
      );

    // ── Color ─────────────────────────────────────────────
    case "primary-color":
      return (
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-xl bg-primary shadow-md" />
          <div className="text-sm">
            <p className="font-medium">Primary</p>
            <p className="text-muted-foreground">Brand accent</p>
          </div>
        </div>
      );
    case "semantic-colors":
      return (
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Success", className: "bg-emerald-500" },
            { label: "Warning", className: "bg-amber-500" },
            { label: "Error", className: "bg-destructive" },
            { label: "Info", className: "bg-sky-500" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-1.5 text-xs">
              <span className={cn("size-6 rounded-md", c.className)} />
              {c.label}
            </div>
          ))}
        </div>
      );
    case "neutral-scale":
      return (
        <div className="flex gap-1">
          {["bg-zinc-100", "bg-zinc-200", "bg-zinc-300", "bg-zinc-400", "bg-zinc-500", "bg-zinc-600", "bg-zinc-700", "bg-zinc-800"].map(
            (c) => (
              <div key={c} className={cn("h-8 w-5 rounded-sm", c)} />
            ),
          )}
        </div>
      );
    case "foreground-background":
      return (
        <div className="flex gap-2">
          <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground">
            Fg on Bg
          </div>
          <div className="rounded-lg bg-foreground px-3 py-2 text-sm text-background">
            Inverted
          </div>
        </div>
      );
    case "muted-text":
      return (
        <div className="space-y-0.5 text-sm">
          <p className="font-medium">Primary title</p>
          <p className="text-muted-foreground">Muted supporting detail</p>
        </div>
      );
    case "color-swatches":
      return (
        <div className="flex flex-wrap gap-2">
          {[
            { hex: "#0F766E", name: "Teal" },
            { hex: "#0EA5E9", name: "Sky" },
            { hex: "#D97706", name: "Amber" },
            { hex: "#E11D48", name: "Rose" },
          ].map((s) => (
            <div key={s.hex} className="flex flex-col items-center gap-1">
              <div
                className="size-9 rounded-full border border-border shadow-sm"
                style={{ backgroundColor: s.hex }}
              />
              <span className="font-mono text-[10px] text-muted-foreground">{s.hex}</span>
            </div>
          ))}
        </div>
      );

    // ── Spacing & layout ──────────────────────────────────
    case "spacing-scale":
      return (
        <div className="flex items-end gap-2">
          {[4, 8, 12, 16, 24, 32].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <div className="rounded-sm bg-primary" style={{ width: n, height: n }} />
              <span className="text-[10px] text-muted-foreground">{n}</span>
            </div>
          ))}
        </div>
      );
    case "stack-layout":
      return (
        <div className="flex w-full max-w-[140px] flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 rounded-md border border-primary/20 bg-accent" />
          ))}
        </div>
      );
    case "inline-cluster":
      return (
        <div className="flex flex-wrap gap-2">
          {["A", "B", "C", "D"].map((l) => (
            <Badge key={l} variant="outline">
              {l}
            </Badge>
          ))}
        </div>
      );
    case "grid-layout":
      return (
        <div className="grid w-full grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-md border border-primary/15 bg-accent" />
          ))}
        </div>
      );
    case "container":
      return (
        <div className="w-full rounded-md border border-dashed border-border p-2">
          <div className="mx-auto max-w-[70%] rounded bg-accent px-2 py-3 text-center text-[10px] text-muted-foreground">
            max-width container
          </div>
        </div>
      );
    case "whitespace":
      return (
        <div className="w-full space-y-6">
          <div className="h-4 rounded bg-muted" />
          <div className="text-center text-[10px] text-muted-foreground">← breathing room →</div>
          <div className="h-4 rounded bg-muted" />
        </div>
      );
    case "alignment":
      return (
        <div className="w-full space-y-1.5">
          <div className="h-3 w-full rounded bg-primary/80" />
          <div className="mx-auto h-3 w-2/3 rounded bg-primary/50" />
          <div className="ml-auto h-3 w-1/2 rounded bg-primary/30" />
        </div>
      );
    case "aspect-ratio":
      return (
        <div className="flex gap-2">
          <div className="aspect-video w-20 rounded-md bg-gradient-to-br from-teal-400 to-sky-500" />
          <div className="aspect-square w-14 rounded-md bg-gradient-to-br from-amber-400 to-orange-500" />
        </div>
      );

    // ── Buttons (shadcn) ──────────────────────────────────
    case "primary-button":
      return <Button>Get started</Button>;
    case "secondary-button":
      return <Button variant="outline">Cancel</Button>;
    case "ghost-button":
      return <Button variant="ghost">Learn more</Button>;
    case "destructive-button":
      return <Button variant="destructive">Delete</Button>;
    case "icon-button":
      return (
        <Button variant="outline" size="icon" aria-label="Settings">
          <Settings />
        </Button>
      );
    case "button-group":
      return (
        <div className="inline-flex overflow-hidden rounded-lg border border-border">
          {["Day", "Week", "Month"].map((t, i) => (
            <Button
              key={t}
              variant={i === 1 ? "default" : "ghost"}
              size="sm"
              className={cn("rounded-none", i > 0 && "border-l border-border")}
            >
              {t}
            </Button>
          ))}
        </div>
      );
    case "loading-button":
      return (
        <Button disabled>
          <Loader2 className="animate-spin" />
          Saving…
        </Button>
      );
    case "button-sizes":
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">SM</Button>
          <Button size="default">MD</Button>
          <Button size="lg">LG</Button>
        </div>
      );

    // ── Forms (shadcn) ────────────────────────────────────
    case "text-input":
      return (
        <Input
          type="email"
          placeholder="you@example.com"
          className="max-w-[220px]"
          readOnly
        />
      );
    case "textarea":
      return (
        <Textarea
          rows={2}
          placeholder="Write a short bio…"
          className="max-w-[240px] resize-none"
          readOnly
        />
      );
    case "select":
      return (
        <Select defaultValue="pro">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      );
    case "checkbox":
      return (
        <label className="flex items-center gap-2 text-sm">
          <Checkbox defaultChecked id="demo-check" />
          <span>Email me updates</span>
        </label>
      );
    case "radio-group":
      return (
        <RadioGroup defaultValue="monthly" className="gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="monthly" id="r-m" />
            <Label htmlFor="r-m" className="font-normal">
              Monthly
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yearly" id="r-y" />
            <Label htmlFor="r-y" className="font-normal">
              Yearly
            </Label>
          </div>
        </RadioGroup>
      );
    case "switch-toggle":
      return (
        <div className="flex items-center gap-2">
          <Switch defaultChecked id="demo-switch" />
          <Label htmlFor="demo-switch" className="font-normal">
            Notifications
          </Label>
        </div>
      );
    case "input-with-addon":
      return (
        <div className="flex max-w-[220px] overflow-hidden rounded-lg border border-input">
          <span className="flex items-center bg-muted px-2.5 text-xs text-muted-foreground">
            https://
          </span>
          <Input
            className="rounded-none border-0 shadow-none focus-visible:ring-0"
            defaultValue="designmenu.app"
            readOnly
          />
        </div>
      );
    case "form-validation":
      return (
        <div className="w-full max-w-[220px] space-y-1.5">
          <Input
            defaultValue="not-an-email"
            aria-invalid
            className="border-destructive"
            readOnly
          />
          <p className="text-xs text-destructive">Enter a valid email address.</p>
        </div>
      );
    case "slider":
      return (
        <div className="w-full max-w-[200px] space-y-2">
          <Slider defaultValue={[60]} max={100} step={1} />
          <p className="text-xs text-muted-foreground">60%</p>
        </div>
      );
    case "file-upload":
      return (
        <div className="flex w-full max-w-[200px] flex-col items-center gap-1 rounded-xl border-2 border-dashed border-border px-3 py-3 text-center">
          <Upload className="size-5 text-muted-foreground" />
          <p className="text-xs font-medium">Drop files or browse</p>
          <p className="text-[10px] text-muted-foreground">PNG, JPG up to 5MB</p>
        </div>
      );

    // ── Navigation ────────────────────────────────────────
    case "navbar":
      return (
        <div className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-sm">
          <span className="font-semibold">Brand</span>
          <div className="flex gap-3 text-muted-foreground">
            <span className="font-medium text-foreground">Home</span>
            <span>Docs</span>
            <span>Pricing</span>
          </div>
          <Button size="xs">Sign in</Button>
        </div>
      );
    case "sidebar":
      return (
        <div className="flex w-full max-w-[180px] flex-col gap-0.5 rounded-lg border border-border bg-card p-2 text-xs shadow-sm">
          {["Dashboard", "Projects", "Team", "Settings"].map((item, i) => (
            <div
              key={item}
              className={cn(
                "rounded-md px-2 py-1.5",
                i === 0
                  ? "bg-accent font-medium text-accent-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item}
            </div>
          ))}
        </div>
      );
    case "tabs":
      return (
        <Tabs defaultValue="overview" className="w-full max-w-[240px]">
          <TabsList className="w-full">
            <TabsTrigger value="overview" className="flex-1 text-xs">
              Overview
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex-1 text-xs">
              Activity
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex-1 text-xs">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-[10px] text-muted-foreground">
            Overview panel
          </TabsContent>
          <TabsContent value="activity" className="text-[10px] text-muted-foreground">
            Activity panel
          </TabsContent>
          <TabsContent value="settings" className="text-[10px] text-muted-foreground">
            Settings panel
          </TabsContent>
        </Tabs>
      );
    case "breadcrumbs":
      return (
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Typography</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    case "pagination":
      return (
        <div className="flex items-center gap-1">
          <Button variant="outline" size="xs">
            Prev
          </Button>
          {[1, 2, 3].map((n) => (
            <Button key={n} variant={n === 2 ? "default" : "outline"} size="icon-xs">
              {n}
            </Button>
          ))}
          <Button variant="outline" size="xs">
            Next
          </Button>
        </div>
      );
    case "stepper":
      return (
        <div className="flex w-full items-center gap-1 text-[10px]">
          {["Cart", "Shipping", "Pay"].map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-1">
              <div
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  i < 2
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground",
                )}
              >
                {i < 1 ? <Check className="size-3" /> : i + 1}
              </div>
              <span className={i === 1 ? "font-medium" : "text-muted-foreground"}>{step}</span>
              {i < 2 && <div className="mx-1 h-px flex-1 bg-border" />}
            </div>
          ))}
        </div>
      );
    case "bottom-nav":
      return (
        <div className="flex w-full max-w-[220px] justify-around rounded-xl border border-border bg-card px-1 py-2 text-[10px] shadow-sm">
          {[
            { label: "Home", Icon: Home, active: true },
            { label: "Search", Icon: Search, active: false },
            { label: "You", Icon: User, active: false },
          ].map(({ label, Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-0.5",
                active ? "font-medium text-primary" : "text-muted-foreground",
              )}
            >
              <Icon className="size-4" />
              {label}
            </div>
          ))}
        </div>
      );
    case "mega-menu":
      return (
        <div className="w-full rounded-lg border border-border bg-card p-3 text-[10px] shadow-sm">
          <div className="mb-2 font-medium">Products ▾</div>
          <div className="grid grid-cols-3 gap-2">
            {["Design", "Code", "Docs"].map((col) => (
              <div key={col}>
                <p className="mb-1 font-semibold text-muted-foreground">{col}</p>
                <p>Item one</p>
                <p>Item two</p>
              </div>
            ))}
          </div>
        </div>
      );

    // ── Feedback ──────────────────────────────────────────
    case "alert-banner":
      return (
        <Alert className="max-w-[220px] text-left">
          <AlertTitle className="text-sm">Scheduled maintenance</AlertTitle>
          <AlertDescription className="text-xs">
            Brief downtime tonight at 2am UTC.
          </AlertDescription>
        </Alert>
      );
    case "toast":
      return (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg">
          <span className="size-2 rounded-full bg-emerald-500" />
          Changes saved
          <Button variant="link" size="xs" className="h-auto px-0">
            Undo
          </Button>
        </div>
      );
    case "spinner":
      return (
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Loader2 className="size-5 animate-spin text-primary" />
          Loading…
        </div>
      );
    case "skeleton":
      return (
        <div className="w-full max-w-[200px] space-y-2">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      );
    case "progress-bar":
      return (
        <div className="w-full max-w-[200px] space-y-1">
          <Progress value={60} />
          <p className="text-[10px] text-muted-foreground">60% complete</p>
        </div>
      );
    case "empty-state":
      return (
        <div className="flex w-full max-w-[200px] flex-col items-center gap-2 py-2 text-center">
          <div className="flex size-10 items-center justify-center rounded-full bg-accent text-primary">
            ∅
          </div>
          <p className="text-xs font-medium">No projects yet</p>
          <p className="text-[10px] text-muted-foreground">
            Create your first project to begin.
          </p>
          <Button size="xs">New project</Button>
        </div>
      );
    case "badge-notification":
      return (
        <div className="relative inline-flex">
          <Button variant="outline" size="icon" aria-label="Notifications">
            <Bell />
          </Button>
          <Badge className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full p-0 text-[10px]">
            3
          </Badge>
        </div>
      );

    // ── Overlays (shadcn interactive) ─────────────────────
    case "modal":
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Open dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Confirm action</DialogTitle>
              <DialogDescription>This cannot be undone.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    case "drawer":
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              Open drawer
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Drawer</SheetTitle>
              <SheetDescription>Side panel for filters or details.</SheetDescription>
            </SheetHeader>
            <div className="px-4 text-sm text-muted-foreground">Filter controls…</div>
          </SheetContent>
        </Sheet>
      );
    case "tooltip":
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </TooltipTrigger>
          <TooltipContent>Helpful tip</TooltipContent>
        </Tooltip>
      );
    case "popover":
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Share
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <p className="text-sm font-semibold">Share project</p>
            <Input className="mt-2" defaultValue="designmenu.app/p/1" readOnly />
            <Button className="mt-2 w-full" size="sm">
              <Copy className="size-3.5" />
              Copy link
            </Button>
          </PopoverContent>
        </Popover>
      );
    case "dropdown-menu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Actions
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "command-palette":
      return (
        <div className="w-full max-w-[220px] overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          <div className="flex items-center gap-2 border-b border-border px-3 py-1.5 text-[11px] text-muted-foreground">
            <Search className="size-3.5 shrink-0" />
            ⌘K · Search…
          </div>
          <div className="space-y-0.5 p-1 text-[11px]">
            <div className="rounded-md bg-accent px-2 py-1 font-medium">
              Go to Typography
            </div>
            <div className="px-2 py-1 text-muted-foreground">Toggle dark mode</div>
          </div>
        </div>
      );

    // ── Data display ──────────────────────────────────────
    case "card":
      return (
        <Card className="w-full max-w-[200px] shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Project alpha</CardTitle>
            <CardDescription className="text-xs">
              A contained surface for related content.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" size="xs" className="h-auto px-0">
              Open →
            </Button>
          </CardFooter>
        </Card>
      );
    case "table":
      return (
        <Table className="w-full max-w-[220px] text-xs">
          <TableHeader>
            <TableRow>
              <TableHead className="h-8">Name</TableHead>
              <TableHead className="h-8">Role</TableHead>
              <TableHead className="h-8">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="py-1.5">Ada</TableCell>
              <TableCell className="py-1.5">Admin</TableCell>
              <TableCell className="py-1.5">Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="py-1.5">Lin</TableCell>
              <TableCell className="py-1.5">Editor</TableCell>
              <TableCell className="py-1.5">Away</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    case "list":
      return (
        <ul className="w-full max-w-[200px] divide-y divide-border rounded-lg border border-border text-xs">
          {["Inbox", "Drafts", "Archive"].map((item) => (
            <li key={item} className="flex items-center justify-between px-3 py-2">
              <span>{item}</span>
              <span className="text-muted-foreground">→</span>
            </li>
          ))}
        </ul>
      );
    case "stat-card":
      return (
        <Card className="px-1 py-1 shadow-sm">
          <CardContent className="px-3 py-2">
            <p className="text-[10px] text-muted-foreground">Revenue</p>
            <p className="text-xl font-bold tracking-tight">$48.2k</p>
            <p className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              ↑ 12% vs last month
            </p>
          </CardContent>
        </Card>
      );
    case "chip-tag":
      return (
        <div className="flex flex-wrap gap-1.5">
          {["Design", "React", "AI"].map((t) => (
            <Badge key={t} variant="secondary" className="gap-1">
              {t}
              <span className="opacity-60">×</span>
            </Badge>
          ))}
        </div>
      );
    case "avatar-group":
      return (
        <div className="flex -space-x-2">
          {["A", "B", "C"].map((l, i) => (
            <Avatar key={l} className="size-8 border-2 border-background">
              <AvatarFallback
                className="text-[10px] font-bold text-white"
                style={{
                  backgroundColor: ["#6366F1", "#EC4899", "#14B8A6"][i],
                }}
              >
                {l}
              </AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="size-8 border-2 border-background">
            <AvatarFallback className="bg-muted text-[10px] text-muted-foreground">
              +5
            </AvatarFallback>
          </Avatar>
        </div>
      );
    case "description-list":
      return (
        <dl className="grid w-full max-w-[220px] grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
          <dt className="text-muted-foreground">Status</dt>
          <dd className="font-medium">Published</dd>
          <dt className="text-muted-foreground">Owner</dt>
          <dd className="font-medium">Ada L.</dd>
          <dt className="text-muted-foreground">Updated</dt>
          <dd className="font-medium">Today</dd>
        </dl>
      );
    case "accordion":
      return (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-[240px]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xs">What is Design Menu?</AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground">
              A labeled catalog of UI design elements and AI prompt tips.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );

    // ── Surfaces ──────────────────────────────────────────
    case "elevation-shadow":
      return (
        <div className="flex items-end gap-3">
          <div className="size-10 rounded-lg border border-border bg-card shadow-sm" />
          <div className="size-12 rounded-lg border border-border bg-card shadow-md" />
          <div className="size-14 rounded-lg border border-border bg-card shadow-xl" />
        </div>
      );
    case "border":
      return (
        <div className="flex gap-2">
          <div className="size-12 rounded-lg border border-border" />
          <div className="size-12 rounded-lg border-2 border-primary" />
          <div className="size-12 rounded-lg border border-dashed border-muted-foreground" />
        </div>
      );
    case "border-radius":
      return (
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-none bg-primary/80" />
          <div className="size-10 rounded-md bg-primary/80" />
          <div className="size-10 rounded-xl bg-primary/80" />
          <div className="size-10 rounded-full bg-primary/80" />
        </div>
      );
    case "divider":
      return (
        <div className="w-full max-w-[200px] space-y-2 text-xs">
          <p>Section A</p>
          <Separator />
          <p>Section B</p>
        </div>
      );
    case "glassmorphism":
      return (
        <div className="relative w-full max-w-[200px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-sky-500 to-cyan-400" />
          <div className="relative m-3 rounded-lg border border-white/30 bg-white/20 p-3 text-xs font-medium text-white backdrop-blur-md">
            Frosted glass
          </div>
        </div>
      );
    case "gradient":
      return (
        <div className="h-14 w-full max-w-[200px] rounded-xl bg-gradient-to-r from-teal-600 via-sky-500 to-cyan-400" />
      );

    // ── Media ─────────────────────────────────────────────
    case "avatar":
      return (
        <div className="flex items-center gap-2">
          <Avatar className="size-10">
            <AvatarFallback className="bg-primary text-sm font-bold text-primary-foreground">
              DM
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar className="size-6">
            <AvatarFallback className="text-[10px]">C</AvatarFallback>
          </Avatar>
        </div>
      );
    case "icon":
      return (
        <div className="flex gap-3 text-foreground">
          <Home className="size-5" />
          <Search className="size-5" />
          <User className="size-5" />
        </div>
      );
    case "image-frame":
      return (
        <div className="h-16 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-teal-400 via-sky-500 to-cyan-700 shadow-sm" />
      );
    case "favicon-logo":
      return (
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            DM
          </div>
          <span className="text-sm font-semibold tracking-tight">Design Menu</span>
        </div>
      );
    case "thumbnail":
      return (
        <div className="flex gap-2">
          {[
            "from-rose-400 to-orange-400",
            "from-emerald-400 to-cyan-500",
            "from-amber-400 to-teal-600",
          ].map((g) => (
            <div key={g} className={cn("size-12 rounded-lg bg-gradient-to-br", g)} />
          ))}
        </div>
      );

    // ── States ────────────────────────────────────────────
    case "hover-state":
      return (
        <Button
          variant="outline"
          size="sm"
          className="transition-all hover:scale-[1.02] hover:border-primary hover:bg-accent"
        >
          Hover this control
        </Button>
      );
    case "focus-ring":
      return (
        <Button variant="outline" size="sm">
          Tab to focus
        </Button>
      );
    case "disabled-state":
      return (
        <Button disabled size="sm">
          Disabled
        </Button>
      );
    case "selected-state":
      return (
        <div className="flex gap-2">
          <div className="rounded-lg border-2 border-primary bg-accent px-3 py-2 text-xs font-medium text-accent-foreground">
            ✓ Selected
          </div>
          <div className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">
            Default
          </div>
        </div>
      );
    case "skeleton-pulse":
      return <Skeleton className="h-8 w-32" />;
    case "cursor-affordance":
      return (
        <div className="flex flex-wrap gap-2 text-[10px]">
          <Badge variant="outline" className="cursor-pointer">
            pointer
          </Badge>
          <Badge variant="outline" className="cursor-grab">
            grab
          </Badge>
          <Badge variant="outline" className="cursor-not-allowed opacity-50">
            not-allowed
          </Badge>
          <Badge variant="outline" className="cursor-text">
            text
          </Badge>
        </div>
      );

    // ── AI Slop (anti-patterns) ───────────────────────────
    case "slop-purple-gradient":
      return (
        <div className="relative w-full max-w-[240px] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 text-center text-white shadow-lg">
          <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
            The future of
          </p>
          <p className="text-sm font-bold">Absolutely Everything</p>
          <div className="mt-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
            ✨ AI Powered
          </div>
          <Badge className="absolute top-2 right-2 bg-destructive text-[9px]">Slop</Badge>
        </div>
      );
    case "slop-3d-blobs":
      return (
        <div className="relative h-20 w-full max-w-[220px]">
          <div className="absolute top-2 left-4 size-14 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 opacity-80 shadow-xl blur-[1px]" />
          <div className="absolute right-6 bottom-1 size-12 rounded-full bg-gradient-to-br from-pink-300 to-rose-500 opacity-80 shadow-xl" />
          <div className="absolute top-6 left-16 size-10 rounded-full bg-gradient-to-br from-violet-300 to-indigo-500 opacity-70 shadow-lg" />
          <Badge className="absolute top-1 right-1 text-[9px]" variant="destructive">
            Slop
          </Badge>
        </div>
      );
    case "slop-generic-copy":
      return (
        <div className="max-w-[240px] space-y-1 text-center">
          <p className="text-sm font-semibold">
            Unlock the future of seamless synergy
          </p>
          <p className="text-[11px] text-muted-foreground">
            Empower your team to revolutionize cutting-edge workflows.
          </p>
          <Badge variant="destructive" className="text-[9px]">
            Interchangeable
          </Badge>
        </div>
      );
    case "slop-icon-grid":
      return (
        <div className="grid w-full max-w-[240px] grid-cols-3 gap-2">
          {["⚡ Fast", "🔒 Secure", "🚀 Scale"].map((t) => (
            <div
              key={t}
              className="rounded-xl border border-border bg-card p-2 text-center text-[10px] shadow-sm"
            >
              <div className="mb-1 text-base">{t.split(" ")[0]}</div>
              <div className="font-medium">{t.split(" ")[1]}</div>
              <div className="text-muted-foreground">Lorem feature</div>
            </div>
          ))}
        </div>
      );
    case "slop-center-everything":
      return (
        <div className="w-full max-w-[220px] space-y-1 text-center">
          <p className="text-sm font-bold">Everything is centered</p>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Long paragraphs of body copy that should be left-aligned for scanning
            but instead form a centered blob that is hard to read on wide screens
            and looks lazy.
          </p>
        </div>
      );
    case "slop-rainbow-badges":
      return (
        <div className="flex max-w-[240px] flex-wrap gap-1">
          {[
            "bg-red-500",
            "bg-orange-500",
            "bg-yellow-500",
            "bg-green-500",
            "bg-blue-500",
            "bg-purple-500",
            "bg-pink-500",
          ].map((c, i) => (
            <span
              key={c}
              className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium text-white", c)}
            >
              Tag {i + 1}
            </span>
          ))}
        </div>
      );
    case "slop-stock-faces":
      return (
        <div className="flex max-w-[240px] items-start gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
          <div className="flex -space-x-2">
            {["😊", "🙂", "😄"].map((e) => (
              <div
                key={e}
                className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-muted text-sm"
              >
                {e}
              </div>
            ))}
          </div>
          <div className="text-[11px]">
            <p className="italic text-muted-foreground">
              “This product changed my life completely!”
            </p>
            <p className="mt-1 font-medium">Happy Customer</p>
          </div>
        </div>
      );
    case "slop-emoji-overload":
      return (
        <div className="max-w-[220px] space-y-1 text-sm">
          <p className="font-semibold">🚀 Ship faster ✨ today 💡</p>
          <Button size="sm" className="w-full">
            🎉 Get started 🔥 now ⚡
          </Button>
        </div>
      );
    case "slop-low-contrast":
      return (
        <div className="w-full max-w-[220px] rounded-lg bg-white p-3 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-400">Looks soft & premium</p>
          <p className="text-xs text-zinc-300 dark:text-zinc-600">
            Body text that fails contrast checks and disappears for many readers.
          </p>
        </div>
      );
    case "slop-same-radius":
      return (
        <div className="flex w-full max-w-[220px] flex-col gap-2">
          <div className="h-8 rounded-[2rem] border border-border bg-card" />
          <div className="h-10 rounded-[2rem] bg-primary/20" />
          <div className="flex gap-2">
            <div className="h-8 flex-1 rounded-[2rem] bg-muted" />
            <div className="h-8 flex-1 rounded-[2rem] bg-muted" />
          </div>
        </div>
      );
    case "slop-inter-only":
      return (
        <div className="dm-font-inter max-w-[220px] space-y-2 rounded-lg border border-border bg-card p-3 text-left">
          <div className="space-y-0.5">
            <p className="text-[9px] font-medium tracking-wide text-muted-foreground uppercase">
              Inter · display
            </p>
            <p className="text-lg leading-tight font-bold tracking-tight">
              Ship faster today
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-[9px] font-medium tracking-wide text-muted-foreground uppercase">
              Inter · UI
            </p>
            <span className="inline-flex rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground">
              Get started
            </span>
          </div>
          <div className="space-y-0.5">
            <p className="text-[9px] font-medium tracking-wide text-muted-foreground uppercase">
              Inter · caption
            </p>
            <p className="text-[10px] leading-snug text-muted-foreground">
              Same face for every role — no display pairing, zero personality.
            </p>
          </div>
          <Badge variant="destructive" className="text-[9px]">
            Inter-only vacuum
          </Badge>
        </div>
      );
    case "slop-glow-everything":
      return (
        <div className="flex w-full max-w-[220px] flex-col items-center gap-2 rounded-xl bg-zinc-950 p-3">
          <div
            className="rounded-lg border border-cyan-400/50 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-cyan-300"
            style={{ boxShadow: "0 0 18px rgb(34 211 238 / 0.7)" }}
          >
            Glowing button
          </div>
          <div
            className="w-full rounded-lg border border-fuchsia-400/40 bg-zinc-900/80 p-2 text-center text-[10px] text-fuchsia-200"
            style={{ boxShadow: "0 0 22px rgb(232 121 249 / 0.45)" }}
          >
            Glowing card too
          </div>
        </div>
      );
    case "slop-fake-metrics":
      return (
        <div className="grid w-full max-w-[240px] grid-cols-3 gap-1 text-center">
          {[
            ["10k+", "teams"],
            ["99.9%", "uptime"],
            ["4.9★", "rating"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card p-2">
              <p className="text-sm font-bold">{n}</p>
              <p className="text-[9px] text-muted-foreground">{l}</p>
            </div>
          ))}
          <Badge variant="destructive" className="col-span-3 mx-auto text-[9px]">
            Unsourced
          </Badge>
        </div>
      );
    case "slop-hero-badge-stack":
      return (
        <div className="w-full max-w-[220px] space-y-2 text-center">
          <div className="flex flex-wrap justify-center gap-1">
            {["New", "AI", "Beta", "Free", "Hot"].map((b) => (
              <span
                key={b}
                className="rounded-full bg-primary/15 px-2 py-0.5 text-[9px] font-semibold text-primary"
              >
                {b}
              </span>
            ))}
          </div>
          <p className="text-sm font-bold">Ship the future</p>
        </div>
      );
    case "slop-shadow-everywhere":
      return (
        <div className="flex w-full max-w-[220px] flex-col gap-2">
          {["Card", "Tile", "Box"].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-border/50 bg-card px-3 py-2 text-[11px]"
              style={{ boxShadow: "0 4px 14px rgb(0 0 0 / 0.1)" }}
            >
              {label} + same soft shadow
            </div>
          ))}
        </div>
      );
    case "slop-lorem-product":
      return (
        <div className="max-w-[220px] space-y-1">
          <p className="text-sm font-semibold">Our product</p>
          <p className="text-[11px] leading-snug text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod…
          </p>
          <Badge variant="destructive" className="text-[9px]">
            Placeholder shipped
          </Badge>
        </div>
      );
    case "slop-glass-everywhere":
      return (
        <div className="relative w-full max-w-[220px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-emerald-500" />
          <div className="relative space-y-1.5 p-2">
            {["Nav glass", "Card glass", "Footer glass"].map((t) => (
              <div
                key={t}
                className="rounded-md border border-white/30 bg-white/20 px-2 py-1.5 text-[10px] font-medium text-white backdrop-blur-md"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      );
    case "slop-dark-cyan-hacker":
      return (
        <div className="w-full max-w-[220px] space-y-2 rounded-lg border border-cyan-500/30 bg-zinc-950 p-3 font-mono">
          <p className="text-[10px] text-cyan-400">&gt; init_system()</p>
          <p className="text-xs font-semibold text-cyan-300">DARK_MODE.exe</p>
          <p className="text-[10px] text-cyan-600">// every product is a terminal now</p>
        </div>
      );
    case "slop-identical-cards":
      return (
        <div className="grid w-full max-w-[240px] grid-cols-3 gap-1.5">
          {["One", "Two", "Three"].map((t) => (
            <div
              key={t}
              className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-2 text-center shadow-sm"
            >
              <div className="flex size-7 items-center justify-center rounded-lg bg-muted text-[10px]">
                ◆
              </div>
              <p className="text-[10px] font-semibold">{t}</p>
              <p className="text-[8px] text-muted-foreground">Same card</p>
            </div>
          ))}
        </div>
      );

    // ── Library practices ─────────────────────────────────
    case "lib-compose-primitives":
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Button</Button>
          <Input className="h-8 w-28" placeholder="Input" readOnly />
          <Badge>Badge</Badge>
        </div>
      );
    case "lib-variants":
      return (
        <div className="flex flex-wrap gap-1.5">
          <Button size="sm">Default</Button>
          <Button size="sm" variant="outline">
            Outline
          </Button>
          <Button size="sm" variant="ghost">
            Ghost
          </Button>
          <Button size="sm" variant="destructive">
            Danger
          </Button>
        </div>
      );
    case "lib-tokens":
      return (
        <div className="grid grid-cols-4 gap-1.5 text-[9px]">
          {[
            { name: "bg", className: "bg-background border border-border" },
            { name: "card", className: "bg-card border border-border" },
            { name: "primary", className: "bg-primary text-primary-foreground" },
            { name: "muted", className: "bg-muted text-muted-foreground" },
          ].map((t) => (
            <div
              key={t.name}
              className={cn(
                "flex h-12 items-end justify-center rounded-md p-1 font-mono",
                t.className,
              )}
            >
              {t.name}
            </div>
          ))}
        </div>
      );
    case "lib-as-child":
      return (
        <Button asChild size="sm">
          <a href="#library-practices">Link as Button</a>
        </Button>
      );
    case "lib-accessible-overlays":
      return (
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xs">
              <DialogHeader>
                <DialogTitle>Accessible by default</DialogTitle>
                <DialogDescription>
                  Focus trap, Escape, and labels included.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Keyboard ready</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    case "lib-cn-merge":
      return (
        <div className="max-w-[220px] rounded-lg border border-border bg-card p-2 font-mono text-[10px] leading-relaxed">
          <span className="text-primary">cn(</span>
          <br />
          {"  "}base,{" "}
          <span className="text-muted-foreground">className</span>
          <br />
          <span className="text-primary">)</span>
        </div>
      );
    case "lib-dark-mode":
      return (
        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-border bg-background px-2 py-1.5 text-[10px]">
            light
          </div>
          <div className="rounded-lg border border-border bg-zinc-900 px-2 py-1.5 text-[10px] text-zinc-100">
            .dark
          </div>
          <Badge variant="outline" className="text-[10px]">
            class strategy
          </Badge>
        </div>
      );
    case "lib-dont-restyle-everything":
      return (
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Button size="sm">OK</Button>
            <Button size="sm">OK</Button>
            <Button size="sm">OK</Button>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Same variant × 3 beats three custom one-offs
          </p>
        </div>
      );
    case "lib-tailwind-layout":
      return (
        <div className="flex w-full max-w-[200px] flex-col gap-2 rounded-lg border border-dashed border-border p-2">
          <div className="flex gap-2">
            <div className="h-6 flex-1 rounded bg-muted" />
            <div className="h-6 flex-1 rounded bg-muted" />
          </div>
          <div className="h-8 rounded bg-accent" />
          <p className="text-[10px] text-muted-foreground">flex + gap utilities</p>
        </div>
      );
    case "lib-copy-then-adapt":
      return (
        <div className="max-w-[220px] space-y-1 rounded-lg border border-border bg-card p-3 text-[11px]">
          <p className="font-medium">src/components/ui/button.tsx</p>
          <p className="text-muted-foreground">
            Yours to edit — not a sealed package black box.
          </p>
        </div>
      );
    case "lib-form-field-pattern":
      return (
        <div className="w-full max-w-[200px] space-y-1.5">
          <Label htmlFor="demo-email" className="text-xs">
            Email
          </Label>
          <Input id="demo-email" className="h-8" placeholder="you@company.com" readOnly />
          <p className="text-[10px] text-muted-foreground">
            We never share your address.
          </p>
        </div>
      );
    case "lib-icon-sizing":
      return (
        <div className="flex items-center gap-3">
          <Button size="sm" className="gap-2">
            <Search className="size-4" />
            Search
          </Button>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Home className="size-5" />
            <span>Nav · size-5</span>
          </div>
        </div>
      );
    case "lib-data-state":
      return (
        <div className="flex items-center gap-2">
          <Switch defaultChecked aria-label="Enabled state" />
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px]">
            data-[state=checked]
          </code>
        </div>
      );
    case "lib-controlled-open":
      return (
        <div className="max-w-[220px] space-y-1 rounded-lg border border-border bg-card p-2 font-mono text-[10px] leading-relaxed">
          <div>
            <span className="text-primary">open</span>=
            {"{isOpen}"}
          </div>
          <div>
            <span className="text-primary">onOpenChange</span>
            {"={setOpen}"}
          </div>
          <p className="pt-1 font-sans text-[10px] text-muted-foreground">
            Controlled Dialog / Sheet
          </p>
        </div>
      );
    case "lib-mobile-first":
      return (
        <div className="w-full max-w-[200px] space-y-1">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <div className="rounded bg-muted px-2 py-1.5 text-[10px]">base: 1 col</div>
            <div className="rounded bg-accent px-2 py-1.5 text-[10px] text-accent-foreground">
              md: 2 col
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground">Mobile-first utilities</p>
        </div>
      );
    case "lib-size-props":
      return (
        <div className="flex flex-wrap items-center gap-1.5">
          <Button size="sm">sm</Button>
          <Button size="default">default</Button>
          <Button size="lg">lg</Button>
        </div>
      );
    case "lib-skeleton-match":
      return (
        <div className="flex w-full max-w-[200px] items-center gap-2">
          <Skeleton className="size-9 shrink-0 rounded-full" />
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      );
    case "lib-destructive-confirm":
      return (
        <div className="w-full max-w-[220px] space-y-2 rounded-lg border border-destructive/40 bg-card p-3">
          <p className="text-xs font-semibold">Delete project?</p>
          <p className="text-[10px] text-muted-foreground">
            This cannot be undone.
          </p>
          <div className="flex justify-end gap-1.5">
            <Button size="sm" variant="outline">
              Cancel
            </Button>
            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      );

    // ── Completeness pack (standard vocabulary gaps) ──────
    case "lead-text":
      return (
        <p className="max-w-[15rem] text-left text-[13px] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
          A short lead that frames the page before denser body copy begins.
        </p>
      );
    case "text-truncation":
      return (
        <p
          className="w-40 truncate text-left text-sm font-medium"
          title="Design systems need shared language for every role"
        >
          Design systems need shared language for every role
        </p>
      );
    case "tabular-nums":
      return (
        <div className="w-full max-w-[180px] space-y-1 text-sm tabular-nums">
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Revenue</span>
            <span className="font-medium">$12,480.00</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Refunds</span>
            <span className="font-medium">$1,205.50</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Net</span>
            <span className="font-medium">$11,274.50</span>
          </div>
        </div>
      );
    case "unordered-list":
      return (
        <ul className="list-disc space-y-1 pl-4 text-left text-sm">
          <li>Clear hierarchy</li>
          <li>Consistent spacing</li>
          <li>Accessible contrast</li>
        </ul>
      );
    case "accent-color":
      return (
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-xl bg-accent shadow-sm ring-1 ring-border" />
          <div className="text-sm">
            <p className="font-medium text-accent-foreground">Accent</p>
            <p className="text-muted-foreground">Soft highlight</p>
          </div>
        </div>
      );
    case "border-color":
      return (
        <div className="flex gap-2">
          <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs">
            border
          </div>
          <div className="rounded-lg border-2 border-primary/40 bg-card px-3 py-2 text-xs">
            emphasis
          </div>
        </div>
      );
    case "opacity-scale":
      return (
        <div className="flex items-end gap-1.5">
          {[5, 10, 20, 40, 60, 80].map((o) => (
            <div key={o} className="flex flex-col items-center gap-1">
              <div
                className="h-10 w-7 rounded-md bg-primary"
                style={{ opacity: o / 100 }}
              />
              <span className="text-[9px] text-muted-foreground">{o}%</span>
            </div>
          ))}
        </div>
      );
    case "inverse-colors":
      return (
        <div className="flex gap-2">
          <div className="rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground">
            On primary
          </div>
          <div className="rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background">
            Inverse
          </div>
        </div>
      );
    case "z-index-layers":
      return (
        <div className="relative h-16 w-full max-w-[180px]">
          <div className="absolute top-4 left-0 z-0 h-10 w-24 rounded-md border border-border bg-muted text-[9px] leading-10 text-center">
            base
          </div>
          <div className="absolute top-2 left-8 z-10 h-10 w-24 rounded-md border border-border bg-card shadow-sm text-[9px] leading-10 text-center">
            sticky
          </div>
          <div className="absolute top-0 left-16 z-20 h-10 w-24 rounded-md bg-primary text-[9px] font-medium leading-10 text-center text-primary-foreground shadow-md">
            modal
          </div>
        </div>
      );
    case "sticky-position":
      return (
        <div className="h-20 w-full max-w-[200px] overflow-y-auto rounded-lg border border-border">
          <div className="sticky top-0 z-10 border-b border-border bg-card/95 px-2 py-1.5 text-[10px] font-semibold backdrop-blur">
            Sticky header
          </div>
          <div className="space-y-1 p-2">
            {["Row A", "Row B", "Row C", "Row D", "Row E"].map((r) => (
              <div key={r} className="rounded bg-muted/60 px-2 py-1 text-[10px]">
                {r}
              </div>
            ))}
          </div>
        </div>
      );
    case "split-layout":
      return (
        <div className="grid w-full max-w-[220px] grid-cols-2 gap-2">
          <div className="rounded-lg border border-border bg-muted/50 p-2 text-[10px]">
            List
          </div>
          <div className="rounded-lg border border-border bg-card p-2 text-[10px] shadow-sm">
            Detail
          </div>
        </div>
      );
    case "outline-button":
      return <Button variant="outline">Outline</Button>;
    case "link-button":
      return <Button variant="link">Link action</Button>;
    case "button-with-icon":
      return (
        <Button>
          <Settings />
          Settings
        </Button>
      );
    case "search-input":
      return (
        <div className="relative w-full max-w-[220px]">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search…"
            className="pl-8"
            readOnly
          />
        </div>
      );
    case "password-input":
      return (
        <Input
          type="password"
          defaultValue="••••••••"
          className="max-w-[220px]"
          readOnly
          aria-label="Password"
        />
      );
    case "number-input":
      return (
        <div className="flex items-center gap-1">
          <Button size="sm" variant="outline" className="size-8 p-0">
            −
          </Button>
          <Input
            type="number"
            defaultValue={3}
            className="w-14 text-center"
            readOnly
          />
          <Button size="sm" variant="outline" className="size-8 p-0">
            +
          </Button>
        </div>
      );
    case "date-input":
      return (
        <Input type="date" defaultValue="2026-07-13" className="max-w-[180px]" readOnly />
      );
    case "segmented-control":
      return (
        <div className="inline-flex rounded-lg bg-muted p-0.5">
          {["Day", "Week", "Month"].map((t, i) => (
            <button
              key={t}
              type="button"
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-medium",
                i === 1
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>
      );
    case "skip-link":
      return (
        <a
          href="#main"
          className="rounded-md border border-primary bg-primary px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground shadow-sm"
        >
          Skip to content
        </a>
      );
    case "active-nav-item":
      return (
        <nav className="w-full max-w-[160px] space-y-0.5 text-left text-xs">
          <div className="rounded-md bg-accent px-2 py-1.5 font-medium text-accent-foreground">
            Overview
          </div>
          <div className="rounded-md px-2 py-1.5 text-muted-foreground">Projects</div>
          <div className="rounded-md px-2 py-1.5 text-muted-foreground">Settings</div>
        </nav>
      );
    case "status-dot":
      return (
        <div className="flex flex-col gap-2 text-xs">
          {[
            { label: "Online", className: "bg-emerald-500" },
            { label: "Away", className: "bg-amber-500" },
            { label: "Busy", className: "bg-destructive" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className={cn("size-2.5 rounded-full", s.className)} />
              {s.label}
            </div>
          ))}
        </div>
      );
    case "inline-callout":
      return (
        <div className="w-full max-w-[220px] rounded-lg border border-primary/20 bg-accent/60 px-3 py-2 text-left">
          <p className="text-[11px] font-semibold text-accent-foreground">Tip</p>
          <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
            Use callouts for non-urgent guidance, not critical errors.
          </p>
        </div>
      );
    case "success-banner":
      return (
        <Alert className="w-full max-w-[220px] border-emerald-500/40 bg-emerald-500/10 text-left">
          <Check className="size-4 text-emerald-600" />
          <AlertTitle className="text-sm text-emerald-800 dark:text-emerald-200">
            Saved
          </AlertTitle>
          <AlertDescription className="text-xs text-emerald-700/90 dark:text-emerald-300/90">
            Your changes are live.
          </AlertDescription>
        </Alert>
      );
    case "alert-dialog":
      return (
        <div className="w-full max-w-[220px] space-y-2 rounded-xl border border-border bg-card p-3 shadow-lg">
          <p className="text-xs font-semibold">Delete this file?</p>
          <p className="text-[10px] text-muted-foreground">
            This action cannot be undone.
          </p>
          <div className="flex justify-end gap-1.5 pt-1">
            <Button size="sm" variant="outline">
              Cancel
            </Button>
            <Button size="sm" variant="destructive">
              Delete
            </Button>
          </div>
        </div>
      );
    case "bottom-sheet":
      return (
        <div className="relative h-20 w-full max-w-[180px] overflow-hidden rounded-xl border border-border bg-muted/40">
          <div className="absolute inset-x-0 bottom-0 rounded-t-xl border border-border bg-card p-2 shadow-lg">
            <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-muted-foreground/30" />
            <p className="text-center text-[11px] font-medium">Actions</p>
            <p className="text-center text-[10px] text-muted-foreground">Share · Edit · Copy</p>
          </div>
        </div>
      );
    case "context-menu":
      return (
        <div className="w-full max-w-[160px] rounded-lg border border-border bg-popover p-1 text-left text-[11px] shadow-md">
          <div className="rounded-md px-2 py-1.5 hover:bg-accent">Open</div>
          <div className="rounded-md px-2 py-1.5 hover:bg-accent">Rename</div>
          <Separator className="my-1" />
          <div className="rounded-md px-2 py-1.5 text-destructive hover:bg-accent">
            Delete
          </div>
        </div>
      );
    case "hover-card":
      return (
        <div className="flex w-full max-w-[200px] items-start gap-2 rounded-xl border border-border bg-card p-2.5 shadow-md">
          <Avatar className="size-8">
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div className="min-w-0 text-left">
            <p className="text-xs font-semibold">Alex Lee</p>
            <p className="text-[10px] text-muted-foreground">Product design · Online</p>
            <Button size="sm" variant="outline" className="mt-1.5 h-6 text-[10px]">
              View profile
            </Button>
          </div>
        </div>
      );
    case "timeline":
      return (
        <div className="relative w-full max-w-[200px] space-y-3 pl-4 text-left">
          <div className="absolute top-1 bottom-1 left-[5px] w-px bg-border" />
          {["Shipped", "In review", "Opened"].map((t, i) => (
            <div key={t} className="relative">
              <span
                className={cn(
                  "absolute top-1 -left-4 size-2.5 rounded-full border-2 border-background",
                  i === 0 ? "bg-primary" : "bg-muted-foreground/40",
                )}
              />
              <p className="text-[11px] font-medium">{t}</p>
              <p className="text-[9px] text-muted-foreground">Step {3 - i}</p>
            </div>
          ))}
        </div>
      );
    case "tree-list":
      return (
        <div className="w-full max-w-[180px] space-y-0.5 text-left font-mono text-[11px]">
          <div className="font-medium">▾ src</div>
          <div className="pl-3 text-muted-foreground">▾ components</div>
          <div className="pl-6">Button.tsx</div>
          <div className="pl-6">Card.tsx</div>
          <div className="pl-3 text-muted-foreground">lib</div>
        </div>
      );
    case "toolbar":
      return (
        <div className="inline-flex items-center gap-0.5 rounded-lg border border-border bg-card p-1 shadow-sm">
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" aria-label="Home">
            <Home className="size-3.5" />
          </Button>
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" aria-label="Search">
            <Search className="size-3.5" />
          </Button>
          <Separator orientation="vertical" className="mx-0.5 h-5" />
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" aria-label="Settings">
            <Settings className="size-3.5" />
          </Button>
        </div>
      );
    case "raised-surface":
      return (
        <div className="rounded-xl bg-card px-4 py-3 text-xs shadow-[var(--card-shadow-hover)]">
          Raised panel
        </div>
      );
    case "inset-surface":
      return (
        <div className="w-full max-w-[180px] rounded-lg bg-muted/80 px-3 py-3 text-xs text-muted-foreground shadow-inner ring-1 ring-inset ring-border/60">
          Inset well
        </div>
      );
    case "outline-ring":
      return (
        <div className="rounded-xl border border-border bg-card px-4 py-3 text-xs ring-2 ring-primary ring-offset-1 ring-offset-background">
          Selected ring
        </div>
      );
    case "dashed-border":
      return (
        <div className="flex h-16 w-full max-w-[180px] items-center justify-center rounded-xl border border-dashed border-border text-[11px] text-muted-foreground">
          Drop files here
        </div>
      );
    case "media-object":
      return (
        <div className="flex w-full max-w-[220px] items-start gap-2.5 text-left">
          <div className="size-10 shrink-0 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600" />
          <div className="min-w-0">
            <p className="text-xs font-semibold">Media object</p>
            <p className="text-[10px] leading-snug text-muted-foreground">
              Image left, supporting text right.
            </p>
          </div>
        </div>
      );
    case "image-caption":
      return (
        <figure className="w-full max-w-[160px] text-left">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-sky-300 to-indigo-400" />
          <figcaption className="mt-1.5 text-[10px] text-muted-foreground">
            Figure 1 · Cover study
          </figcaption>
        </figure>
      );
    case "video-placeholder":
      return (
        <div className="relative aspect-video w-full max-w-[200px] overflow-hidden rounded-xl bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow">
              ▶
            </div>
          </div>
          <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-[9px] text-white">
            2:14
          </span>
        </div>
      );
    case "icon-badge":
      return (
        <div className="relative inline-flex">
          <Bell className="size-6 text-foreground" />
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-bold text-white">
            3
          </span>
        </div>
      );
    case "cover-image":
      return (
        <div className="h-16 w-full max-w-[220px] overflow-hidden rounded-xl">
          <div className="h-full w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
        </div>
      );
    case "active-pressed":
      return (
        <div className="flex gap-2">
          <Button size="sm">Rest</Button>
          <Button size="sm" className="scale-[0.98] bg-primary/85">
            Pressed
          </Button>
        </div>
      );
    case "loading-state":
      return (
        <Button disabled>
          <Loader2 className="animate-spin" />
          Saving…
        </Button>
      );
    case "error-state":
      return (
        <div className="w-full max-w-[200px] space-y-1 text-left">
          <Input
            aria-invalid
            defaultValue="not-an-email"
            className="border-destructive focus-visible:ring-destructive/30"
            readOnly
          />
          <p className="text-[10px] text-destructive">Enter a valid email address.</p>
        </div>
      );
    case "drag-state":
      return (
        <div className="w-full max-w-[200px] space-y-1.5">
          <div className="h-8 rounded-md border border-dashed border-border bg-muted/40" />
          <div className="flex h-9 cursor-grabbing items-center gap-2 rounded-md border border-border bg-card px-2 text-[11px] font-medium shadow-md opacity-90">
            <span className="text-muted-foreground">⠿</span>
            Dragging item
          </div>
          <div className="h-8 rounded-md border border-border bg-card/50" />
        </div>
      );


    // ── Expanded vocabulary demos ──────────────────────
    case "ordered-list":
      return (
        <ol className="list-decimal space-y-1 pl-5 text-left text-sm">
          <li>Define tokens</li>
          <li>Compose primitives</li>
          <li>Ship the pattern</li>
        </ol>
      );
    case "kbd":
      return (
        <p className="text-sm">
          Press{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] shadow-sm">
            ⌘
          </kbd>{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] shadow-sm">
            K
          </kbd>{" "}
          to search.
        </p>
      );
    case "code-block":
      return (
        <pre className="w-full max-w-[220px] overflow-x-auto rounded-lg bg-zinc-950 p-2.5 text-left font-mono text-[10px] leading-relaxed text-zinc-100">
          <code>{`const ok = true;
return ok;`}</code>
        </pre>
      );
    case "font-weight-scale":
      return (
        <div className="space-y-1 text-left text-sm">
          <p className="font-normal">Regular 400</p>
          <p className="font-medium">Medium 500</p>
          <p className="font-semibold">Semibold 600</p>
          <p className="font-bold">Bold 700</p>
        </div>
      );
    case "letter-spacing":
      return (
        <div className="space-y-2 text-left">
          <p className="text-lg font-bold tracking-tighter">Tight display</p>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Wide label
          </p>
        </div>
      );
    case "strikethrough":
      return (
        <p className="text-sm">
          <span className="text-muted-foreground line-through">$48</span>{" "}
          <span className="font-semibold text-foreground">$32</span>
        </p>
      );
    case "prose-measure":
      return (
        <div className="w-full max-w-[220px] space-y-1 text-left">
          <p className="text-[10px] font-medium text-muted-foreground">~65ch measure</p>
          <p className="max-w-[18ch] rounded border border-dashed border-border px-2 py-1.5 text-[11px] leading-snug">
            Short lines are easier to scan than full-bleed paragraphs.
          </p>
        </div>
      );
    case "text-balance":
      return (
        <p className="max-w-[10rem] text-center text-sm font-semibold text-balance">
          Beautiful balanced multi-line titles
        </p>
      );
    case "surface-colors":
      return (
        <div className="flex w-full max-w-[200px] flex-col gap-1 rounded-xl bg-background p-2 ring-1 ring-border">
          <div className="rounded-lg bg-card p-2 ring-1 ring-border">
            <div className="rounded-md bg-muted px-2 py-1.5 text-[10px]">Surface ladder</div>
          </div>
        </div>
      );
    case "focus-ring-color":
      return (
        <button
          type="button"
          className="rounded-md border border-border bg-card px-3 py-1.5 text-xs ring-2 ring-ring ring-offset-1 ring-offset-background"
        >
          Focus ring
        </button>
      );
    case "chart-colors":
      return (
        <div className="flex items-end gap-1.5">
          {["bg-sky-500", "bg-emerald-500", "bg-amber-500", "bg-violet-500", "bg-rose-500"].map(
            (c, i) => (
              <div
                key={c}
                className={`w-6 rounded-sm ${c}`}
                style={{ height: 16 + i * 8 }}
              />
            ),
          )}
        </div>
      );
    case "contrast-pair":
      return (
        <div className="flex gap-2">
          <div className="rounded-lg bg-background px-2.5 py-2 text-[10px] ring-1 ring-border">
            <span className="text-foreground">AA text</span>
          </div>
          <div className="rounded-lg bg-primary px-2.5 py-2 text-[10px] text-primary-foreground">
            On primary
          </div>
        </div>
      );
    case "link-color":
      return (
        <p className="text-sm">
          See{" "}
          <span className="font-medium text-primary underline underline-offset-2">docs</span>{" "}
          for tokens.
        </p>
      );
    case "density":
      return (
        <div className="flex w-full max-w-[220px] gap-2">
          <div className="flex-1 space-y-2 rounded-lg border border-border p-3">
            <div className="h-2 rounded bg-muted" />
            <div className="h-2 w-2/3 rounded bg-muted" />
            <p className="text-[9px] text-muted-foreground">Comfortable</p>
          </div>
          <div className="flex-1 space-y-1 rounded-lg border border-border p-1.5">
            <div className="h-1.5 rounded bg-muted" />
            <div className="h-1.5 w-2/3 rounded bg-muted" />
            <p className="text-[9px] text-muted-foreground">Compact</p>
          </div>
        </div>
      );
    case "scroll-area":
      return (
        <div className="h-20 w-full max-w-[160px] overflow-y-auto rounded-lg border border-border">
          <div className="space-y-1 p-2">
            {["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"].map((r) => (
              <div key={r} className="rounded bg-muted/70 px-2 py-1 text-[10px]">
                {r}
              </div>
            ))}
          </div>
        </div>
      );
    case "full-bleed":
      return (
        <div className="w-full max-w-[200px] overflow-hidden rounded-lg border border-border">
          <div className="h-8 bg-gradient-to-r from-sky-400 to-blue-600" />
          <p className="px-2 py-1.5 text-[10px] text-muted-foreground">Full-bleed band</p>
        </div>
      );
    case "multi-column":
      return (
        <div className="w-full max-w-[220px] columns-2 gap-3 text-left text-[10px] leading-snug text-muted-foreground">
          <p className="mb-1">Column flow keeps short definitions compact.</p>
          <p>Use for glossaries, not forms.</p>
        </div>
      );
    case "center-layout":
      return (
        <div className="flex h-20 w-full max-w-[200px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/30">
          <div className="rounded-md border border-border bg-card px-3 py-2 text-[10px] shadow-sm">
            Centered card
          </div>
        </div>
      );
    case "app-shell":
      return (
        <div className="flex h-20 w-full max-w-[220px] overflow-hidden rounded-lg border border-border text-[9px]">
          <div className="w-12 shrink-0 border-r border-border bg-muted/60 p-1.5">Nav</div>
          <div className="flex flex-1 flex-col">
            <div className="border-b border-border px-2 py-1 font-medium">Header</div>
            <div className="flex-1 bg-background p-2 text-muted-foreground">Main</div>
          </div>
        </div>
      );
    case "fab":
      return (
        <div className="relative h-20 w-full max-w-[180px] rounded-lg border border-border bg-muted/30">
          <button
            type="button"
            className="absolute right-2 bottom-2 flex size-10 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground shadow-lg"
            aria-label="Create"
          >
            +
          </button>
        </div>
      );
    case "split-button":
      return (
        <div className="inline-flex overflow-hidden rounded-md shadow-sm">
          <Button size="sm" className="rounded-r-none">
            Save
          </Button>
          <Button size="sm" className="rounded-l-none border-l border-primary-foreground/20 px-2">
            ▾
          </Button>
        </div>
      );
    case "toggle-button":
      return (
        <div className="inline-flex gap-1">
          <Button size="sm" variant="outline" aria-pressed={false}>
            List
          </Button>
          <Button size="sm" aria-pressed={true}>
            Grid
          </Button>
        </div>
      );
    case "close-button":
      return (
        <div className="relative w-full max-w-[160px] rounded-lg border border-border bg-card p-3 pr-8 text-left text-[11px]">
          Panel content
          <button
            type="button"
            className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      );
    case "soft-button":
      return (
        <button
          type="button"
          className="rounded-md bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary"
        >
          Soft action
        </button>
      );
    case "combobox":
      return (
        <div className="w-full max-w-[180px] space-y-1">
          <Input placeholder="Search cities…" className="h-7 text-xs" readOnly />
          <div className="rounded-md border border-border bg-popover p-0.5 text-left text-[10px] shadow-md">
            <div className="rounded px-2 py-1 bg-accent">Portland</div>
            <div className="rounded px-2 py-1">Paris</div>
          </div>
        </div>
      );
    case "otp-input":
      return (
        <div className="flex gap-1.5" role="group" aria-label="One-time code">
          {["4", "8", "2", ""].map((d, i) => (
            <div
              key={i}
              className="flex size-9 items-center justify-center rounded-md border border-border bg-card font-mono text-sm font-semibold"
            >
              {d || <span className="h-3 w-2 animate-pulse rounded-sm bg-muted" />}
            </div>
          ))}
        </div>
      );
    case "multi-select":
      return (
        <div className="flex w-full max-w-[220px] flex-wrap gap-1 rounded-md border border-border bg-card p-1.5">
          <Badge variant="secondary" className="gap-1 text-[10px]">
            Design <span className="opacity-60">×</span>
          </Badge>
          <Badge variant="secondary" className="gap-1 text-[10px]">
            Eng <span className="opacity-60">×</span>
          </Badge>
          <span className="px-1 text-[10px] text-muted-foreground">Add…</span>
        </div>
      );
    case "time-input":
      return (
        <Input type="time" defaultValue="09:30" className="max-w-[140px]" readOnly aria-label="Time" />
      );
    case "fieldset-group":
      return (
        <fieldset className="w-full max-w-[200px] space-y-2 rounded-lg border border-border p-2.5 text-left">
          <legend className="px-1 text-[11px] font-semibold">Shipping</legend>
          <Input placeholder="City" className="h-8" readOnly />
          <Input placeholder="Postal code" className="h-8" readOnly />
        </fieldset>
      );
    case "input-sizes":
      return (
        <div className="w-full max-w-[200px] space-y-1.5">
          <Input placeholder="Small" className="h-7 text-xs" readOnly />
          <Input placeholder="Default" className="h-9" readOnly />
          <Input placeholder="Large" className="h-11 text-base" readOnly />
        </div>
      );
    case "required-marker":
      return (
        <div className="w-full max-w-[200px] space-y-1 text-left">
          <Label>
            Email <span className="text-destructive">*</span>
          </Label>
          <Input placeholder="you@company.com" className="h-8" readOnly />
        </div>
      );
    case "footer-nav":
      return (
        <div className="grid w-full max-w-[220px] grid-cols-3 gap-2 text-left text-[10px]">
          {["Product", "Company", "Legal"].map((h) => (
            <div key={h}>
              <p className="mb-1 font-semibold">{h}</p>
              <p className="text-muted-foreground">Link</p>
              <p className="text-muted-foreground">Link</p>
            </div>
          ))}
        </div>
      );
    case "back-link":
      return (
        <a href="#nav" className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <span aria-hidden>←</span> Settings
        </a>
      );
    case "app-rail":
      return (
        <div className="flex h-24 w-11 flex-col items-center gap-2 rounded-lg border border-border bg-card py-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Home className="size-3.5" />
          </div>
          <Search className="size-3.5 text-muted-foreground" />
          <Settings className="size-3.5 text-muted-foreground" />
        </div>
      );
    case "overflow-nav":
      return (
        <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-card p-1 text-[11px]">
          <span className="rounded-md bg-accent px-2 py-1 font-medium">Home</span>
          <span className="px-2 py-1 text-muted-foreground">Docs</span>
          <span className="rounded-md px-2 py-1 text-muted-foreground">More ▾</span>
        </div>
      );
    case "nav-section-label":
      return (
        <nav className="w-full max-w-[140px] space-y-2 text-left text-[11px]">
          <p className="text-[9px] font-semibold tracking-wider text-muted-foreground uppercase">
            Workspace
          </p>
          <div className="rounded-md bg-accent px-2 py-1 font-medium">Projects</div>
          <div className="px-2 py-1 text-muted-foreground">Members</div>
        </nav>
      );
    case "announcement-bar":
      return (
        <div className="flex w-full max-w-[220px] items-center justify-between gap-2 rounded-md bg-primary px-2.5 py-1.5 text-[10px] text-primary-foreground">
          <span>New: export to Figma →</span>
          <span className="opacity-70" aria-hidden>
            ×
          </span>
        </div>
      );
    case "circular-progress":
      return (
        <div className="relative size-14">
          <svg viewBox="0 0 36 36" className="size-14 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" className="stroke-muted" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              className="stroke-primary"
              strokeWidth="3"
              strokeDasharray="70 100"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold">
            70%
          </span>
        </div>
      );
    case "action-banner":
      return (
        <div className="flex w-full max-w-[220px] flex-col gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 p-2.5 text-left">
          <p className="text-[11px] font-medium">Update available</p>
          <div className="flex gap-1.5">
            <Button size="sm" className="h-7 text-[10px]">
              Update
            </Button>
            <Button size="sm" variant="ghost" className="h-7 text-[10px]">
              Later
            </Button>
          </div>
        </div>
      );
    case "inline-status":
      return (
        <div className="flex items-center gap-2 text-xs">
          <Check className="size-3.5 text-emerald-600" />
          <span className="text-emerald-700 dark:text-emerald-400">All changes saved</span>
        </div>
      );
    case "count-badge":
      return (
        <div className="inline-flex items-center gap-1.5 text-xs font-medium">
          Inbox
          <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] text-primary-foreground">
            12
          </span>
        </div>
      );
    case "lightbox":
      return (
        <div className="relative flex h-20 w-full max-w-[180px] items-center justify-center rounded-lg bg-black/70">
          <div className="h-14 w-20 rounded-md bg-gradient-to-br from-sky-300 to-blue-600 shadow-xl" />
          <span className="absolute top-1.5 right-2 text-xs text-white/80">×</span>
        </div>
      );
    case "toast-stack":
      return (
        <div className="flex w-full max-w-[180px] flex-col gap-1.5">
          <div className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-[10px] shadow-md">
            File uploaded
          </div>
          <div className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-[10px] shadow-sm opacity-80">
            Invite sent
          </div>
        </div>
      );
    case "fullscreen-modal":
      return (
        <div className="flex h-20 w-full max-w-[180px] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <div className="flex items-center justify-between border-b border-border px-2 py-1.5 text-[10px] font-semibold">
            Editor
            <span className="text-muted-foreground">×</span>
          </div>
          <div className="flex-1 bg-muted/40 p-2 text-[10px] text-muted-foreground">Full canvas</div>
        </div>
      );
    case "modal-scrim":
      return (
        <div className="relative flex h-20 w-full max-w-[180px] items-center justify-center rounded-lg bg-foreground/50">
          <div className="rounded-md bg-card px-3 py-2 text-[10px] shadow-lg">Dialog</div>
        </div>
      );
    case "calendar-month":
      return (
        <div className="w-full max-w-[180px] rounded-lg border border-border p-2 text-center">
          <p className="mb-1 text-[10px] font-semibold">July 2026</p>
          <div className="grid grid-cols-7 gap-0.5 text-[8px]">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={`dow-${i}`} className="text-muted-foreground">
                {d}
              </span>
            ))}
            {Array.from({ length: 14 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "rounded py-0.5",
                  i === 9 ? "bg-primary font-semibold text-primary-foreground" : "",
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      );
    case "carousel":
      return (
        <div className="w-full max-w-[200px] space-y-1.5">
          <div className="flex gap-2 overflow-hidden">
            <div className="h-14 w-[70%] shrink-0 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600" />
            <div className="h-14 w-[70%] shrink-0 rounded-lg bg-muted" />
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">‹ ›</span>
            <span className="flex gap-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="size-1.5 rounded-full bg-muted-foreground/40" />
              <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            </span>
          </div>
        </div>
      );
    case "price-display":
      return (
        <div className="text-left">
          <p className="text-xl font-bold tracking-tight tabular-nums sm:text-2xl">
            $29<span className="text-sm font-medium text-muted-foreground">/mo</span>
          </p>
          <p className="text-[10px] text-muted-foreground line-through tabular-nums">$39/mo</p>
        </div>
      );
    case "code-snippet":
      return (
        <div className="w-full max-w-[220px] overflow-hidden rounded-lg border border-border bg-zinc-950 text-left">
          <div className="flex items-center justify-between border-b border-white/10 px-2 py-1 text-[9px] text-zinc-400">
            bash
            <Copy className="size-3" />
          </div>
          <pre className="p-2 font-mono text-[10px] text-zinc-100">npm i design-menu</pre>
        </div>
      );
    case "activity-feed":
      return (
        <div className="flex w-full max-w-[220px] gap-2 text-left">
          <Avatar className="size-7">
            <AvatarFallback className="text-[9px]">JM</AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-[11px] leading-snug">
              <span className="font-semibold">Jordan</span> commented on{" "}
              <span className="font-medium">Homepage</span>
            </p>
            <p className="text-[9px] text-muted-foreground">2h ago</p>
          </div>
        </div>
      );
    case "kpi-strip":
      return (
        <div className="flex w-full max-w-[220px] divide-x divide-border rounded-lg border border-border">
          {[
            { l: "Users", v: "2.4k" },
            { l: "NPS", v: "62" },
            { l: "Churn", v: "1.2%" },
          ].map((m) => (
            <div key={m.l} className="flex-1 px-1.5 py-1.5 text-center">
              <p className="text-[9px] text-muted-foreground">{m.l}</p>
              <p className="text-sm font-semibold tabular-nums">{m.v}</p>
            </div>
          ))}
        </div>
      );
    case "backdrop-blur":
      return (
        <div className="relative h-20 w-full max-w-[180px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500" />
          <div className="absolute inset-x-0 top-0 border-b border-white/20 bg-white/30 px-2 py-1.5 text-[10px] font-medium backdrop-blur-md">
            Blurred bar
          </div>
        </div>
      );
    case "surface-levels":
      return (
        <div className="flex items-end gap-2">
          <div className="rounded-md border border-border bg-card px-2 py-3 text-[9px]">0</div>
          <div className="rounded-md bg-card px-2 py-3 text-[9px] shadow-sm">1</div>
          <div className="rounded-md bg-card px-2 py-3 text-[9px] shadow-md">2</div>
          <div className="rounded-md bg-card px-2 py-3 text-[9px] shadow-lg">3</div>
        </div>
      );
    case "tinted-surface":
      return (
        <div className="w-full max-w-[180px] rounded-xl bg-primary/10 px-3 py-3 text-[11px] text-primary ring-1 ring-primary/15">
          Tinted panel
        </div>
      );
    case "well-surface":
      return (
        <div className="inline-flex gap-1 rounded-lg bg-muted p-1">
          <Button size="sm" variant="secondary" className="h-7 text-[10px]">
            All
          </Button>
          <Button size="sm" variant="ghost" className="h-7 text-[10px]">
            Mine
          </Button>
        </div>
      );
    case "illustration-placeholder":
      return (
        <div className="flex h-16 w-full max-w-[160px] items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-950 dark:to-blue-950">
          <div className="flex gap-1">
            <div className="size-6 rounded-full bg-sky-300/80" />
            <div className="mt-2 size-8 rounded-lg bg-blue-400/70" />
          </div>
        </div>
      );
    case "gallery-strip":
      return (
        <div className="flex gap-1.5">
          {["from-sky-400 to-blue-600", "from-amber-300 to-orange-500", "from-emerald-300 to-teal-600"].map(
            (g, i) => (
              <div
                key={g}
                className={cn(
                  "size-10 rounded-md bg-gradient-to-br",
                  g,
                  i === 0 && "ring-2 ring-primary ring-offset-1 ring-offset-background",
                )}
              />
            ),
          )}
        </div>
      );
    case "image-overlay":
      return (
        <div className="relative h-16 w-full max-w-[200px] overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-2 left-2 text-xs font-semibold text-white">Overlay title</p>
        </div>
      );
    case "icon-pair":
      return (
        <div className="flex flex-col gap-2 text-left text-xs">
          <div className="flex items-center gap-2">
            <Home className="size-4 text-primary" />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="size-4 text-primary" />
            <span>Alerts</span>
          </div>
        </div>
      );
    case "read-only":
      return (
        <Input
          readOnly
          defaultValue="read-only@example.com"
          className="max-w-[200px] bg-muted/50"
          aria-label="Email read only"
        />
      );
    case "success-control":
      return (
        <div className="relative w-full max-w-[200px]">
          <Input
            defaultValue="ok@design.menu"
            className="border-emerald-500 pr-8 focus-visible:ring-emerald-500/30"
            readOnly
          />
          <Check className="absolute top-1/2 right-2 size-4 -translate-y-1/2 text-emerald-600" />
        </div>
      );
    case "indeterminate":
      return (
        <div className="flex items-center gap-2 text-xs">
          <div className="flex size-4 items-center justify-center rounded border border-primary bg-primary">
            <div className="h-0.5 w-2 bg-primary-foreground" />
          </div>
          Select all (partial)
        </div>
      );
    case "reduced-motion":
      return (
        <div className="space-y-1 text-center text-[10px]">
          <div className="mx-auto size-8 rounded-full bg-primary/20 ring-2 ring-primary/40" />
          <p className="font-medium">Motion optional</p>
          <p className="text-muted-foreground">Respect reduced-motion</p>
        </div>
      );
    case "visited-link":
      return (
        <div className="space-y-1 text-left text-sm">
          <a href="#a" className="text-primary underline-offset-2 hover:underline">
            Unvisited link
          </a>
          <p>
            <span className="text-violet-700 underline underline-offset-2 dark:text-violet-400">
              Visited link
            </span>
          </p>
        </div>
      );
    case "slop-gradient-text":
      return (
        <p className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-center text-lg font-bold text-transparent">
          Ship faster than ever
        </p>
      );
    case "slop-busy-motion":
      return (
        <div className="flex items-center gap-3">
          <div className="size-8 animate-bounce rounded-full bg-violet-500" />
          <div className="size-8 animate-pulse rounded-lg bg-fuchsia-400" />
          <div className="size-8 animate-spin rounded-md border-2 border-violet-400 border-t-transparent" />
        </div>
      );
    case "slop-ai-badge-spam":
      return (
        <div className="flex flex-wrap justify-center gap-1.5">
          {["✨ AI", "✨ Smart", "✨ Magic", "✨ GPT"].map((b) => (
            <span
              key={b}
              className="rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:text-violet-300"
            >
              {b}
            </span>
          ))}
        </div>
      );
    case "slop-hero-stats-row":
      return (
        <div className="flex gap-4 text-center">
          {[
            ["10x", "faster"],
            ["99%", "happier"],
            ["24/7", "uptime"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="text-lg font-bold text-violet-600">{n}</p>
              <p className="text-[9px] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      );
    case "lib-portal-stacking":
      return (
        <div className="relative h-16 w-full max-w-[180px] overflow-hidden rounded-lg border border-border bg-muted/40 p-2 text-[10px]">
          <p className="text-muted-foreground">Parent clips…</p>
          <div className="absolute top-2 right-2 z-50 rounded-md border border-border bg-card px-2 py-1 shadow-lg">
            Portaled menu
          </div>
        </div>
      );
    case "lib-accessible-names":
      return (
        <div className="flex items-center gap-2">
          <Button size="icon-sm" variant="outline" aria-label="Notifications" className="size-8">
            <Bell className="size-3.5" />
          </Button>
          <span className="text-[10px] text-muted-foreground">aria-label set</span>
        </div>
      );
    case "lib-css-variables":
      return (
        <div className="space-y-1 rounded-lg border border-border bg-card p-2 font-mono text-[9px] text-left">
          <p className="text-primary">--primary</p>
          <p className="text-muted-foreground">--muted-foreground</p>
          <p className="text-destructive">--destructive</p>
        </div>
      );
    case "lib-compose-layout":
      return (
        <div className="flex w-full max-w-[200px] flex-col gap-2 rounded-lg border border-dashed border-border p-2 text-[9px]">
          <div className="rounded bg-muted px-2 py-1">flex flex-col gap-2</div>
          <div className="flex gap-1">
            <div className="flex-1 rounded bg-primary/15 px-1 py-1 text-center">Button</div>
            <div className="flex-1 rounded bg-primary/15 px-1 py-1 text-center">Button</div>
          </div>
        </div>
      );
    case "lib-error-boundaries-ui":
      return (
        <div className="w-full max-w-[180px] space-y-1 rounded-lg border border-border p-3 text-center">
          <p className="text-xs font-semibold">Couldn&apos;t load</p>
          <p className="text-[10px] text-muted-foreground">Try again in a moment.</p>
          <Button size="sm" variant="outline" className="mt-1 h-7 text-[10px]">
            Retry
          </Button>
        </div>
      );

    // ── Second-pass vocabulary demos ───────────────────
    case "small-caps":
      return (
        <p className="text-sm">
          <span className="text-[11px] font-semibold tracking-wide uppercase">API</span>{" "}
          <span className="text-muted-foreground">vs</span>{" "}
          <span style={{ fontVariant: "small-caps" }} className="text-base font-medium tracking-wide">
            Api
          </span>{" "}
          small caps
        </p>
      );
    case "monospace-stack":
      return (
        <p className="font-mono text-xs">
          user_id · <span className="text-primary">a1b2c3</span>
        </p>
      );
    case "responsive-type":
      return (
        <div className="space-y-1 text-left">
          <p className="text-base font-semibold sm:text-lg">Scales up</p>
          <p className="text-[10px] text-muted-foreground">text-base → sm:text-lg</p>
        </div>
      );
    case "brand-scale":
      return (
        <div className="flex gap-1">
          {["bg-primary/15", "bg-primary/30", "bg-primary/50", "bg-primary/75", "bg-primary"].map(
            (c, i) => (
              <div key={c} className={`size-7 rounded-md ${c}`} title={`step ${i + 1}`} />
            ),
          )}
        </div>
      );
    case "disabled-colors":
      return (
        <div className="flex gap-2">
          <div className="rounded-md bg-muted px-3 py-1.5 text-xs text-muted-foreground/60">
            Disabled fill
          </div>
          <div className="rounded-md border border-border/50 px-3 py-1.5 text-xs text-muted-foreground/50">
            Disabled text
          </div>
        </div>
      );
    case "safe-area":
      return (
        <div className="relative h-16 w-full max-w-[160px] overflow-hidden rounded-xl border border-border bg-card">
          <div className="absolute inset-x-0 bottom-0 border-t border-border bg-muted/80 px-2 pb-2 pt-1 text-center text-[9px]">
            <span className="text-muted-foreground">safe-area</span>
            <div className="mx-auto mt-1 h-1 w-10 rounded-full bg-foreground/30" />
          </div>
        </div>
      );
    case "masonry-hint":
      return (
        <div className="grid w-full max-w-[180px] grid-cols-2 gap-1.5">
          <div className="h-10 rounded-md bg-muted" />
          <div className="h-14 rounded-md bg-muted" />
          <div className="h-14 rounded-md bg-muted" />
          <div className="h-10 rounded-md bg-muted" />
        </div>
      );
    case "sticky-footer":
      return (
        <div className="flex h-20 w-full max-w-[180px] flex-col overflow-hidden rounded-lg border border-border">
          <div className="flex-1 bg-muted/40 p-2 text-[9px] text-muted-foreground">Content…</div>
          <div className="flex justify-end gap-1 border-t border-border bg-card p-1.5">
            <Button size="sm" variant="ghost" className="h-6 text-[9px]">
              Cancel
            </Button>
            <Button size="sm" className="h-6 text-[9px]">
              Save
            </Button>
          </div>
        </div>
      );
    case "pill-button":
      return <Button className="rounded-full px-5">Get started</Button>;
    case "button-block":
      return (
        <Button className="w-full max-w-[180px]">Continue</Button>
      );
    case "phone-input":
      return (
        <div className="flex w-full max-w-[200px] overflow-hidden rounded-md border border-border">
          <span className="border-r border-border bg-muted px-2 py-2 text-[11px] text-muted-foreground">
            +1
          </span>
          <Input
            type="tel"
            defaultValue="(555) 010-2000"
            className="border-0 focus-visible:ring-0"
            readOnly
            aria-label="Phone"
          />
        </div>
      );
    case "color-input":
      return (
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md border border-border bg-sky-500 shadow-sm" />
          <Input defaultValue="#0ea5e9" className="h-8 w-24 font-mono text-xs" readOnly />
        </div>
      );
    case "checkbox-group":
      return (
        <div className="space-y-2 text-left text-xs">
          {["Email", "SMS", "Push"].map((l, i) => (
            <label key={l} className="flex items-center gap-2">
              <Checkbox defaultChecked={i < 2} />
              {l}
            </label>
          ))}
        </div>
      );
    case "inline-label-field":
      return (
        <div className="flex w-full max-w-[220px] items-center justify-between gap-3 text-left text-xs">
          <Label className="text-muted-foreground">Notifications</Label>
          <Switch defaultChecked />
        </div>
      );
    case "tree-nav":
      return (
        <nav className="w-full max-w-[150px] space-y-0.5 text-left font-mono text-[11px]">
          <div className="font-medium">▾ Product</div>
          <div className="rounded bg-accent px-2 py-0.5 pl-4 font-sans">Overview</div>
          <div className="px-2 py-0.5 pl-4 font-sans text-muted-foreground">Pricing</div>
          <div className="font-medium text-muted-foreground">▸ Docs</div>
        </nav>
      );
    case "utility-nav":
      return (
        <div className="flex gap-3 text-[10px] text-muted-foreground">
          <span>Status</span>
          <span>Docs</span>
          <span className="text-foreground">Account</span>
        </div>
      );
    case "tab-underline":
      return (
        <div className="flex gap-4 border-b border-border text-xs">
          <span className="border-b-2 border-primary pb-1.5 font-medium">Overview</span>
          <span className="pb-1.5 text-muted-foreground">Activity</span>
          <span className="pb-1.5 text-muted-foreground">Settings</span>
        </div>
      );
    case "top-progress":
      return (
        <div className="relative h-12 w-full max-w-[200px] overflow-hidden rounded-lg border border-border bg-muted/30">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-primary">
            <div className="h-full w-2/3 bg-primary shadow-[0_0_8px] shadow-primary" />
          </div>
          <p className="p-3 text-[10px] text-muted-foreground">Page loading…</p>
        </div>
      );
    case "snackbar-action":
      return (
        <div className="flex w-full max-w-[220px] items-center justify-between gap-2 rounded-lg bg-foreground px-3 py-2 text-[11px] text-background shadow-lg">
          <span>Item deleted</span>
          <button type="button" className="font-semibold text-primary">
            Undo
          </button>
        </div>
      );
    case "validation-summary":
      return (
        <div className="w-full max-w-[220px] rounded-lg border border-destructive/40 bg-destructive/5 p-2.5 text-left text-[11px]">
          <p className="font-semibold text-destructive">Fix 2 errors</p>
          <ul className="mt-1 list-disc space-y-0.5 pl-4 text-destructive/90">
            <li>Email is required</li>
            <li>Password too short</li>
          </ul>
        </div>
      );
    case "coach-mark":
      return (
        <div className="flex w-full max-w-[200px] flex-col gap-2 rounded-lg bg-muted/50 p-2">
          <div className="flex justify-start">
            <Button
              size="sm"
              className="h-7 ring-2 ring-primary ring-offset-1 ring-offset-background"
            >
              Share
            </Button>
          </div>
          <div className="rounded-lg border border-border bg-card p-2 text-left text-[10px] shadow-md">
            <p className="font-semibold">Share with your team</p>
            <p className="mt-0.5 text-muted-foreground">Invite people from here.</p>
          </div>
        </div>
      );
    case "side-drawer":
      return (
        <div className="flex h-20 w-full max-w-[220px] overflow-hidden rounded-lg border border-border">
          <div className="flex-1 bg-muted/30 p-2 text-[9px] text-muted-foreground">List</div>
          <div className="w-[55%] border-l border-border bg-card p-2 text-left shadow-lg">
            <p className="text-[10px] font-semibold">Record</p>
            <p className="text-[9px] text-muted-foreground">Detail panel</p>
          </div>
        </div>
      );
    case "rating-stars":
      return (
        <div className="flex items-center gap-1 text-amber-500" aria-label="4 out of 5 stars">
          {"★★★★☆".split("").map((s, i) => (
            <span key={i} className="text-sm leading-none">
              {s}
            </span>
          ))}
          <span className="ml-1 text-[11px] text-muted-foreground">4.0</span>
        </div>
      );
    case "comparison-table":
      return (
        <table className="w-full max-w-[220px] text-left text-[10px]">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="py-1 font-medium">Feature</th>
              <th className="py-1 font-medium">Free</th>
              <th className="py-1 font-medium">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/60">
              <td className="py-1">Projects</td>
              <td>3</td>
              <td className="font-semibold text-primary">∞</td>
            </tr>
            <tr>
              <td className="py-1">SSO</td>
              <td className="text-muted-foreground">—</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      );
    case "sortable-header":
      return (
        <div className="flex w-full max-w-[200px] items-center gap-1 border-b border-border pb-1 text-left text-[11px] font-medium">
          Name
          <span className="text-primary" aria-hidden>
            ↑
          </span>
          <span className="ml-auto text-[9px] font-normal text-muted-foreground">sorted</span>
        </div>
      );
    case "sparkline":
      return (
        <div className="flex items-end gap-2">
          <svg viewBox="0 0 80 28" className="h-8 w-20 text-primary" aria-hidden>
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              points="0,22 12,18 24,20 36,10 48,14 60,6 80,8"
            />
          </svg>
          <span className="text-xs font-semibold text-emerald-600">+12%</span>
        </div>
      );
    case "inner-border":
      return (
        <div className="rounded-xl bg-card px-4 py-3 text-xs shadow-[inset_0_0_0_1px_var(--border)]">
          Inset border
        </div>
      );
    case "layered-shadow":
      return (
        <div className="rounded-xl bg-card px-4 py-3 text-xs shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)]">
          Layered depth
        </div>
      );
    case "avatar-status":
      return (
        <div className="relative inline-flex">
          <Avatar className="size-10">
            <AvatarFallback>RK</AvatarFallback>
          </Avatar>
          <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-background bg-emerald-500" />
        </div>
      );
    case "favicon-set":
      return (
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-[10px] font-bold text-background">
            DM
          </div>
          <span className="text-[11px] text-muted-foreground">16–32px mark</span>
        </div>
      );
    case "aspect-media-fit":
      return (
        <div className="flex gap-2">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-muted">
            <div className="h-16 w-8 bg-gradient-to-b from-sky-400 to-blue-600" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
            <div className="h-8 w-5 rounded-sm bg-gradient-to-b from-sky-400 to-blue-600" />
          </div>
        </div>
      );
    case "offline-state":
      return (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-[11px]">
          <span className="size-2 rounded-full bg-muted-foreground" />
          You&apos;re offline
        </div>
      );
    case "empty-zero":
      return (
        <div className="grid w-full max-w-[220px] grid-cols-2 gap-2 text-[9px]">
          <div className="rounded-lg border border-dashed border-border p-2 text-center">
            <p className="font-semibold">First run</p>
            <p className="text-muted-foreground">Create project</p>
          </div>
          <div className="rounded-lg border border-border p-2 text-center">
            <p className="font-semibold">No results</p>
            <p className="text-muted-foreground">Clear filters</p>
          </div>
        </div>
      );
    case "stale-data":
      return (
        <div className="flex items-center gap-2 text-[11px]">
          <span className="font-semibold tabular-nums">1,284</span>
          <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[9px] text-amber-800 dark:text-amber-200">
            5m ago
          </span>
        </div>
      );
    case "slop-confetti-success":
      return (
        <div className="relative flex h-16 w-full max-w-[180px] items-center justify-center overflow-hidden rounded-lg border border-violet-300 bg-violet-50 dark:bg-violet-950/40">
          <span className="absolute top-1 left-2 text-sm">🎊</span>
          <span className="absolute top-2 right-4 text-sm">✨</span>
          <span className="absolute bottom-2 left-6 text-sm">🎉</span>
          <span className="text-[11px] font-medium text-violet-700 dark:text-violet-300">
            Saved draft!!
          </span>
        </div>
      );
    case "slop-typewriter-hero":
      return (
        <p className="text-center text-sm font-semibold">
          We help you{" "}
          <span className="text-violet-600">
            synergize<span className="animate-pulse">|</span>
          </span>
        </p>
      );
    case "lib-keyboard-nav":
      return (
        <div className="rounded-lg border border-border p-2 text-left text-[10px]">
          <p className="font-medium">Menu · arrow keys</p>
          <p className="mt-1 text-muted-foreground">↑↓ move · Enter select · Esc close</p>
        </div>
      );
    case "lib-focus-visible":
      return (
        <div className="flex gap-2">
          <Button size="sm" className="ring-2 ring-ring ring-offset-2">
            Keyboard
          </Button>
          <Button size="sm" variant="outline">
            Mouse
          </Button>
        </div>
      );
    case "lib-toast-region":
      return (
        <div
          role="status"
          aria-live="polite"
          className="rounded-lg border border-border bg-card px-3 py-2 text-[11px] shadow-md"
        >
          Changes saved
        </div>
      );
    default:
      return (
        <div className="text-xs text-muted-foreground">
          Example: <code className="font-mono">{exampleKey}</code>
        </div>
      );
  }
}
