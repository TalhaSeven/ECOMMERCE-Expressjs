import { Request, Response } from "express";
import RatingRepository from "../repositories/rating.repository";

export default class RatingController {
  async getRatings(req: Request, res: Response) {
    try {
      const list = await RatingRepository.list();
      if (!list) {
        return res.status(401).send({ message: "no valid data found" });
      }
      return res.status(200).send({ message: "", list });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }
  async setRatings(req: Request, res: Response) {
    const { productId, authUser, rating } = req.body;
    const userId = authUser.userId;
    try {
      const insert = await RatingRepository.insert(productId, userId, rating);
      return res.status(200).send({ message: "", data: insert });
    } catch (error) {
      return res.status(401).send({ message: "error" });
    }
  }
}
