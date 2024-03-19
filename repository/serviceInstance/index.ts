import { prisma } from "@/service";

import type {
  ServiceInstanceRepository,
  CreateOne,
  CreateInput,
  ReadAll,
  UpdateOne,
  DeleteOne,
  UpdateOneInput,
} from "./interface";

const { serviceInstance } = prisma;

export const createServiceInstanceRepository =
  (): ServiceInstanceRepository => {
    const serviceInstanceRepository: ServiceInstanceRepository = {
      createOne,
      readAll,
      updateOne,
      deleteOne,
    };

    return serviceInstanceRepository;
  };

const createOne: CreateOne = async (s: CreateInput) => {
  try {
    return await serviceInstance.create({ data: s });
  } catch (error) {
    throw error;
  }
};

const readAll: ReadAll = async () => {
  try {
    return await serviceInstance.findMany();
  } catch (error) {
    throw error;
  }
};

const updateOne: UpdateOne = async (id: string, p: UpdateOneInput) => {
  try {
    return await serviceInstance.update({ where: { id }, data: p });
  } catch (error) {
    throw error;
  }
};

const deleteOne: DeleteOne = async (id: string) => {
  try {
    return await serviceInstance.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
};
