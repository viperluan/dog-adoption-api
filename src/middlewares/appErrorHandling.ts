import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/AppError';

function appErrorHandling(
  error: AppError,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error.',
  });
}

export { appErrorHandling };
