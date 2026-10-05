import type { HTMLAttributes, ReactNode } from "react";

export function Container({ children, className = "", ...rest }: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-full max-w-[1408px] px-4 sm:px-6 ${className}`} {...rest}>
      {children}
    </div>
  );
}
