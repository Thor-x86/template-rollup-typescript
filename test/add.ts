import { add } from '../lib/index.cjs';

describe('Addition', () => {
	test('1 + 1 = 2', () => {
		expect(add(1, 1)).toBe(2);
	});

	test('3 + 0 = 3', () => {
		expect(add(3, 0)).toBe(3);
	});

	test('0 + 3 = 3', () => {
		expect(add(0, 3)).toBe(3);
	});

	test('0 + 0 = 0', () => {
		expect(add(0, 0)).toBe(0);
	});

	test('8 + 4 = 0', () => {
		expect(add(8, 4)).toBe(12);
	});
});
