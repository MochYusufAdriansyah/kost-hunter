import { IsString, IsInt } from "class-validator";

export class CreateKosDto {

  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  gender: string;

  @IsInt()
  price: number;

  @IsInt()
  ownerId: number;

}
