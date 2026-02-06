import { HttpInterceptorFn } from '@angular/common/http';

const API_KEY = ' reqres_76f9790597804f68bdb1c35c469147fd';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      'x-api-key': API_KEY
    }
  });

  return next(cloned);
};
