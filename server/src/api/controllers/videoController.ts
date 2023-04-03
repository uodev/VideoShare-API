import {Response, Request} from "express";
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import Video from "../../domain/models/VideoModel";
import {sendHttpOk} from "../../infrastructure/utils/response/sendHttpResponse";

export const videoUploader = async (req: Request, res: Response) => {
    if (!req.files) throw Error("dosya bulunamadı")
    const video = req.files.video as any
    const image = req.files.image as any

    const videoResult = await cloudinary.uploader.upload(
        video.tempFilePath,
        {
            use_filename: true,
            folder: 'videos',
            resource_type: "video"
        }, function (error: any, result: any) {
            if (error) console.log(error)
        }
    )
    const imageResult = await cloudinary.uploader.upload(
        image.tempFilePath,
        {
            use_filename: true,
            folder: 'images',
            resource_type: "image"
        }, function (error: any, result: any) {
            if (error) console.log(error)
        }
    )
    await Video.create({
        title: req.body.title,
        desc: req.body.desc,
        videoUrl: videoResult.url,
        videoId: videoResult.public_id,
        imageId: imageResult.public_id,
        imageUrl: imageResult.url
    })
    fs.unlinkSync(video.tempFilePath)
    fs.unlinkSync(image.tempFilePath)

    sendHttpOk(res)

}

export const getAllVideos = async (req: Request, res: Response) => {
    const videos = await Video.find().sort({createdAt: -1})
    res.json({videos})
}