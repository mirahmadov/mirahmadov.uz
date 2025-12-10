export async function delayFn(fn: () => void, ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));

  fn()
  return
}