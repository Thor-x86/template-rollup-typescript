import { subtract } from '../lib/index.cjs';

describe('Subtract', () => {
	test('1 - 1 = 0', () => {
		expect(subtract(1, 1)).toBe(0);
	});

	test('3 - 0 = 3', () => {
		expect(subtract(3, 0)).toBe(3);
	});

	test('0 - 3 = -3', () => {
		expect(subtract(0, 3)).toBe(-3);
	});

	test('0 - 0 = 0', () => {
		expect(subtract(0, 0)).toBe(0);
	});

	test('8 - 4 = 4', () => {
		expect(subtract(8, 4)).toBe(4);
	});
});
