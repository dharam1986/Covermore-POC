import type { ReactNode } from 'react';

type ActionButtonProps = {
  variant: 'claim' | 'manage';
  children: ReactNode;
};

export default function ActionButton({ variant, children }: ActionButtonProps) {
  const buttonStyle =
    variant === 'claim'
      ? 'bg-[#ffe49a] text-[#0647ff] hover:bg-[#ffdd7a]'
      : 'bg-white text-[#0647ff] hover:bg-[#f8faff]';

  return (
    <button
      type="button"
      className={`${buttonStyle} h-11 w-[168px] rounded-full border-2 border-[#0647ff] text-sm font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0647ff]/25 focus-visible:ring-offset-2`}
    >
      {children}
    </button>
  );
}
