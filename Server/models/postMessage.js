import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const postMessage = mongoose.model('PostMessage' , postSchema);

export default postMessage;