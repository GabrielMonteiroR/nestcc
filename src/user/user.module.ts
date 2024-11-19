import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { userRepository } from "./user.repository";

@Module({
    controllers: [UserController],
    providers: [userRepository]
})
export class UserModule {}