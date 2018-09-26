import { Middleware, ExpressErrorMiddlewareInterface ,HttpError,Req,Res, HttpCode} from "routing-controllers";
import {Request, Response, NextFunction} from 'express';

@Middleware({ type: "after" })
export default class ApiErrorHandler implements ExpressErrorMiddlewareInterface {
    @HttpCode(500)
    error(error: HttpError, @Req() request: Request, @Res() response: Response, next: (err: any) => NextFunction) {
       console.log('in api')
        //this error handler handles ajax requests
        //its response is in json
        if (request.xhr === false) {
            return next(error);
        }

        //The response to browser
        response.json({ error_message: error.message });//response to client
    }
}

