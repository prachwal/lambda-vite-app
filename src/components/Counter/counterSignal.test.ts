import { describe, it, expect, beforeEach } from 'vitest';
import { counter, increment } from './counterSignal.ts';

// Reset counter before each test for isolation
beforeEach(() => {
    counter.value = 0;
});

describe('counterSignal', () => {
    it('should initialize counter to 0', () => {
        expect(counter.value).toBe(0);
    });

    it('should increment counter value', () => {
        increment();
        expect(counter.value).toBe(1);
        increment();
        expect(counter.value).toBe(2);
    });

    it('should allow manual counter value set', () => {
        counter.value = 42;
        expect(counter.value).toBe(42);
        increment();
        expect(counter.value).toBe(43);
    });
});
