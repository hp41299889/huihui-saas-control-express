import { createServiceRepository } from "@/repository";
import type { ServiceApi, Post, PostInput, Get, Patch } from "./interface";

const serviceRepo = createServiceRepository();

export const createServiceApi = (): ServiceApi => {
  const serviceSerivce: ServiceApi = {
    post,
    get,
  };

  return serviceSerivce;
};

const post: Post = async (p: PostInput) => {
  try {
    return await serviceRepo.createOne(p);
  } catch (error) {
    throw error;
  }
};

const get: Get = async () => {
  try {
    return await serviceRepo.readAll();
  } catch (error) {
    throw error;
  }
};

const patch: Patch = async;
