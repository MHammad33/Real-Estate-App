import { Request, Response } from "express";

// GET /api/v1/posts
const fetchAllPosts = (req: Request, res: Response) => {
	res.json({ msg: "Fetch All Posts" });
};

// GET /api/v1/posts/:id
const fetchSinglePostById = (req: Request, res: Response) => {
	res.json({ msg: "Fetch Single Post" });
};

// POST /api/v1/posts
const createNewPost = (req: Request, res: Response) => {
	res.json({ msg: "Create New Post" });
};

// PUT /api/v1/posts/:id
const updateExistingPost = (req: Request, res: Response) => {
	res.json({ msg: "Update Existing Post" });
};

// DELETE /api/v1/posts/:id
const removePostById = (req: Request, res: Response) => {
	res.json({ msg: "Delete Post by ID" });
};

export default {
	fetchAllPosts,
	fetchSinglePostById,
	createNewPost,
	updateExistingPost,
	removePostById,
};
