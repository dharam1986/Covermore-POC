import { usePolicyCard } from '../../hooks/usePolicyCard';
import {
  getDateLabel,
  getDateValue,
  getDestination,
  getPlanLabel,
} from '../../utils/policy.utils';
import ActionButton from './ActionButton';
import PolicyLink from './PolicyLink';

export default function PolicyCard() {
  const policy = usePolicyCard();
  const isAnnual = policy.type === 'Annual';

  return (
    <article className="rounded-2xl bg-white px-7 py-7 shadow-sm sm:px-8 lg:px-9">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <h2 className="text-[25px] leading-none tracking-[-0.02em] text-neutral-900">
            <span className="font-extrabold text-[#0647ff]">
              Policy number:
            </span>{' '}
            <span className="font-normal">{policy.policyNumber}</span>
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1px_1fr] md:items-start">
            <dl className="space-y-3 text-[15px] leading-5 text-neutral-900">
              <div>
                <dt className="inline font-extrabold">Destination: </dt>
                <dd className="inline">{getDestination(policy)}</dd>
              </div>

              <div>
                <dt className="inline font-extrabold">
                  {getDateLabel(policy)}:{' '}
                </dt>
                <dd className="inline">{getDateValue(policy)}</dd>
              </div>

              {isAnnual && (
                <div>
                  <dt className="inline font-extrabold">
                    Maximum trip duration:{' '}
                  </dt>
                  <dd className="inline">
                    Up to {policy.maxTripDuration} days
                  </dd>
                </div>
              )}
            </dl>

            <div
              className="hidden h-full w-px bg-neutral-200 md:block"
              aria-hidden="true"
            />

            <dl className="space-y-3 text-[15px] leading-5 text-neutral-900">
              <div>
                <dt className="inline font-extrabold">Plan: </dt>
                <dd className="inline">{getPlanLabel(policy)}</dd>
              </div>

              <div>
                <dt className="inline font-extrabold">Excess: </dt>
                <dd className="inline">${policy.excess}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <PolicyLink href={`/pds/${policy.policyNumber}`}>View PDS</PolicyLink>

            <PolicyLink href={`/certificate/${policy.policyNumber}`}>
              Certificate of Insurance
            </PolicyLink>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-4 lg:items-end">
          <ActionButton variant="claim">Make a claim</ActionButton>
          <ActionButton variant="manage">Manage my policy</ActionButton>
        </div>
      </div>
    </article>
  );
}
