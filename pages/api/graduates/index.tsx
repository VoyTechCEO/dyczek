import type { NextApiRequest, NextApiResponse } from 'next';
import graduates from '../../../data/graduates.json';
import fsPromises from 'fs/promises';
import path from 'path';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import YearClass from '@/interfaces/yearClass';

interface Data {
  comment: string;
  response?: YearClass[];
}

const graduatesPath = path.join(process.cwd(), 'data/graduates.json');

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };
  switch (req.method) {
    case 'GET':
      status = 200;
      data.comment = 'Got';
      data.response = graduates;
      break;
    case 'POST':
      if (!req.session.user) {
        status = 403;
        data.comment =
          'User does not have access to this method without admin permissions.';
        break;
      }
      const reqYear = parseInt(req.body.year);
      const findYearClass = graduates.find((item) => {
        return item.year === reqYear;
      });

      let newGraduate: YearClass;
      let parsedGraduates;
      if (findYearClass) {
        newGraduate = {
          year: reqYear,
          graduates: [...findYearClass.graduates, req.body.name],
        };
        const updatedGraduates = graduates.map((item) => {
          if (item === findYearClass) {
            return newGraduate;
          }
          return item;
        });
        parsedGraduates = JSON.stringify(updatedGraduates);
      } else {
        newGraduate = {
          year: reqYear,
          graduates: [req.body.name],
        };
        parsedGraduates = JSON.stringify([...graduates, newGraduate]);
      }
      try {
        await fsPromises.writeFile(graduatesPath, parsedGraduates);
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
