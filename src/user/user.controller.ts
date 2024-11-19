import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller("/users")
export class UserController {

    constructor(private userRepo: userRepository) {

    }

    @Post()
    async createUser(@Body() userData: CreateUserDTO) {
        await this.userRepo.save(userData);
        return  userData
    }

    @Get()
    async getAllUsers() {
        return this.userRepo.getAll();
    }

}