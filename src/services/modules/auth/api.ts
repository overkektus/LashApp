import { api } from '../../api';

interface IRole {
  id: number;
  name: string;
  __entity: string;
}

interface IStatus {
  id: number;
  name: string;
  __entity: string;
}

interface IUser {
  id: number;
  email: string;
  provider: string;
  socialId: number | null;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  photo: string | null;
  role: IRole;
  status: IStatus;
  __entity: string;
}

interface ILoginResult {
  refreshToken: string;
  token: string;
  tokenExpires: number;
  user: IUser;
}

interface ISignupResult {
  email: string;
  password: string;
}

interface ISignupArgs {
  email: string;
  password: string;
}

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResult, { email: string; password: string }>({
      query: ({ email, password }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: '/api/v1/auth/email/login',
      }),
    }),
    signup: build.mutation<ISignupResult, ISignupArgs>({
      query: ({ email, password }) => ({
        body: {
          email,
          password,
        },
        method: 'POST',
        url: '/api/v1/auth/email/register',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useSignupMutation } = authApi;
