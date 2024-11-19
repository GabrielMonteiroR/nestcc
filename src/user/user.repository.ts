export class userRepository {
    private users = [];

    async save(user){
        this.users.push(user);
    }

    async getAll() {
        return this.users;
    }

}