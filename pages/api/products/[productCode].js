import data from './data.json';

export function getProductsByCode(productCode) {
  const products = data.filter((product) => product.productCode === productCode);
  return products;
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByCode(req.query.productCode);
    res.status(200).json(products);
  }
}