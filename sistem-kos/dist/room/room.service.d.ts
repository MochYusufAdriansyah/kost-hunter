import { PrismaService } from '../prisma/prisma.service';
export declare class RoomService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: any): import("@prisma/client").Prisma.Prisma__RoomClient<{
        number: string;
        id: number;
        status: string;
        kosId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        kos: {
            id: number;
            name: string;
            address: string;
            gender: string;
            price: number;
            ownerId: number;
        };
        bookings: {
            id: number;
            createdAt: Date;
            status: import("@prisma/client").$Enums.BookingStatus;
            userId: number;
            roomId: number;
        }[];
    } & {
        number: string;
        id: number;
        status: string;
        kosId: number;
    })[]>;
    findByKos(kosId: number): import("@prisma/client").Prisma.PrismaPromise<{
        number: string;
        id: number;
        status: string;
        kosId: number;
    }[]>;
}
