/**
 * Cloudflare Worker for RainbowsmokeOfficial account
 */
export default {
  async fetch(_request: Request, _env: unknown, _ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello from RainbowsmokeOfficial Cloudflare Worker!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
