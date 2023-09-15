import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';
import { withIronSessionApiRoute } from 'iron-session/next';
import UserRes from '@/interfaces/userRes';
import sessionOptions from '@/lib/session';

interface Data {
  comment: string;
  response?: UserRes | { isPasswordCorrect: boolean };
}

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
      console.log('s1');
      try {
        console.log('s2');
        if (
          await argon2.verify(process.env.ADMIN_PASSWORD!, req.body.password)
        ) {
          console.log('s3');
          console.log(process.env.ADMIN_PASSWORD!);
          req.session.user = {
            isLoggedIn: true,
          };
          console.log('s4');
          await req.session.save();
          console.log('s5');
          data.response = {
            isPasswordCorrect: true,
          };
          console.log('s6');
          data.comment = 'Correct password';
          console.log('s7');
          status = 200;
          console.log('s8');
        } else {
          console.log('s9');
          data.response = {
            isPasswordCorrect: false,
          };
          data.comment = 'Incorrect password';
          status = 401;
        }
      } catch (err) {
        console.log('s11');
        console.log(err);
        status = 500;
        data.comment = `Failed to post: ${err}`;
      }
      break;
    case 'DELETE':
      console.log('s12');
      req.session.destroy();
      console.log('s13');
      data.response = {
        isLoggedIn: false,
      };
      status = 200;
      data.comment = 'Logged out';
      break;
    case 'OPTIONS':
      status = 200;
      data.comment = 'CORS policy passed';
      break;
    default:
      status = 405;
      break;
  }
  console.log('s14');
  res.status(status!).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
