import { HttpInterceptorFn } from '@angular/common/http';

const API_KEY = ' reqres_76f9790597804f68bdb1c35c469147fd';

const ALLOWED_HOSTS: string[] = [];

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const key = (API_KEY || '').trim();

  if (!key) {
    return next(req);
  }

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
