import { Request, Response } from "express";
import ProductCategoryRepository from "../repositories/product_category.repository";

export default class ProductCategoryController {
  async getProductCategories(req: Request, res: Response) {
    try {
      const list = await ProductCategoryRepository.list();
      if (!list) {
        return res.status(401).send({ message: "no valid data found" });
      }
      return res.status(200).send({ message: "", list });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }
  async getCategoryProducts(req: Request, res: Response) {
    try {
      const list = await ProductCategoryRepository.list();
      if (!list) {
        return res.status(401).send({ message: "no valid data found" });
      }
      return res.status(200).send({ message: "", list });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }

  async setProductCategory(req: Request, res: Response) {
    const { productId, categoryId } = req.body;
    try {
      const insert = await ProductCategoryRepository.insert(
        productId,
        categoryId
      );
      return res.status(200).send({ message: "", data: insert });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }
}
