import { Prisma, Service } from "@prisma/client";

export interface ServiceRepository {
  createOne: (s: Prisma.ServiceCreateInput) => Promise<Service>;
  readAll: () => Promise<Service[]>;
}

export type { Service } from "@prisma/client";
export type ServiceCreateInput = Prisma.ServiceCreateInput;
