import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blackout Ops — Browser FPS with Guns, Melee & Enemies" },
      {
        name: "description",
        content:
          "Blackout Ops is a 3D first-person shooter you play in your browser: pistol, rifle, shotgun, combat knife, and waves of enemy soldiers.",
      },
      { property: "og:title", content: "Blackout Ops — Browser FPS" },
      {
        property: "og:description",
        content:
          "Fight through waves of hostiles in a 3D compound. Four weapons, melee takedowns, and full mouse-look controls.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background">
      <h1 className="sr-only">Blackout Ops — 3D browser first-person shooter</h1>
      <iframe
        src="/game.html"
        title="Blackout Ops FPS game"
        className="h-full w-full border-0"
        allow="pointer-lock; fullscreen"
      />
    </main>
  );
}
