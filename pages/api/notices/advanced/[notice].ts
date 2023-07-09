import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import { prisma } from '@/lib/prismaClient';

interface Data {
  comment: string;
  response?: AkademiaTraining | null;
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  let noticeId: string | string[] = req.query.notice!;
  switch (req.method) {
    case 'GET':
      try {
        const advancedTraining: AkademiaTraining | null =
          await prisma.noticeAdvanced.findUnique({
            where: {
              id: typeof noticeId === `string` ? noticeId : noticeId[0],
            },
          });
        status = 200;
        data.comment = 'Got';
        data.response = advancedTraining;
      } catch (err) {
        console.log(err);
        data.comment = `Error: ${err}`;
        status = 500;
      }
      break;
    case 'DELETE':
      if (!req.session.user) {
        status = 403;
        data.comment =
          'User does not have access to this method without admin permissions.';
        break;
      }
      try {
        await prisma.noticeAdvanced.delete({
          where: {
            id: typeof noticeId === `string` ? noticeId : noticeId[0],
          },
        });
      } catch (err) {
        console.log(err);
        status = 500;
        data.comment = 'Failed to delete';
        break;
      }
      status = 200;
      data.comment = 'Deleted';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
