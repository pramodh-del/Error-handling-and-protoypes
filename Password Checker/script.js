class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getPassword() {
        return "*".repeat(this.password.length);
    }

    setPassword(newPassword) {
        if (newPassword.length < 8) {
            console.log("Password must be at least 8 characters long.");
            return;
        }

        if (!/[0-9]/.test(newPassword)) {
            console.log("Password must contain at least one number.");
            return;
        }

        if (!/[A-Z]/.test(newPassword)) {
            console.log("Password must contain at least one uppercase letter.");
            return;
        }

        this.password = newPassword;
    }
}


var user = new User("johndoe", "password123");
user.setPassword("newpassword123");
console.log(user.getPassword()); 
