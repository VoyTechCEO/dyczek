import { NextResponse } from 'next/server';

// const allowedOrigins =
//   process.env.NODE_ENV === 'production'
//     ? [
//         'https://dyczek.netlify.app',
//         'https://dyczekpl.cfolks.pl',
//         'http://localhost:3000',
//       ]
//     : ['http://localhost:3000'];

export function middleware(request: Request) {
  // const origin = request.headers.get('origin');

  // if (origin && !allowedOrigins.includes(origin)) {
  //   return new NextResponse(null, {
  //     status: 400,
  //     statusText: 'Bad request',
  //     headers: {
  //       'Content-Type': 'text/plain',
  //     },
  //   });
  // }
  const res = NextResponse.next();
  // res.headers.append('Access-Control-Allow-Credentials', 'true');
  // res.headers.append('Access-Control-Allow-Origin', origin || '');
  // res.headers.append(
  //   'Access-Control-Allow-Methods',
  //   'GET,DELETE,PATCH,POST,PUT,OPTIONS'
  // );
  // res.headers.append('Access-Control-Allow-Headers', '*');

  return res;
}

// export const config = {
//   matcher: '/api/:path*',
// };
