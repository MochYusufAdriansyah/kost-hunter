import { BookingService } from './booking.service';
export declare class BookingController {
    private service;
    constructor(service: BookingService);
    create(req: any, body: any): Promise<{
        id: number;
        createdAt: Date;
        status: import("@prisma/client").$Enums.BookingStatus;
        userId: number;
        roomId: number;
    }>;
}
