// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process a POST request
    const {
      name,
      email,
    } = req.body;

    const subscribe = await axios.post('https://member.mailingboss.com/integration/webhook/613378:dd5390e5b7d4c87731429ddf1ff91221/01', {
      name,
      email,
    }, {
      headers: {
      },
      withCredentials: false,
    });

    return res.status(200).json(subscribe.data);
  }

  return res.status(204);
}
