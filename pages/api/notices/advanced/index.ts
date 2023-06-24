import type { NextApiRequest, NextApiResponse } from 'next';
import AkademiaTraining from '@/interfaces/akademiaTraining';
import advancedTrainingList from '../../../../data/advancedTraining.json';
import fsPromises from 'fs/promises';
import path from 'path';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import { v4 as uuidv4 } from 'uuid';

interface Data {
  comment: string;
  response?: AkademiaTraining[];
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
      status = 200;
      data.comment = 'Got';
      data.response = advancedTrainingList;
      break;
    case 'POST':
      if (!req.session.user) {
        status = 403;
        data.comment =
          'User does not have access to this method without admin permissions.';
        break;
      }
      const noticeId = uuidv4();
      const getDate = new Date();
      const currentDate = `${getDate.getFullYear()}-${
        getDate.getMonth() + 1 < 10
          ? '0' + (getDate.getMonth() + 1)
          : getDate.getMonth() + 1
      }-${
        getDate.getDate() < 10 ? '0' + getDate.getDate() : getDate.getDate()
      }`;
      const newTraining: AkademiaTraining = {
        id: noticeId,
        date: currentDate,
        title: req.body.title,
        desc: req.body.desc,
        content: req.body.content,
      };
      const updatedAdvancedTrainingList = [
        ...advancedTrainingList,
        newTraining,
      ];
      const parsedAdvancedTrainingList = JSON.stringify(
        updatedAdvancedTrainingList
      );
      try {
        await fsPromises.writeFile(
          advancedTrainingListPath,
          parsedAdvancedTrainingList
        );
      } catch (err) {
        console.log(err);
        status = 500;
        data.comment = 'Failed to post';
        break;
      }
      status = 201;
      data.comment = 'Posted';
      break;
    default:
      status = 405;
      break;
  }
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
