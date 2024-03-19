import { Prisma, ServiceInstance } from "@prisma/client";

export interface ServiceInstanceRepository {
  createOne: CreateOne;
  readAll: ReadAll;
  updateOne: UpdateOne;
  deleteOne: DeleteOne;
}

export type { ServiceInstance };
export type CreateOne = (p: CreateInput) => Promise<ServiceInstance>;
export type CreateInput = Prisma.ServiceInstanceCreateInput;
export type ReadAll = () => Promise<ServiceInstance[]>;
export type UpdateOne = (
  id: string,
  p: UpdateOneInput
) => Promise<ServiceInstance>;
export type UpdateOneInput = Prisma.ServiceInstanceCreateInput;
export type DeleteOne = (id: string) => Promise<ServiceInstance>;
