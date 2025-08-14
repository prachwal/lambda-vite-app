import { signal } from '@preact/signals';

/**
 * Counter signal for global state management.
 */
export const counter = signal(0);

/**
 * Increments the counter value.
 */
export function increment() {
    counter.value++;
}
