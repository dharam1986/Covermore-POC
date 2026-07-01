import type { Policy } from '../types/policy.types';

export function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

export function getDestination(policy: Policy) {
  return policy.destinations.map((destination) => destination.name).join(', ');
}

export function getPlanLabel(policy: Policy) {
  if (policy.type === 'Annual') return 'Annual Multi-trip';
  if (policy.planName.toLowerCase() === 'domestic') return 'Domestic';

  return `International ${policy.planName.toLowerCase()}`;
}

export function getDateLabel(policy: Policy) {
  return policy.type === 'Annual' ? 'Policy start date' : 'Travel date';
}

export function getDateValue(policy: Policy) {
  if (policy.type === 'Annual') {
    return formatDate(policy.policyStart);
  }

  return `${formatDate(policy.policyStart)} - ${formatDate(policy.policyEnd)}`;
}
