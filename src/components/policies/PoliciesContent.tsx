import { usePolicies } from '../../hooks/usePolicies';
import EmptyState from './EmptyState';
import LoadingState from './LoadingState';
import Pagination from './Pagination';
import PolicyList from './PolicyList';

export default function PoliciesContent() {
  const { loading, activePolicies } = usePolicies();

  if (loading) return <LoadingState />;
  if (activePolicies.length === 0) return <EmptyState />;

  return (
    <>
      <PolicyList />
      <Pagination />
    </>
  );
}
