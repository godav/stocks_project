import {Middleware, ExpressMiddlewareInterface,HttpError,Req,Res, HttpCode} from "routing-controllers";
import {Request, Response, NextFunction} from 'express';
import * as bodyParser from "body-parser";

@Middleware({ type: "before" })
export class BodyParserMiddleware implements ExpressMiddlewareInterface {

    use(@Req() request: Request, @Res() response: Response, next: NextFunction): void {
       bodyParser.urlencoded({ extended: false });
        bodyParser.json();
        next();
    }

}