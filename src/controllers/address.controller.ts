import { Request, Response } from "express";

export default class AddressController {
  async getCities(req: Request, res: Response) {
    const id = req.params.id
      .replace("i", "İ")
      .replace("i", "İ")
      .toLocaleUpperCase();

    const fs = require("fs");
    const file = await fs.promises.readFile(
      "./public/address.json",
      "utf8",
      (err: any, data: any) => {
        if (err) return false;
        return true;
      }
    );

    const fileJson = JSON.parse(file);

    const cities: any[] = [];
    let city: any = null;

    fileJson.map((k: any) => {
      k.sub.map((l: any) => {
        if (id === undefined) {
          cities.push(l.name);
        } else if (id === l.name) {
          city = { name: l.name, sub: l.sub };
        }
      });
    });

    res.status(200).send({ message: "Success", cities, city, id });
  }
}
