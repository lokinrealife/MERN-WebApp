import PostMessage from '../models/postMessage.js'


export const getPosts  = async (req , res) => {
    try {
        const postMessage = await PostMessage.find()

        res.status(202).json(postMessage);
    } catch (error) {
        res.status(404).json({messsage : error.messsage});
    }    
};

export const createPosts = (req , res) =>{

    const post = req.body;
    const createPost = new PostMessage(post);

     try {
         //Saving the post request which is aquired through req.body inside createPost Variable 
         createPost.save();

         res.status(202).json(createPost);

     } catch (error) {
        res.status(404).json({messsage : error.messsage});
     }
}