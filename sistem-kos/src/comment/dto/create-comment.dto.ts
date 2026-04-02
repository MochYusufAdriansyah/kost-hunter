import { IsString, IsInt, IsOptional } from "class-validator";

export class CreateCommentDto {

  @IsString()
  content: string;

  @IsInt()
  kosId: number;

  @IsOptional()
  @IsString()
  reply?: string;

}
