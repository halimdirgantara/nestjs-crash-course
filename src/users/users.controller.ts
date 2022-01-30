import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateuserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name: string): User[] {
        return this.usersService.findAll(name);
    }

    @ApiOkResponse({type: User, description: 'the user'})
    @Get(':id')
    // TO DO Auto Parse ID
    getUserById(@Param('id') id: string): User { 
        return this.usersService.findById(Number(id))
    }

    @ApiCreatedResponse({ type: User })
    @Post()
    createUser(@Body() body: CreateuserDto): User {
        return this.usersService.createUser(body);
    }
}
