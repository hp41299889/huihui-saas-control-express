import { apiError } from "@/util/api";
import type { AuthApi, PostSignin, AuthDetail } from "./interface";

const postSignin = async (a: AuthDetail): PostSignin => {
  try {
    const authRes = auth(a);
    if (!authRes) {
      throw apiError({ errorCode: 2001 });
    }
    return "ok";
  } catch (error) {
    throw error;
  }
};

const auth = (a: AuthDetail): boolean => {
  return a.username === "huihui" && a.password === "huihui";
};

export const createAuthApi = (): AuthApi => {
  const authApi: AuthApi = {
    postSignin,
  };

  return authApi;
};
