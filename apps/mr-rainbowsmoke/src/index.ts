/**
 * Cloudflare Worker for Mr. Rainbowsmoke account
 */
export default {
  async fetch(_request: Request, _env: unknown, _ctx: ExecutionContext): Promise<Response> {
    return new Response('Hello from Mr. Rainbowsmoke Cloudflare Worker!', {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
