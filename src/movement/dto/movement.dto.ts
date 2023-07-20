import { IsOptional, IsDate, IsNumber, IsString, IsBoolean } from "class-validator";

export class MovementDTO {
  @IsOptional()
  @IsDate()
  date: Date;

  @IsNumber()
  amountOperated: number;

  @IsString()
  cripto: string;

  @IsBoolean()
  side: boolean;

  @IsNumber()
  amount: number;

  @IsNumber()
  price: number;

  @IsNumber()
  badge: number;

  @IsString()
  echange: string;

  @IsNumber()
  result: number;
}


