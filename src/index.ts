/**
 * A nop function which can be used to replace non-cancelable calls.
 */
export function nop (..._: any[]): void {}

/**
 * Check if argument is the shared nop function.
 */
export function isNop (arg: any): boolean {
  return arg === nop;
}
