import { PrismaService } from '../prisma/prisma.service';
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: any): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        kosId: number;
        userId: number;
        content: string;
        reply: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    reply(commentId: number, reply: string): import("@prisma/client").Prisma.Prisma__CommentClient<{
        id: number;
        kosId: number;
        userId: number;
        content: string;
        reply: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findByKos(kosId: number): import("@prisma/client").Prisma.PrismaPromise<({
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
