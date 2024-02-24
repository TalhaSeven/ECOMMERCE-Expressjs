import { Request, Response } from "express";
import CategoryRepository from "../repositories/category.repository";

export default class CategoryController {
  async getCategories(req: Request, res: Response) {
    try {
      const list = await CategoryRepository.list();
      if (!list) {
        return res.status(401).send({ message: "no valid data found" });
      }

      res.status(200).send({ message: "", list });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }

  async setCategory(req: Request, res: Response) {
    const { title, description } = req.body;
    try {
      const insert = await CategoryRepository.insert(title, description);

      res.status(200).send({ message: "successful", data: insert });
    } catch (error) {
      res.status(500).send({ message: "Some error" });
    }
  }
}
