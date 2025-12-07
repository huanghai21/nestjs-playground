// users/user.entity.ts
export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(username: string, email: string, password: string) {
    this.id = 0;
    this.username = username;
    this.email = email;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
