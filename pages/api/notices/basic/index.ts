import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import { prisma } from '@/lib/prismaClient';

interface Data {
  comment: string;
  response?: AkademiaTraining;
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      try {
        const basicTraining = await prisma.noticeBasic.findMany();
        console.log(basicTraining);
        status = 200;
        data.comment = 'Got';
        data.response = basicTraining[0];
      } catch (err) {
        console.log(err);
        data.comment = `Error: ${err}`;
        status = 500;
      }
      break;
    case 'PUT':
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
        const basicTraining = await prisma.noticeBasic.findMany();
        await prisma.noticeBasic.update({
          where: {
            id: basicTraining[0].id,
          },
          data: {
            date: currentDate,
            content: req.body.content,
          },
        });
      } catch (err) {
        console.log(err);
        status = 500;
        data.comment = `Failed to post: ${err}`;
        break;
      }
      status = 201;
      data.comment = 'Put';
      break;
    case 'OPTIONS':
      status = 200;
      data.comment = 'CORS policy passed';
      break;
    default:
      status = 405;
      break;
  }
  console.log(data);
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
