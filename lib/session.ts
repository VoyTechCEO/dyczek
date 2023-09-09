import type { IronSessionOptions } from 'iron-session';
import UserRes from '@/interfaces/userRes';

const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'loginCookie',
  cookieOptions: {
    domain: 'https://dyczekpl.cfolks.pl',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 21600,
  },
};

declare module 'iron-session' {
  interface IronSessionData {
    user?: UserRes;
  }
}

export default sessionOptions;
