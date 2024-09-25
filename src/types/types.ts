export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string; // In real apps, this will be hashed
  createdAt: Date;
}

export interface Game {
  _id?: string;
  title: string;
  description: string;
  createdAt: Date;
  players: string[]; // Store user IDs or player names
  status: "active" | "finished";
}
