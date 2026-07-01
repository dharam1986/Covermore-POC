export default function EmptyState() {
  return (
    <div
      className="rounded-2xl bg-white p-8 text-center shadow-sm"
      role="status"
    >
      <h2 className="text-xl font-bold text-neutral-900">
        No active policies found
      </h2>
      <p className="mt-2 text-sm text-neutral-600">
        Only currently active policies are shown on this page.
      </p>
    </div>
  );
}
