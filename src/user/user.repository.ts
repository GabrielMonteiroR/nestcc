export class userRepository {
    private users = [];

    async saveUser(user){
        this.users.push(user);
        console.log(user);
    }

}