export type Destination = {
  code: string;
  name: string;
};

export type PolicyStatus = 'Active' | 'Expired';

export type PolicyType = 'Single Trip' | 'Annual';

export type Policy = {
  policyNumber: string;
  policyStart: string;
  policyEnd: string;
  primaryTravellerFirstname: string;
  primaryTravellerLastName: string;
  primaryTravellerPhoneNumber: string;
  status: PolicyStatus;
  destinations: Destination[];
  alphaCode: string;
  iSO3CountryOfResidence: string;
  underwriterCode: string;
  groupCode: string;
  type: PolicyType;
  excess: number;
  maxTripDuration: number;
  planName: string;
};

export type PoliciesContextValue = {
  loading: boolean;
  page: number;
  totalPages: number;
  activePolicies: Policy[];
  visiblePolicies: Policy[];
  setPage: (page: number) => void;
};
