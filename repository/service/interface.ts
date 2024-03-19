import { Prisma, Service } from "@prisma/client";

export interface ServiceRepository {
  createOne: CreateOne;
  readAll: ReadAll;
  updateOne: UpdateOne;
  deleteOne: DeleteOne;
}

export type { Service };
export type CreateOne = (p: CreateOneInput) => Promise<Service>;
export type CreateOneInput = Prisma.ServiceCreateInput;
export type ReadAll = () => Promise<Service[]>;
export type UpdateOne = (id: number, p: UpdateOneInput) => Promise<Service>;
export type UpdateOneInput = Prisma.ServiceUpdateInput;
export type DeleteOne = (id: number) => Promise<Service>;
