"use client";

import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

type CurtainState = "hidden" | "covering" | "receding";

interface TransitionContextValue {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

export function useTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [curtainState, setCurtainState] = useState<CurtainState>("hidden");
  const pendingHref = useRef<string | null>(null);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      if (curtainState === "covering" || curtainState === "hidden") {
        setCurtainState("receding");
        setTimeout(() => setCurtainState("hidden"), 1200);
      }
      prevPath.current = pathname;
    }
  }, [pathname, curtainState]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname) return;
      pendingHref.current = href;
      setCurtainState("covering");
    },
    [pathname]
  );

  useEffect(() => {
    if (curtainState === "covering" && pendingHref.current) {
      const timer = setTimeout(() => {
        router.push(pendingHref.current!);
        pendingHref.current = null;
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [curtainState, router]);

  const curtainStyle =
    curtainState === "hidden"
      ? { transform: "translateY(100%)" }
      : curtainState === "covering"
        ? { transform: "translateY(0%)" }
        : { transform: "translateY(-100%)" };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        className="pointer-events-none fixed inset-0 z-50 bg-[#F0EBE1]"
        style={{
          ...curtainStyle,
          transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />
    </TransitionContext.Provider>
  );
}
