import {create} from "zustand";
import axios from "axios";
import Cookie from "js-cookie";
import Cookies from "js-cookie";



const UserStore = create((set) => ({

    isLogin : () => {
        return !!Cookie.get('token')
    },


    RegisterFormValue : {firstName : '', lastName : '', phone : '', email : '', password : '',},

    RegisterFormOnChange : (name, value) => {
        set((state) => ({
            RegisterFormValue: {
                ...state.RegisterFormValue,
                [name]: value
            }
        }))
    },


    // Register Request-
    RegisterRequest : async (postBody) => {
        try {
            let response = await axios.post(`https://creative-agency-lake-five.vercel.app/api/Registration`, postBody);
            return response.data;
        } catch (e) {
            console.error('Error registering user:', e)
        }
    },



    LoginFormValue : {email : '', password : ''},

    LoginFormOnChange : (name, value) => {
        set((state) => ({
            LoginFormValue: {
                ...state.LoginFormValue,
                [name]: value
            }
        }))
    },


    // Login Request
    LoginRequest : async (postBody) => {
        try {
            let response = await axios.post(`https://creative-agency-lake-five.vercel.app/api/Login`, postBody);
            sessionStorage.setItem('email', postBody.email);
            return response.data;
        } catch (e) {
            console.error('Error registering user:', e)
        }
    },



    OtpFormValue : {otp : ''},

    OtpFormOnChange : (name, value) => {
        set((state) => ({
            OtpFormValue: {
                ...state.OtpFormValue,
                [name]: value
            }
        }))
    },

    
    // Otp Verify
    VerifyLoginRequest : async (otp) => {
        try {  
            let email = sessionStorage.getItem('email');
            let response = await axios.post(`https://creative-agency-lake-five.vercel.app/api/VerifyLogin`, {email: email, otp: otp});
            Cookie.set('token', response.data.token);
            return response.data
        } catch (e) {
            console.error('Error verifying OTP:', e)
        }
    },


    // User Logout Request
    LogoutRequest : async () => {
        let response = await axios.get(`https://creative-agency-lake-five.vercel.app/api/Logout`, {
            headers : {
                token: Cookies.get('token')
            }
        });
        set({isFormSubmit: false});
        return response.data['status'] === 'success';
    }



}));

export default UserStore;