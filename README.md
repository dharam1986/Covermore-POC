# My Policies App

A Vite + React + TypeScript + Tailwind CSS project generated from the provided single-file React component.

## Folder Structure

```txt
src/
├── components/policies/
├── constants/
├── contexts/
├── data/
├── hooks/
├── pages/
├── services/
├── styles/
├── types/
└── utils/
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Mock policy data is available in `src/data/mockPolicies.ts`.
- API-like fetching logic is isolated in `src/services/policies.service.ts`.
- State management is handled using React Context in `src/contexts/PoliciesContext.tsx`.
- UI components are split into reusable files under `src/components/policies`.
