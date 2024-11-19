import { Body, Controller, Post } from "@nestjs/common";
import { userRepository } from "./user.repository";

@Controller("/users")
export class UserController {

    //Precisamos instanciar a lógico criada na repository para usar ela aqui 
    private userRepo = new userRepository();

    @Post()
    async createUser(@Body() userData) {
        await this.userRepo.saveUser(userData);
        return  userData
    }

}