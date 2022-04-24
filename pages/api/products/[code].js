import data from './data.json';

export function getProductsByCode(code) {
  const products = data.filter((product) => product.code === code);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCode(req.query.code);
    res.status(200).json(products);
  }
}