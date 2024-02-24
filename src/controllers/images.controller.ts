import { Request, Response } from "express";

export default class ImagesController {
    async getImages(req: Request, res: Response) {
        const fs = require("fs");
        const resizeImg = require('resize-img');
        const file = await resizeImg(fs.readFileSync(`uploads/${req.params.fileName}`), {
            width: parseInt(req.params.size)
        });

        res.setHeader('Content-Type', 'image/jpg');
        res.setHeader('Content-Length', ''); // Image size here
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(file);

    }
}
