export interface AuthApi {
  postSignin: (a: AuthDetail) => PostSignin;
}

export type PostSignin = Promise<any>;

export interface AuthDetail {
  username: string;
  password: string;
}
