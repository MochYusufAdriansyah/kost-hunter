import { KosService } from './kos.service';
export declare class KosController {
    private service;
    constructor(service: KosService);
    create(body: any): import("@prisma/client").Prisma.Prisma__KosClient<{
        id: number;
        name: string;
        address: string;
        gender: string;
        price: number;
        ownerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        comments: {
            id: number;
            kosId: number;
            userId: number;
            content: string;
            reply: string | null;
        }[];
        owner: {
            id: number;
            email: string;
            name: string;
            password: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
        };
        rooms: {
            number: string;
            id: number;
            status: string;
            kosId: number;
        }[];
        facilities: {
            id: number;
            name: string;
            kosId: number;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
        gender: string;
        price: number;
        ownerId: number;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__KosClient<({
        comments: {
            id: number;
            kosId: number;
            userId: number;
            content: string;
            reply: string | null;
        }[];
        rooms: {
            number: string;
            id: number;
            status: string;
            kosId: number;
        }[];
        facilities: {
            id: number;
            name: string;
            kosId: number;
        }[];
    } & {
        id: number;
        name: string;
        address: string;
        gender: string;
        price: number;
        ownerId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
