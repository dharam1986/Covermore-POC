import { useContext } from 'react';
import { PolicyCardContext } from '../contexts/PolicyCardContext';

export function usePolicyCard() {
  const context = useContext(PolicyCardContext);

  if (!context) {
    throw new Error(
      'usePolicyCard must be used inside PolicyCardContext.Provider'
    );
  }

  return context;
}
