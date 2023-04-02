//nomor 8
class RegisterData {
    constructor(username, password, dob, ...hobby) {
        this.username = username;
        this.password = password;
        this.dob = dob;
        this.hobby = [...hobby];
    }
}