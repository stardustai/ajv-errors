export function assertNever(x: never, msg?: string): never {
  throw new Error(`assertNever Unexpected object: ${x} - ${msg ?? ''}`);
}
