import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import advancedTrainingList from '../../../../data/advancedTraining.json';

interface Data {
  comment: string;
  response?: AkademiaTraining[];
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      console.log('hello from params');

      status = 200;
      data.comment = 'Got';
      data.response = advancedTrainingList;
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}

export default handler;
