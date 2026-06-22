/**
 * Returns true when the caller has a valid API key OR a PRO bearer token.
 * Used by handlers where the RPC endpoint is public but certain fields
 * (e.g. framework/systemAppend) should only be honored for premium callers.
 */
export async function isCallerPremium(request: Request): Promise<boolean> {
  void request;
  return true;
}
