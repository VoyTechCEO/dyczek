import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import basicTraining from '../../../../data/basicTraining.json';
import fsPromises from 'fs/promises';
import path from 'path';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';

interface Data {
  comment: string;
  response?: AkademiaTraining;
}

const basicTrainingPath = path.join(process.cwd(), 'data/basicTraining.json');

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      status = 200;
      data.comment = 'Got';
      data.response = basicTraining;
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
      const newTraining: AkademiaTraining = {
        date: currentDate,
        content: req.body.content,
      };
      const parsedTraining = JSON.stringify(newTraining);
      try {
        await fsPromises.writeFile(basicTrainingPath, parsedTraining);
      } catch (err) {
        console.log(err);
        status = 500;
        data.comment = `Failed to post ${err}`;
        break;
      }
      status = 201;
      data.comment = 'Put';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
