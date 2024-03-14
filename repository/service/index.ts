import { prisma } from "@/service";
import type {
  ServiceRepository,
  ServiceCreateInput,
  Service,
} from "./interface";

const { service } = prisma;

const readAll = async (): Promise<Service[]> => {
  try {
    return await service.findMany();
  } catch (error) {
    throw error;
  }
};

const createOne = async (s: ServiceCreateInput): Promise<Service> => {
  try {
    return await service.create({ data: s });
  } catch (error) {
    throw error;
  }
};

export const createServiceRepository = (): ServiceRepository => {
  const serviceRepository: ServiceRepository = {
    createOne,
    readAll,
  };

  return serviceRepository;
};
