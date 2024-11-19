import { Body, Controller, Get, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";

@Controller("/users")
export class UserController {

    constructor(private userRepo: userRepository) {
        
    }


    @Post()
    async createUser(@Body() userData) {
        await this.userRepo.save(userData);
        return  userData
    }

    @Get()
    async getAllUsers() {
        return this.userRepo.getAll();
    }

}