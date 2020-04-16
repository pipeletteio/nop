import { nop, isNop } from '../../../src/index';

test('should nop not raised anything', () => {
  expect(nop).not.toThrow();
  expect(nop()).toBe(undefined);
});

test('should isNop return true', () => {
  expect(isNop(nop)).toBe(true);
});

test('should isNop return false', () => {
  expect(isNop(undefined)).toBe(false);
  expect(isNop(null)).toBe(false);
  expect(isNop(true)).toBe(false);
  expect(isNop(0)).toBe(false);
  expect(isNop(1)).toBe(false);
  expect(isNop(function () {})).toBe(false);
  expect(isNop(isNop)).toBe(false);
});
