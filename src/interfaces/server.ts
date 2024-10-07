import { Application, NextFunction, Request, RequestHandler, Response, Router } from "express";
import { Mongoose } from "mongoose";

export interface IServerOptions {
  port: number;
  apiPrefix: string;
  model : IModel
}

export interface IRouterInstance extends Router { }

export interface IApplication extends Application { }

export interface IResponse extends Response { }

export interface IRequest extends Request { }

export interface INextFunction extends NextFunction { }

export interface IModel {
  init(): Promise<Mongoose>
}

export interface IRequestHandler extends RequestHandler {}
