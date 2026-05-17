const HIGH_SCORE_KEY = 'pulse-grid:high-score';
const SETTINGS_KEY = 'pulse-grid:settings';

const canUseStorage = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export function readNumber(key: string, fallback: number): number {
  if (!canUseStorage()) return fallback;

  const value = window.localStorage.getItem(key);
  const parsed = value === null ? Number.NaN : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function writeNumber(key: string, value: number) {
  if (canUseStorage()) {
    window.localStorage.setItem(key, String(value));
  }
}

export function readJson<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;

  const value = window.localStorage.getItem(key);
  if (!value) return fallback;

  try {
    return { ...fallback, ...JSON.parse(value) };
  } catch {
    return fallback;
  }
}

export function writeJson<T>(key: string, value: T) {
  if (canUseStorage()) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export const storageKeys = {
  highScore: HIGH_SCORE_KEY,
  settings: SETTINGS_KEY,
};
