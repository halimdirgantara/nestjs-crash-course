import { ApiProperty, ApiTags } from "@nestjs/swagger";

export class CreateuserDto {
    @ApiProperty()
    name: string;

    @ApiProperty({ required: false })
    age?: number;
}