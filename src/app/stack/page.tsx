import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { StackPageContent } from "@/components/StackPageContent";

export const metadata: Metadata = {
  title: "Tech Stack — John Pritch L. Arcas",
  description:
    "The tools, frameworks, and platforms I reach for — across the front end, back end, databases, mobile, and game development.",
};

export default function StackPage() {
  return (
    <AppShell>
      <StackPageContent />
    </AppShell>
  );
}
