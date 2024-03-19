export interface AuthApi {
  postSignin: PostSignin;
}

export type PostSignin = (p: PostSigninInput) => Promise<string>;

export type PostSigninInput = AuthDetail;

export interface AuthDetail {
  username: string;
  password: string;
}
