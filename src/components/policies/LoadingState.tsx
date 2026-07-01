export default function LoadingState() {
  return (
    <div
      className="space-y-7"
      aria-live="polite"
      aria-label="Loading active policies"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="h-[184px] animate-pulse rounded-2xl bg-white"
        />
      ))}
    </div>
  );
}
