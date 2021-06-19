import { Request, Response } from 'express';
import logger from '../shared/utils/logger';
import ProductService from '../services/Product';

export const get = async (req: Request, res: Response) => {
  const productService = new ProductService();
  const products = await productService.getAll();
  return res.status(200).send(products);
};

export const makeOrder = async (req: Request, res: Response) => {
  const payloads = [{ topic: 'ecommerce-topic', messages: 'To Product Consumer', partitions: 1 }];
  return res.status(200).send(payloads);
};
