import { Handler } from "./exception";
import {
  IApplication,
  IMiddlewareBoostrap,
  IModel,
  IRouterInstance,
  IServerOptions,
} from "./interfaces";
import { Boostrap } from "./middlewares";
import server, { type Server as HttpServer } from "http";
import { Server as IoServer } from "socket.io";

export class Server {
  public app: IApplication;
  private serverListener: HttpServer;
  private port: number;
  private apiPrefix: string;
  private routes: IRouterInstance;
  private ioServer: IoServer;
  private model: IModel 

  constructor(options: IServerOptions, application: IApplication) {
    const { port, routes, apiPrefix,model } = options;
    this.port = port;
    this.routes = routes;
    this.apiPrefix = apiPrefix;
    this.app = application;
    this.model = model
    this.serverListener = server.createServer(this.app);
    this.ioServer = new IoServer(this.serverListener);
  }

  async init(): Promise<void> {
    console.log("------  INIT SERVER. PLEASE WAIT FOR RESPONSE -----");
    // mount all Core middlewares
    this.app = this.mountBoostrapMiddleware(this.app);

    // Mounts app with routes
    this.app.use(this.routes);

    // Set the io connection servers

    this.ioServer.on("connection", () => {
      console.log("Hello user")
    })

    // Set error handling middleware
    this.app.use(Handler.errorHandler);
    
    // Set Not found handler
    this.app = Handler.notFoundHandler(this.app);
    await this.model.init()

    // test route path
    this.app.get(`${this.apiPrefix}`, (req,res) => {
      res.status(200).json({message : `This is the test path for this ${req.originalUrl}`})
    }) 

    console.log("_______Server is now Starting_______");
    // Set server lisening to the port
    this.serverListener.listen(this.port, () => {
      console.log(`------Server is now listening at PORT::${this.port}------`);
    });
  }

  private mountBoostrapMiddleware(app: IApplication): IApplication {
    return (app = Boostrap.init(app));
  }
}
