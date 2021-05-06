import { createContext } from 'react';

// interface UserNull {
// 	user: null;
// 	username: null;
// }

// interface UserInfo {
// 	user: {};
// 	username: string;
// }

export const UserContext = createContext({
	user: null,
	username: null
});
