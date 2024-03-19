import { Controller } from "../interface";

export interface ServiceController {
  post: Controller;
  get: Controller;
}
