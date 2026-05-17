import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useAppState } from '../hooks/useAppState';
import type { AppBridge } from '../types/domain';

declare global {
  interface Window {
    app?: AppBridge;
  }

  var app: AppBridge | undefined;
}

const AppContext = createContext<AppBridge | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const bridge = useAppState();

  useEffect(() => {
    globalThis.app = bridge;
    window.app = bridge;
  }, [bridge]);

  return <AppContext.Provider value={bridge}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return value;
}
