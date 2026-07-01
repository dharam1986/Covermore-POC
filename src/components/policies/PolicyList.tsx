import { PolicyCardContext } from '../../contexts/PolicyCardContext';
import { usePolicies } from '../../hooks/usePolicies';
import PolicyCard from './PolicyCard';

export default function PolicyList() {
  const { visiblePolicies } = usePolicies();

  return (
    <div className="space-y-7">
      {visiblePolicies.map((policy) => (
        <PolicyCardContext.Provider key={policy.policyNumber} value={policy}>
          <PolicyCard />
        </PolicyCardContext.Provider>
      ))}
    </div>
  );
}
