import { divide } from '../lib/index.cjs';

describe('Divide', () => {
	test('1 ÷ 1 = 1', () => {
		expect(divide(1, 1)).toBe(1);
	});

	test('3 ÷ 0 = infinite', () => {
		expect(divide(3, 0)).toBe(Number.POSITIVE_INFINITY);
	});

	test('0 ÷ 3 = 0', () => {
		expect(divide(0, 3)).toBe(0);
	});

	test('0 ÷ 0 = NaN', () => {
		expect(divide(0, 0)).toBe(Number.NaN);
	});

	test('8 ÷ 4 = 2', () => {
		expect(divide(8, 4)).toBe(2);
	});
});
