export interface GithubAccessToken {
  access_token: string;
  scope: string;
  token_type: string;
}

export interface GithubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
}

export interface CookieData {
  status: 'valid' | 'empty' | 'invalid';
  data: GithubUser | null;
}
