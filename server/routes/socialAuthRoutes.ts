import express from "express"
import { generateAuthURL, syncAccounts } from '../controllers/socialAuthController';
import { protect } from '../middlewares/authMiddleware';




const socialAuthRouter = express.Router()

socialAuthRouter.get('/:platform/url',protect,generateAuthURL)
socialAuthRouter.get('/sync',protect,syncAccounts)

export default socialAuthRouter