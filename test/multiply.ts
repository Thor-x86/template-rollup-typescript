import { multiply } from '../lib/index.cjs';

describe('Multiply', () => {
	test('1 x 1 = 1', () => {
		expect(multiply(1, 1)).toBe(1);
	});

	test('3 x 0 = 0', () => {
		expect(multiply(3, 0)).toBe(0);
	});

	test('0 x 3 = 0', () => {
		expect(multiply(0, 3)).toBe(0);
	});

	test('0 x 0 = 0', () => {
		expect(multiply(0, 0)).toBe(0);
	});

	test('8 x 4 = 32', () => {
		expect(multiply(8, 4)).toBe(32);
	});
});
