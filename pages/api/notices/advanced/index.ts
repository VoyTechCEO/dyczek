import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import { prisma } from '@/lib/prismaClient';

interface Data {
  comment: string;
  response?: AkademiaTraining[];
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      try {
        const advancedTraining: AkademiaTraining[] =
          await prisma.noticeAdvanced.findMany();
        status = 200;
        data.comment = 'Got';
        data.response = advancedTraining;
      } catch (err) {
        console.log(err);
        data.comment = `Error: ${err}`;
        status = 500;
      }
      break;
    case 'POST':
      if (!req.session.user) {
        status = 403;
        data.comment =
          'User does not have access to this method without admin permissions.';
        break;
      }
      const getDate = new Date();
      const currentDate = `${getDate.getFullYear()}-${
        getDate.getMonth() + 1 < 10
          ? '0' + (getDate.getMonth() + 1)
          : getDate.getMonth() + 1
      }-${
        getDate.getDate() < 10 ? '0' + getDate.getDate() : getDate.getDate()
      }`;
      try {
        await prisma.noticeAdvanced.create({
          data: {
            date: currentDate,
            title: req.body.title,
            desc: req.body.desc,
            content: req.body.content,
          },
        });
      } catch (err) {
        console.log(err);
        status = 500;
        data.comment = 'Failed to post';
        break;
      }
      status = 201;
      data.comment = 'Posted';
      break;
    case 'OPTIONS':
      status = 200;
      data.comment = 'CORS policy passed';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
