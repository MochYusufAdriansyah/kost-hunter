import { CommentService } from './comment.service';
export declare class CommentController {
    private service;
    constructor(service: CommentService);
    create(req: any, body: any): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        kosId: number;
        userId: number;
        content: string;
        reply: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    reply(id: string, body: any): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        kosId: number;
        userId: number;
        content: string;
        reply: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByKos(id: string): import("@prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            email: string;
            name: string;
            password: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: number;
        kosId: number;
        userId: number;
        content: string;
        reply: string | null;
    })[]>;
}
