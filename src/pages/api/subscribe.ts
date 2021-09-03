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
      fname,
      phone,
      email,
    } = req.body;

    const subscribe = await axios.post('https://app.mailingboss.com/lists/613224d4a7681/subscribe', {
      fname,
      phone,
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
