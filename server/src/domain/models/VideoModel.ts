import {Schema, model} from 'mongoose'
interface Video {
    title: string,
    desc: string,
    videoUrl:string,
    videoId: string,
    imageUrl:string,
    imageId: string
}
const videoSchema = new Schema<Video>({
    title: {type:String, required:true},
    desc: {type:String, required:true},
    videoUrl: {type:String, required:true},
    videoId: {type:String, required:true},
    imageUrl: {type:String, required:true},
    imageId: {type:String, required:true},
}, {timestamps:true})

const Video = model<Video>('Video',videoSchema)

export  default Video