import { createContext } from 'react';
import type { Policy } from '../types/policy.types';

export const PolicyCardContext = createContext<Policy | null>(null);
