import { Prisma, Service } from "@prisma/client";

export interface ServiceApi {
  postService: (s: Prisma.ServiceCreateInput) => PostService;
  getService: () => GetService;
}

export type PostService = Promise<Service>;
export type GetService = Promise<Service[]>;
