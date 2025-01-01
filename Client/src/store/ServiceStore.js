import {create} from 'zustand'
import axios from 'axios'
import Cookies from 'js-cookie'


const ServiceStore = create((set) => ({

    ServiceList : null,
    ServiceListRequest : async () => {
        try {
            const response = await axios.get('https://creative-agency-lake-five.vercel.app/api/Read-Service')
            const data = await response.data;
            set({ServiceList : data})
        } catch (error) {
            console.error('Error fetching service list:', error)
        }
    },


    // Create a new Service
    CreateServiceFormValue : {title : '', description : '', img : '',},

    CreateServiceFormOnChange : (name, value) => {
        set((state) => ({
            CreateServiceFormValue: {
                ...state.CreateServiceFormValue,
                [name]: value
            }
        }))
    },


    CreateServiceRequest : async (postBody) => {
        try {
            let response = await axios.post(`https://creative-agency-lake-five.vercel.app/api/Create-Service`, postBody, {
                headers: {
                    token: Cookies.get('token')
                }
            });
            return response.data;
        } catch (e) {
            console.error('Error creating service:', e)
        }
    },


    // Remove a blog
    DeleteService : async (id) => {
        try {
            await axios.post(`https://creative-agency-lake-five.vercel.app/api/Delete-Service`, {id : id}, {
                headers: {
                    token: Cookies.get('token')
                }
            });
        } catch (e) {
            console.error('Error deleting:', e)
        }
    },




    // Update a blog
    UpdateServiceRequest : async (postBody) => {
        try {
            await axios.post(`https://creative-agency-lake-five.vercel.app/api/Update-Service`, postBody , {
                headers: {
                    token: Cookies.get('token')
                }
            });
        } catch (e) {
            console.error('Error updating:', e)
        }
    }

    
}))


export default ServiceStore;