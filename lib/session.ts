import type { IronSessionOptions } from 'iron-session';
import UserRes from '@/interfaces/userRes';

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'loginCookie',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user?: UserRes;
  }
}

export default sessionOptions;
