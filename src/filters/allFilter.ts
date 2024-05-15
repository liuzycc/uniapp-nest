import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

// 全局异常拦截器
@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = 200;
    let code = 404;
    let message = '无资源';
    if (exception instanceof HttpException) {
      // 只有HttpException有getStatus方法
      code = exception.getStatus();
      message = exception.message;
    }
    response.status(status).json({
      code,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message,
    });
  }
}
