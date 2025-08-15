import { counter, increment } from './counterSignal.ts';

/**
 * Counter button component using Preact signals with modern styling.
 */
export function Counter() {
    return (
        <div class="card text-center">
            <div class="card-body">
                {/* Counter display */}
                <div class="counter-display" style={{ marginBottom: 'var(--space-xl)' }}>
                    {counter.value}
                </div>

                {/* Counter button */}
                <button
                    class="btn btn-primary btn-xl counter-button animate-pulse"
                    onClick={increment}
                    aria-label={`Increment counter, current value is ${counter.value}`}
                >
                    <span>Count is {counter.value}</span>
                </button>

                {/* HMR hint */}
                <div style={{ marginTop: 'var(--space-xl)' }}>
                    <p class="text-muted text-sm">
                        Edit <code style={{
                            fontFamily: 'var(--font-family-mono)',
                            fontSize: 'var(--font-size-xs)',
                            background: 'var(--color-bg-secondary)',
                            padding: 'var(--space-xs) var(--space-sm)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--color-text-primary)'
                        }}>
                            src/components/Counter/Counter.tsx
                        </code> and save to test HMR
                    </p>
                </div>
            </div>
        </div>
    );
}