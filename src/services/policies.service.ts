import { mockPolicies } from '../data/mockPolicies';
import type { Policy } from '../types/policy.types';

export function fetchPoliciesForUser(): Promise<Policy[]> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(mockPolicies), 350);
  });
}
