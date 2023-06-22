import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import advancedTrainingList from '../../../../data/advancedTraining.json';
import path from 'path';
import fsPromises from 'fs/promises';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';

interface Data {
  comment: string;
  response?: AkademiaTraining;
}

const advancedTrainingListPath = path.join(
  process.cwd(),
  'data/advancedTraining.json'
);

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      const getTraining = advancedTrainingList.find((item) => {
        return item.id === req.query.notice;
      });

      status = 200;
      data.comment = 'Got';
      data.response = getTraining;
      break;
    case 'DELETE':
      if (!req.session.user) {
        status = 403;
        data.comment =
          'User does not have access to this method without admin permissions.';
        break;
      }
      const newTraining = advancedTrainingList.filter((item) => {
        return item.id !== req.query.notice;
      });
      const parsedAdvancedTrainingList = JSON.stringify(newTraining);
      try {
        await fsPromises.writeFile(
          advancedTrainingListPath,
          parsedAdvancedTrainingList
        );
      } catch (err) {
        console.log(err);
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
