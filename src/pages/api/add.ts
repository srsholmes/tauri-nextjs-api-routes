import type { NextApiRequest, NextApiResponse } from 'next';
import { add, AddedData } from '@/shared/add';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AddedData>,
) {
  const added = add(1, 2);
  res.status(200).json(added);
}
