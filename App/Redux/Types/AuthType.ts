export interface API {
  fetching: boolean;
  error?: string;
}

export interface AuthType extends API {
  token: string;
  user: User;
}

export interface User {
  name: string;
  gender: string;
  id: string;
}
