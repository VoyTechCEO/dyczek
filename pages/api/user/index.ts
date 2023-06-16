import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import { withIronSessionApiRoute } from 'iron-session/next';
import UserRes from '@/interfaces/userRes';
import sessionOptions from '@/lib/session';

interface Data {
  comment: string;
  response?: UserRes | { isPasswordCorrect: boolean };
}

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      if (req.session.user) {
        data.response = {
          isLoggedIn: true,
        };
        data.comment = 'Logged in';
      } else {
        data.response = {
          isLoggedIn: false,
        };
        data.comment = 'Not logged in';
      }
      status = 200;
      break;
    case 'POST':
      try {
        if (
          await argon2.verify(process.env.ADMIN_PASSWORD!, req.body.password)
        ) {
          req.session.user = {
            isLoggedIn: true,
          };
          await req.session.save();
          data.response = {
            isPasswordCorrect: true,
          };
          data.comment = 'Correct password';
        } else {
          data.response = {
            isPasswordCorrect: false,
          };
          data.comment = 'Incorrect password';
        }
      } catch (err) {
        console.log(err);
      }
      status = 200;
      break;
    case 'DELETE':
      req.session.destroy();
      data.response = {
        isLoggedIn: false,
      };
      status = 200;
      data.comment = 'Logged out';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}
