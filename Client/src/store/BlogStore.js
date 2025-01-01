import {create} from 'zustand'
import axios from 'axios'
import Cookies from 'js-cookie'



const BlogStore = create((set) => ({

    BlogList : null,
    BlogListRequest : async () => {
        try {
            const response = await axios.get('https://creative-agency-lake-five.vercel.app/api/Read-Blog')
            const data = await response.data;
            set({BlogList : data})
        } catch (error) {
            console.error('Error fetching blog list:', error)
        }
    },


    BlogListDetails : null,
    BlogListDetailsRequest : async (id) => {
        try {
            const response = await axios.get(`https://creative-agency-lake-five.vercel.app/api/Blog-details/${id}`)
            console.log(response.data)
            const data = await response.data;
            set({BlogListDetails : data})
        } catch (error) {
            console.error('Error fetching blog details:', error)
        }
    },


    // Create a new blog
    CreateBlogFormValue : {title : '', author : '', sortContent : '', fullContent : '', img : '',},

    CreateBlogFormOnChange : (name, value) => {
        set((state) => ({
            CreateBlogFormValue: {
                ...state.CreateBlogFormValue,
                [name]: value
            }
        }))
    },


    CreateBlogRequest : async (postBody) => {
        try {
            let response = await axios.post(`https://creative-agency-lake-five.vercel.app/api/Create-Blog`, postBody, {
                headers: {
                    token: Cookies.get('token')
                }
            });
            return response.data;
        } catch (e) {
            console.error('Error creating blog:', e)
        }
    },


    // Remove a blog
    DeleteBlog : async (id) => {
        try {
            await axios.post(`https://creative-agency-lake-five.vercel.app/api/Delete-Blog`, {id : id}, {
                headers: {
                    token: Cookies.get('token')
                }
            });
        } catch (e) {
            console.error('Error deleting:', e)
        }
    },




    // Update a blog
    UpdateBlogRequest : async (postBody) => {
        try {
            await axios.post(`https://creative-agency-lake-five.vercel.app/api/Update-Blog`, postBody, {
                headers: {
                    token: Cookies.get('token')
                }
            });
        } catch (e) {
            console.error('Error updating:', e)
        }
    }

    
}))


export default BlogStore;