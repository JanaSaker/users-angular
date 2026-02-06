import { HttpInterceptorFn } from '@angular/common/http';

// Provide your real API key here. Keep the placeholder empty or set to
// an empty string to avoid attaching the header to requests.
const API_KEY = ' reqres_76f9790597804f68bdb1c35c469147fd';

// Optional: restrict which hosts receive the API key. Empty array = allow all hosts.
const ALLOWED_HOSTS: string[] = [];

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const key = (API_KEY || '').trim();

  // Do not attach the header if key is not set or is the placeholder
  if (!key) {
    return next(req);
  }

  // If ALLOWED_HOSTS is configured, only attach the header for matching hosts
  if (ALLOWED_HOSTS.length > 0) {
    const matches = ALLOWED_HOSTS.some(h => req.url.includes(h));
    if (!matches) {
      return next(req);
    }
  }

  const cloned = req.clone({
    setHeaders: {
      'x-api-key': key
    }
  });

  return next(cloned);
};
