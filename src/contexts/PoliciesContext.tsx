import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { PAGE_SIZE } from '../constants/pagination.constants';
import { fetchPoliciesForUser } from '../services/policies.service';
import type { PoliciesContextValue, Policy } from '../types/policy.types';

export const PoliciesContext = createContext<PoliciesContextValue | null>(null);

type PoliciesProviderProps = {
  children: ReactNode;
};

export function PoliciesProvider({ children }: PoliciesProviderProps) {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let ignore = false;

    async function loadPolicies() {
      try {
        const response = await fetchPoliciesForUser();

        if (!ignore) {
          setPolicies(response);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadPolicies();

    return () => {
      ignore = true;
    };
  }, []);

  const activePolicies = useMemo(() => {
    return policies
      .filter((policy) => policy.status === 'Active')
      .sort(
        (a, b) =>
          new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime()
      );
  }, [policies]);

  const totalPages = Math.ceil(activePolicies.length / PAGE_SIZE);

  const visiblePolicies = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return activePolicies.slice(start, start + PAGE_SIZE);
  }, [activePolicies, page]);

  useEffect(() => {
    if (totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const value = useMemo(
    () => ({
      loading,
      page,
      totalPages,
      activePolicies,
      visiblePolicies,
      setPage,
    }),
    [activePolicies, loading, page, totalPages, visiblePolicies]
  );

  return (
    <PoliciesContext.Provider value={value}>{children}</PoliciesContext.Provider>
  );
}
