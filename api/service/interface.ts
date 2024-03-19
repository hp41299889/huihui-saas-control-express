import {
  CreateOne,
  CreateOneInput,
  ReadAll,
  UpdateOne,
  UpdateOneInput,
  DeleteOne,
} from "@/repository/service/interface";

export interface ServiceApi {
  post: Post;
  get: Get;
  patch: Patch;
  delete: Delete;
}

export type Post = CreateOne;
export type PostInput = CreateOneInput;
export type Get = ReadAll;
export type Patch = UpdateOne;
export type PatchInput = UpdateOneInput;
export type Delete = DeleteOne;
