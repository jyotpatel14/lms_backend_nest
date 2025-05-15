import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const count =
          data && typeof data === 'object' && 'count' in data
            ? data.count
            : Array.isArray(data)
              ? data.length
              : null;

        // Remove the count field from data if present
        if (data && typeof data === 'object' && 'count' in data) {
          delete data.count;
        }
        return {
          success: true,
          status: context.switchToHttp().getResponse().statusCode,
          data, // Preserves original type (array/object/primitive)
          message: 'Request successful',
          count,
        };
      }),
    );
  }
}
