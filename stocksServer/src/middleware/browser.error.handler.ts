import { Middleware, ExpressErrorMiddlewareInterface, HttpError, HttpCode } from "routing-controllers";
import { Request, Response, NextFunction } from 'express';

@Middleware({ type: "after" })
export default class BrowserErrorHandler implements ExpressErrorMiddlewareInterface {

    @HttpCode(500)
    error(error: any, request: Request, response: Response, next: NextFunction) {
       
        //this error handler will not handle ajax requests
        //its response is meant for the browser
        if (request.xhr === true) {
            return next(error);
        }

        //The response to browser
        response.end(`<h1>Error: ${error.message}</h1>`);


    }

}