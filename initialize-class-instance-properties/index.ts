class UserName {
	username: string; // username!: string; definite assignment assertion -- use cautiously

	// most idiomatic approach
	constructor(username: string) {
		this.username = username;
	}

	// setUsername(username: string) {
	// 	this.username = username;
	// }
}

const userName = new UserName('asross');
// userName.setUsername('asross');
const username = userName.username?.toUpperCase() ?? 'username N/A';
console.log(username);
