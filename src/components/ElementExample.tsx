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
        <p className="text-2xl font-bold tracking-tight sm:text-3xl">
          Build something beautiful.
        </p>
      );
    case "page-title":
      return <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Settings</h2>;
    case "section-heading":
      return (
        <div className="space-y-1 text-left">
          <h3 className="text-lg font-semibold">Account details</h3>
          <h4 className="text-sm font-medium text-muted-foreground">Profile</h4>
        </div>
      );
    case "body-text":
      return (
        <p className="max-w-[18rem] text-left text-sm leading-relaxed">
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
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            New feature
          </p>
          <p className="mt-1 text-lg font-semibold">Ship faster with menus</p>
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
        <div className="flex w-full max-w-[240px] flex-col items-center gap-1 rounded-xl border-2 border-dashed border-border px-4 py-5 text-center">
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
        <Alert className="max-w-[280px]">
          <AlertTitle>Scheduled maintenance</AlertTitle>
          <AlertDescription>Brief downtime tonight at 2am UTC.</AlertDescription>
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
        <Table className="w-full max-w-[260px] text-xs">
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
            <p className="text-2xl font-bold tracking-tight">$48.2k</p>
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

    // ── Creative ──────────────────────────────────────────
    case "dither":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-gradient-to-r from-teal-700 to-amber-500">
          <div className="dm-dither absolute inset-0 text-black/50 mix-blend-overlay" />
          <div className="relative flex h-full items-end p-3">
            <span className="text-xs font-semibold text-white drop-shadow">Dither overlay</span>
          </div>
        </div>
      );
    case "noise-grain":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-zinc-800">
          <div className="dm-noise absolute inset-0 opacity-40 mix-blend-overlay" />
          <div className="relative flex h-full items-center justify-center text-xs font-medium text-zinc-200">
            Film grain
          </div>
        </div>
      );
    case "scanlines":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-emerald-950 text-emerald-300">
          <div className="dm-scanlines absolute inset-0" />
          <div className="relative flex h-full items-center justify-center font-mono text-xs">
            &gt; system ready_
          </div>
        </div>
      );
    case "halftone":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-amber-100 dark:bg-amber-950">
          <div className="dm-halftone absolute inset-0 text-rose-600/70 dark:text-rose-400/50" />
          <div className="relative flex h-full items-center justify-center text-xs font-bold text-rose-900 dark:text-rose-100">
            Halftone
          </div>
        </div>
      );
    case "glitch":
      return (
        <p className="dm-glitch text-2xl font-black tracking-tight">
          GLITCH
        </p>
      );
    case "mesh-gradient":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
          <div className="absolute -top-4 -left-4 size-24 rounded-full bg-teal-400/55 blur-2xl" />
          <div className="absolute -right-2 bottom-0 size-20 rounded-full bg-sky-400/50 blur-2xl" />
          <div className="absolute top-6 left-10 size-16 rounded-full bg-amber-300/40 blur-xl" />
          <div className="relative flex h-full items-center justify-center text-xs font-medium">
            Mesh / aurora
          </div>
        </div>
      );
    case "duotone":
      return (
        <div
          className="h-20 w-full max-w-[180px] rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0f3d3e 0%, #0f3d3e 42%, #e8a54b 100%)",
          }}
        >
          <div className="flex h-full items-end p-2">
            <span className="rounded bg-black/30 px-1.5 py-0.5 text-[10px] font-medium text-white">
              Duotone
            </span>
          </div>
        </div>
      );
    case "marquee":
      return (
        <div className="w-full max-w-[240px] overflow-hidden rounded-lg border border-border bg-card py-2">
          <div className="dm-marquee-track flex w-max gap-6 text-xs font-medium whitespace-nowrap">
            <span>Design Menu</span>
            <span>·</span>
            <span>Name it</span>
            <span>·</span>
            <span>See it</span>
            <span>·</span>
            <span>Prompt it</span>
            <span>·</span>
            <span>Design Menu</span>
            <span>·</span>
            <span>Name it</span>
            <span>·</span>
            <span>See it</span>
            <span>·</span>
            <span>Prompt it</span>
          </div>
        </div>
      );
    case "pixel-art":
      return (
        <div
          className="flex size-16 items-center justify-center border-4 border-foreground bg-primary text-xs font-bold text-primary-foreground"
          style={{ imageRendering: "pixelated", boxShadow: "4px 4px 0 0 currentColor" }}
        >
          PX
        </div>
      );
    case "blob-shape":
      return (
        <div
          className="flex size-20 items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 text-xs font-semibold text-white"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        >
          Blob
        </div>
      );
    case "kinetic-type":
      return (
        <p className="text-xl font-black tracking-tight sm:text-2xl">
          {"MOTION".split("").map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="dm-kinetic-char"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              {ch}
            </span>
          ))}
        </p>
      );
    case "bento-grid":
      return (
        <div className="grid w-full max-w-[220px] grid-cols-3 grid-rows-2 gap-1.5">
          <div className="col-span-2 row-span-2 rounded-lg bg-primary/90 p-2 text-[10px] font-semibold text-primary-foreground">
            Hero
          </div>
          <div className="rounded-lg bg-muted p-1.5 text-[9px] font-medium">A</div>
          <div className="rounded-lg bg-accent p-1.5 text-[9px] font-medium text-accent-foreground">
            B
          </div>
        </div>
      );
    case "paper-texture":
      return (
        <div className="dm-paper relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl border border-stone-300/60 dark:border-stone-700">
          <div className="relative flex h-full flex-col justify-end p-3">
            <p className="font-serif text-sm font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              On paper
            </p>
            <p className="text-[10px] text-stone-600 dark:text-stone-400">
              Fiber · ink · margin
            </p>
          </div>
        </div>
      );
    case "editorial-type":
      return (
        <div className="w-full max-w-[220px] space-y-1 border-l-2 border-foreground pl-3">
          <p className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Vol. 04
          </p>
          <p className="font-serif text-3xl leading-none font-bold tracking-tight">
            Quiet
          </p>
          <p className="max-w-[16ch] text-[10px] leading-snug text-muted-foreground">
            Oversized display against a whisper of body copy.
          </p>
        </div>
      );
    case "vignette":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-gradient-to-br from-stone-300 via-teal-700 to-stone-900">
          <div className="dm-vignette absolute inset-0" />
          <div className="relative flex h-full items-center justify-center text-xs font-semibold text-white drop-shadow">
            Focal subject
          </div>
        </div>
      );
    case "risograph":
      return (
        <div className="relative h-20 w-full max-w-[200px] overflow-hidden rounded-xl bg-[#f7f2e8] dark:bg-stone-900">
          <div className="dm-risograph absolute top-3 left-4 size-14 rounded-full bg-rose-500/70" />
          <div className="dm-risograph absolute top-5 left-8 size-14 rounded-full bg-teal-600/70" />
          <div className="relative flex h-full items-end p-2">
            <span className="text-[10px] font-bold tracking-wide text-stone-800 uppercase dark:text-stone-200">
              Riso
            </span>
          </div>
        </div>
      );
    case "letterpress":
      return (
        <div className="dm-paper flex h-20 w-full max-w-[200px] items-center justify-center rounded-xl border border-stone-300/50 dark:border-stone-700">
          <span className="dm-letterpress text-2xl font-black tracking-tight text-stone-700 dark:text-stone-300">
            PRESS
          </span>
        </div>
      );
    case "swiss-grid":
      return (
        <div className="grid w-full max-w-[220px] grid-cols-4 gap-0 border border-foreground/80">
          <div className="col-span-1 border-r border-foreground/80 p-1.5">
            <div className="h-full min-h-12 border border-dashed border-foreground/30" />
          </div>
          <div className="col-span-3 space-y-1 p-2">
            <p className="text-[9px] font-medium tracking-widest uppercase">Grid 12</p>
            <p className="text-sm font-bold tracking-tight">Helvetic</p>
            <div className="h-px bg-foreground/80" />
            <p className="text-[9px] leading-snug text-muted-foreground">
              Modules · rules · asymmetry
            </p>
          </div>
        </div>
      );
    case "specular-chrome":
      return (
        <div className="relative h-16 w-full max-w-[200px] overflow-hidden rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-500 to-zinc-800 shadow-md">
          <div className="dm-specular absolute inset-0" />
          <div className="relative flex h-full items-center justify-center text-xs font-semibold tracking-wide text-white/90">
            Specular
          </div>
        </div>
      );
    case "ink-wash":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl bg-stone-50 dark:bg-stone-950">
          <div className="absolute -top-2 left-2 size-24 rounded-full bg-teal-700/25 blur-2xl" />
          <div className="absolute right-0 bottom-0 size-20 rounded-full bg-stone-800/20 blur-2xl dark:bg-stone-200/15" />
          <div className="absolute top-8 left-12 size-14 rounded-full bg-amber-800/15 blur-xl" />
          <div className="relative flex h-full items-center justify-center text-xs font-medium tracking-wide">
            Ink wash
          </div>
        </div>
      );
    case "crosshatch":
      return (
        <div className="relative h-20 w-full max-w-[220px] overflow-hidden rounded-xl border border-border bg-card">
          <div className="dm-crosshatch absolute inset-0 text-foreground/15" />
          <div className="relative flex h-full items-center justify-center text-xs font-semibold">
            Crosshatch
          </div>
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

    default:
      return (
        <div className="text-xs text-muted-foreground">
          Example: <code className="font-mono">{exampleKey}</code>
        </div>
      );
  }
}
