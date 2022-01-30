import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        { 
            id: 435234, 
            name: 'Halim' 
        },
        {
            id: 35351406,
            name: "Bibbye"
          }, {
            id: 98159082,
            name: "Valene"
          }, {
            id: 56108731,
            name: "Jarvis"
          }, {
            id: 99025343,
            name: "Mina"
          }, {
            id: 71174595,
            name: "Dominic"
          }, {
            id: 22280053,
            name: "Rhona"
          }, {
            id: 40106813,
            name: "Verne"
          }, {
            id: 52879941,
            name: "Rae"
          }, {
            id: 18427804,
            name: "Anastassia"
          }, {
            id: 92434777,
            name: "Sara"
          }
    ];

    findAll(name?: string): User[] {
        if (name) {
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    findById(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    createUser(createUserDto: CreateuserDto): User {
        const newUser = { id: Date.now(), ...createUserDto };

        this.users.push(newUser);

        return newUser;
    }
}
