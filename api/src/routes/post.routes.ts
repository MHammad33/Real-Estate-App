import { Router } from "express";
import postController from "../controllers/post.controller";

const postRouter = Router();

// Route - /api/v1/posts
postRouter
	.route("/")
	.get(postController.fetchAllPosts)
	.post(postController.createNewPost);

postRouter
	.route("/:id")
	.get(postController.fetchSinglePostById)
	.put(postController.updateExistingPost)
	.delete(postController.removePostById);

export default postRouter;
