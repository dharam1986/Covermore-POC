import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

type PolicyLinkProps = {
  children: ReactNode;
  href: string;
};

export default function PolicyLink({ children, href }: PolicyLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-xs font-medium text-[#222222] underline underline-offset-2 transition hover:text-[#0647ff] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#0647ff] focus-visible:ring-offset-2"
    >
      <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
      {children}
    </a>
  );
}
