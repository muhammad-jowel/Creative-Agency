import express from 'express';
const router = express.Router();

import * as UserController from '../app/controllers/UserController.js';
import * as ServiceController from '../app/controllers/ServiceController.js';
import * as BlogController from '../app/controllers/BlogController.js';
import * as TeamController from '../app/controllers/TeamController.js';
import * as ContactController from '../app/controllers/ContactController.js';
import AuthMiddleware from '../app/middlewares/AuthMiddleware.js';


// User Router
router.post('/Registration', UserController.Registration);
router.post('/Login', UserController.Login);
router.post('/VerifyLogin', UserController.VerifyLogin); 
router.get('/Read-Profile', AuthMiddleware, UserController.ReadProfile);
router.post('/Update-Profile', AuthMiddleware, UserController.UpdateProfile);
router.get('/Logout', AuthMiddleware, UserController.Logout);


// Our Services Router
router.post('/Create-Service', AuthMiddleware, ServiceController.Create);
router.get('/Read-Service', ServiceController.Read);
router.post('/Update-Service', AuthMiddleware, ServiceController.Update);
router.post('/Delete-Service', AuthMiddleware, ServiceController.Remove);


// Blog Router
router.post('/Create-Blog', AuthMiddleware, BlogController.CreateBlog);
router.get('/Read-Blog', BlogController.ReadBlog);
router.post('/Update-Blog', AuthMiddleware, BlogController.UpdateBlog);
router.post('/Delete-Blog', AuthMiddleware, BlogController.RemoveBlog);
router.get('/Blog-details/:blogID', BlogController.BlogDetails);



// Team Router
router.post('/Create-Team', AuthMiddleware, TeamController.CreateTeam);
router.get('/Read-Team', TeamController.ReadTeam);
router.post('/Update-Team', AuthMiddleware, TeamController.UpdateTeam);
router.post('/Delete-Team', AuthMiddleware, TeamController.RemoveTeam);



// Contact Router
router.post('/Send-Message', ContactController.SendMessage);
router.get('/Read-Message', AuthMiddleware, ContactController.ReadMessage);
router.post('/Delete-Message', AuthMiddleware, ContactController.DeleteMessage);


export default router;