import { createServer, Server } from 'http';
import socketIo from 'socket.io';
import { stocksGenerator } from '../init/stocksGenerator'
import { createExpressServer } from 'routing-controllers';
import ApiErrorHandler from '../middleware/api.error.handler'
import BrowserErrorHandler from '../middleware/browser.error.handler'
import {BodyParserMiddleware} from '../middleware/body-parser'

 class StocksServer {
    public static readonly PORT: number = 3002;
    private app!: any;
    private server!: Server;
    private io!: SocketIO.Server;
    private port!: string | number;
    private generator!: stocksGenerator;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = createExpressServer({
            cors: true,
            defaultErrorHandler: false,
            defaults: { nullResultCode: 404 },
            routePrefix: "/api",
            classTransformer: false,
            controllers: [__dirname + '/../controllers/*.controller{.js,.ts}'],
            middlewares: [
                BodyParserMiddleware,
                BrowserErrorHandler,
                ApiErrorHandler
            ]
        });
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || 3002;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {

        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);


            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): any {
        return this.app;
    }

    public startGenerating(): void {
        this.generator = new stocksGenerator(this.io);
    }

    public getSocket(): SocketIO.Server {
        return this.io;
    }

}

export const server:StocksServer = new StocksServer()