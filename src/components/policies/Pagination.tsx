import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePolicies } from '../../hooks/usePolicies';

export default function Pagination() {
  const { page, totalPages, setPage } = usePolicies();

  if (totalPages <= 1) return null;

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-4"
      aria-label="Policies pagination"
    >
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="rounded-full p-2 text-neutral-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0647ff]/25"
        aria-label="Previous page"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5 stroke-[3]" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => {
          const isCurrent = pageNumber === page;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => setPage(pageNumber)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`h-7 w-7 rounded-full border text-xs font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0647ff]/25 ${
                isCurrent
                  ? 'border-[#0647ff] bg-[#0647ff] text-white'
                  : 'border-neutral-500 bg-white text-neutral-900 hover:border-[#0647ff] hover:text-[#0647ff]'
              }`}
            >
              {pageNumber}
            </button>
          );
        }
      )}

      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded-full p-2 text-neutral-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0647ff]/25"
        aria-label="Next page"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5 stroke-[3]" />
      </button>
    </nav>
  );
}
