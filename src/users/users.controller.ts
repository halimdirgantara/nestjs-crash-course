import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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
    @ApiNotFoundResponse({ description: 'User Not Found'})
    @Get(':id')
    // TO DO Auto Parse ID
    getUserById(@Param('id', ParseIntPipe) id: number): User { 
        const user = this.usersService.findById(id);
        if(!user) {
            throw new NotFoundException();
        }
        return user;
    }

    @ApiCreatedResponse({ type: User })
    @Post()
    createUser(@Body() body: CreateuserDto): User {
        return this.usersService.createUser(body);
    }
}
