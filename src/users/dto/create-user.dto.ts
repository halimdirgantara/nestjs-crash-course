import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateuserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name: string;
}