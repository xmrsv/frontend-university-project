import {
	addLocalStorage,
	getLocalStorage,
	updateLocalStorage,
	deleteLocalStorage,
} from "./localStorage";
import { v4 as uuidv4 } from "uuid";

interface User {
	id: string;
	username: string;
	password: string;
	sessionActive: boolean;
	isAdmin: boolean;
}

// Crea un usuario en el localStorage
export function createUser(
	username: string,
	password: string,
	isAdmin: boolean
): void {
	const user: User = {
		id: uuidv4(),
		username,
		password,
		sessionActive: false,
		isAdmin: isAdmin,
	};
	addLocalStorage("users", user);
}

// Inicia sesión en el localStorage, si el usuario y la contraseña coinciden
// devuelve true y cambia el valor de sessionActive a true, si no, devuelve false
// y si el usuario no existe, devuelve null
export function login(username: string, password: string): boolean | null {
	const users: User[] = getLocalStorage("users") as User[];
	const user = users.find(
		(user: User) => user.username === username && user.password === password
	);
	console.log(user);
	if (user) {
		user.sessionActive = true;
		updateLocalStorage("users", user, user);
		return true;
	}
	console.log(user)
	return false;
}

export function getUserByUsername(username: string): User | null {
	const users: User[] = getLocalStorage("users") as User[];
	const user = users.find((user: User) => user.username === username);
	if (user) {
		return user;
	}
	return null;
}

interface User {
    id: string;
    username: string;
    password: string;
}

export function updateUser(index: number, changes: Partial<User>): void {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (index < 0 || index >= users.length) {
        throw new Error("Invalid index");
    }
    const updatedUser = { ...users[index], ...changes };
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
}