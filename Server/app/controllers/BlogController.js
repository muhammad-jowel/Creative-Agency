import { CreateBlogService, ReadBlogService, RemoveBlogService, UpdateBlogService, BlogListDetailsService } from "../service/BlogService.js";

// Create Service
export const CreateBlog = async (req, res) => {
    try {
        let result = await CreateBlogService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Read Service
export const ReadBlog = async (req, res) => {
    try {
        let result = await ReadBlogService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}


// Update Service
export const UpdateBlog = async (req, res) => {
    try {
        let result = await UpdateBlogService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
};


// Delete Service
export const RemoveBlog = async (req, res) => {
    try {
        let result = await RemoveBlogService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}



export const BlogDetails = async (req, res) => {
    try {
        let result = await BlogListDetailsService(req, res);
        return res.json(result);
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
}