import { counter, increment } from './counterSignal.ts';

/**
 * Counter button component using Preact signals.
 */
export function Counter() {
    return (
        <div class="card">
            <button onClick={increment}>
                count is {counter.value}
            </button>
            <p>
                Edit <code>src/components/Counter/Counter.tsx</code> and save to test HMR
            </p>
        </div>
    );
}
