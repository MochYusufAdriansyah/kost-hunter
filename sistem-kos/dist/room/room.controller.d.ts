import { RoomService } from './room.service';
export declare class RoomController {
    private service;
    constructor(service: RoomService);
    create(body: any): import("@prisma/client").Prisma.Prisma__RoomClient<{
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
    findByKos(id: string): import("@prisma/client").Prisma.PrismaPromise<{
        number: string;
        id: number;
        status: string;
        kosId: number;
    }[]>;
}
