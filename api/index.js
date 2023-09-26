import express,{json} from 'express'
import owneRouter from './owner.js'
 const server  = express();
server.use(json())
server.use("/api/owners",owneRouter)
export default server


