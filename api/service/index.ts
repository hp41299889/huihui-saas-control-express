import { Prisma } from "@prisma/client";

import { createServiceRepository } from "@/repository";
import type { ServiceApi, GetService, PostService } from "./interface";

const serviceRepo = createServiceRepository();

const postService = async (s: Prisma.ServiceCreateInput): PostService => {
  try {
    return await serviceRepo.createOne(s);
  } catch (error) {
    throw error;
  }
};

const getService = async (): GetService => {
  try {
    return await serviceRepo.readAll();
  } catch (error) {
    throw error;
  }
};

export const createServiceApi = (): ServiceApi => {
  const serviceSerivce: ServiceApi = {
    postService,
    getService,
  };

  return serviceSerivce;
};
