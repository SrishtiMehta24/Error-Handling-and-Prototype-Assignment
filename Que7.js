class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
      } else {
        console.error('Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
  
  const user = new User('john_doe', 'Password123');
  
  // Get the password (masked with asterisks)
  console.log(user.password);
  // Output: *********
  
  // Set a new valid password
  user.password = 'NewPassword789';
  
  // Get the updated masked password
  console.log(user.password);
  // Output: *********
  
  // Set a new invalid password
  user.password = 'invalid';
  // Output: Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.
  