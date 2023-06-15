import type { NextApiRequest, NextApiResponse } from 'next';
import argon2 from 'argon2';

interface Data {
  comment: string;
  response?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'POST':
      try {
        if (
          await argon2.verify(
            process.env.NEXT_PUBLIC_ADMIN_PASSWORD!,
            req.body.password
          )
        ) {
          console.log('did match');
        } else {
          console.log('not match');
        }
      } catch (err) {
        console.log(err);
      }
      status = 200;
      data.comment = 'Got';
      data.response = 'test';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}
