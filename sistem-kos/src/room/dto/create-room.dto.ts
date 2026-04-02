import { IsString, IsInt } from "class-validator";

export class CreateRoomDto {

  @IsString()
  number: string;

  @IsString()
  status: string; // contoh: AVAILABLE / BOOKED

  @IsInt()
  kosId: number;

}
