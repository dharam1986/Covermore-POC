import PoliciesContent from '../components/policies/PoliciesContent';
import { PoliciesProvider } from '../contexts/PoliciesContext';

export default function PoliciesPage() {
  return (
    <PoliciesProvider>
      <main className="min-h-screen bg-[#eeeeee] px-5 py-10 font-sans text-neutral-950 sm:px-8 lg:px-12">
        <section
          className="mx-auto max-w-[1015px]"
          aria-labelledby="my-policies-title"
        >
          <h1 id="my-policies-title" className="sr-only">
            My Policies
          </h1>

          <PoliciesContent />
        </section>
      </main>
    </PoliciesProvider>
  );
}
