import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// Mock IntersectionObserver
class IntersectionObserverMock {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

// Mock ResizeObserver
class ResizeObserverMock {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserverMock,
});

// Mock Recharts ResponsiveContainer
vi.mock('recharts', async () => {
  const originalModule = await vi.importActual('recharts');
  return {
    ...originalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div style={{ width: 500, height: 500 }}>{children}</div>,
  };
});

describe('App', () => {
  it('renders the hero section with name', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Jacopo Vitale/i })).toBeInTheDocument();
  });

  it('renders the navigation', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveTextContent(/Experience/i);
    expect(nav).toHaveTextContent(/Work/i);
  });
});