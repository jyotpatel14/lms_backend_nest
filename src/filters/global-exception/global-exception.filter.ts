import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let data = null;

    // Narrow the type safely
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'object' && res !== null) {
        // If the response is an object, extract message/data if present
        message = (res as any).message || message;
        data = (res as any).data || null;
      } else if (typeof res === 'string') {
        message = res;
      }
    } else if (exception instanceof Error) {
      // For general JS errors
      message = exception.message;
    } else if (typeof exception === 'string') {
      // If someone throws a string
      message = exception;
    }

    response.status(status).json({
      success: false,
      status,
      data,
      message,
      count: null,
    });
  }
}
