import { PrismaService } from '../prisma/prisma.service';
export declare class BookingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, roomId: number): Promise<{
        id: number;
        createdAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        roomId: number;
    }>;
}
