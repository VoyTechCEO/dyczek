import type { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOptions from '@/lib/session';
import YearClass from '@/interfaces/yearClass';
import { prisma } from '@/lib/prismaClient';

interface Data {
  comment: string;
  response?: YearClass[];
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let status;
  let data: Data = { comment: 'unsupported method' };

  let reqYear: number;
  let findYearClass: YearClass | undefined;

  try {
    const graduates = await prisma.graduatesYear.findMany();
    const convertedGraduates: YearClass[] = graduates.map((item) => {
      const graduatesList = item.graduates.split(',');
      return {
        year: item.year,
        graduates: graduatesList,
      };
    });

    switch (req.method) {
      case 'GET':
        status = 200;
        data.comment = 'Got';
        data.response = convertedGraduates;
        break;
      case 'POST':
        if (!req.session.user) {
          status = 403;
          data.comment =
            'User does not have access to this method without admin permissions.';
          break;
        }
        reqYear = parseInt(req.body.year);
        findYearClass = convertedGraduates.find((item) => {
          return item.year === reqYear;
        });

        let newGraduate: YearClass;
        if (findYearClass) {
          newGraduate = {
            year: reqYear,
            graduates: [...findYearClass.graduates, req.body.name],
          };
          const stringifiedGraduates = newGraduate.graduates.join(',');
          try {
            await prisma.graduatesYear.update({
              where: {
                year: findYearClass.year,
              },
              data: {
                graduates: stringifiedGraduates,
              },
            });
          } catch (err) {
            console.log(err);
            status = 400;
            data.comment = `Error: ${err}`;
            break;
          }
        } else {
          try {
            await prisma.graduatesYear.create({
              data: {
                year: reqYear,
                graduates: req.body.name,
              },
            });
          } catch (err) {
            console.log(err);
            status = 500;
            data.comment = `Failed to post: ${err}`;
            break;
          }
        }
        status = 201;
        data.comment = 'Posted';
        break;
      case 'DELETE':
        if (!req.session.user) {
          status = 403;
          data.comment =
            'User does not have access to this method without admin permissions.';
          break;
        }
        reqYear = parseInt(req.body.year);
        findYearClass = convertedGraduates.find((item) => {
          return item.year === reqYear;
        });
        const deleteGraduate = findYearClass!.graduates.filter((item) => {
          return req.body.name !== item;
        });
        const stringifiedGraduates = deleteGraduate.join(',');
        try {
          if (stringifiedGraduates === ``) {
            await prisma.graduatesYear.delete({
              where: {
                year: findYearClass!.year,
              },
            });
          } else {
            await prisma.graduatesYear.update({
              where: {
                year: findYearClass!.year,
              },
              data: {
                graduates: stringifiedGraduates,
              },
            });
          }
        } catch (err) {
          console.log(err);
          status = 500;
          data.comment = 'Failed to delete';
          break;
        }
        status = 201;
        data.comment = 'Deleted';
        break;
      default:
        status = 405;
        break;
    }
  } catch (mainErr) {
    console.log(mainErr);
    data.comment = `Error: ${mainErr}`;
    status = 500;
  }
  res.status(status).json(data);
}

export default withIronSessionApiRoute(handler, sessionOptions);
