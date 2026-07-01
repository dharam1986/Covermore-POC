import { useContext } from 'react';
import { PoliciesContext } from '../contexts/PoliciesContext';

export function usePolicies() {
  const context = useContext(PoliciesContext);

  if (!context) {
    throw new Error('usePolicies must be used inside PoliciesProvider');
  }

  return context;
}
