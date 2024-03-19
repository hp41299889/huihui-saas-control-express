import { prisma } from "@/service";
import type {
  ServiceRepository,
  CreateOne,
  CreateOneInput,
  ReadAll,
  UpdateOne,
  DeleteOne,
  UpdateOneInput,
} from "./interface";

const { service } = prisma;

export const createServiceRepository = (): ServiceRepository => {
  const serviceRepository: ServiceRepository = {
    createOne,
    readAll,
    updateOne,
    deleteOne,
  };

  return serviceRepository;
};

const createOne: CreateOne = async (s: CreateOneInput) => {
  try {
    return await service.create({ data: s });
  } catch (error) {
    throw error;
  }
};

const readAll: ReadAll = async () => {
  try {
    return await service.findMany();
  } catch (error) {
    throw error;
  }
};

const updateOne: UpdateOne = async (id: number, p: UpdateOneInput) => {
  try {
    return await service.update({ where: { id }, data: p });
  } catch (error) {
    throw error;
  }
};

const deleteOne: DeleteOne = async (id: number) => {
  try {
    return service.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
};
