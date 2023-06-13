import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import basicTraining from '../../../../data/basicTraining.json';
import fsPromises from 'fs/promises';
import path from 'path';

interface Data {
  comment: string;
  response?: AkademiaTraining;
}

const basicTrainingPath = path.join(process.cwd(), 'data/basicTraining.json');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      status = 200;
      data.comment = 'Got';
      data.response = basicTraining;
      break;
    case 'PUT':
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
      await fsPromises.writeFile(basicTrainingPath, parsedTraining);
      status = 201;
      data.comment = 'Put';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}
