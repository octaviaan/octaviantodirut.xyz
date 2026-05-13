import { UiButton } from "@/components/ui-button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
      <p className="text-xs uppercase text-(--accent)">404</p>
      <div className="space-y-4">
        <h1 className="font-display text-5xl text-(--text)">Page not found.</h1>
        <p className="max-w-xl text-lg leading-8 text-(--muted)">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <UiButton href="/" variant="primary">
        Return home
      </UiButton>
    </div>
  );
}
