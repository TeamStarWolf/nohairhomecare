// add-security-headers — Cloudflare Worker for nohairhomecare.com
//
// Purpose: GitHub Pages cannot emit custom response headers and ignores the
// repo's `_headers` file. This Worker applies the site's security header set at
// the Cloudflare edge instead.
//
// Deploy (Cloudflare dashboard):
//   1. Workers & Pages -> Create -> Worker -> paste this file -> Deploy
//   2. Settings -> Triggers -> Add route:  nohairhomecare.com/*
//   The route only fires when the domain's DNS records are Proxied (orange
//   cloud). Set SSL/TLS mode to "Full" so Cloudflare<->GitHub stays HTTPS.
//
// Note: HSTS can alternatively be enabled via SSL/TLS -> Edge Certificates ->
// HSTS. Applying it here too is harmless (the header is simply set once).

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy":
    "geolocation=(), microphone=(), camera=(), interest-cohort=()",
  "Content-Security-Policy":
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; " +
    "frame-src https://challenges.cloudflare.com; " +
    "connect-src 'self' https://challenges.cloudflare.com https://static.cloudflareinsights.com; " +
    "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests",
};

export default {
  async fetch(request) {
    const response = await fetch(request);
    // Clone so headers are mutable, preserving status/body/existing headers.
    const r = new Response(response.body, response);
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      r.headers.set(name, value);
    }
    return r;
  },
};
