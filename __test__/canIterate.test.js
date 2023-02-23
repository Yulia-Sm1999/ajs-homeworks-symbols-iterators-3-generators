import canIterate from '../src/canIterate';

test('should show if data is iterable', () => {
  expect(canIterate([])).toBe(true);
  expect(canIterate(new Map())).toBe(true);
  expect(canIterate(new Set())).toBe(true);
  expect(canIterate(null)).toBe(false);
  expect(canIterate(10)).toBe(false);
  expect(canIterate('Netology')).toBe(true);
});
