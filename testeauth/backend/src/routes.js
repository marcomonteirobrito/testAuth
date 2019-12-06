import { Router } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const routes = new Router();
routes.use(cors());

routes.post('/auth',  (req, res) => {
    const emailAdm = "admin@admin.com";
    const senhaAdm = "123456";
    const token = '';
    const { email, senha } = req.body;
 

    if ( email === emailAdm && senha === senhaAdm) {
        return res.json({
            token: jwt.sign({ token }, '97961630cef515da1bafc31889ab8f28', {
                expiresIn: '7d',
            }),
        })
    } else {
        return res.status(401).json("error");
    };

    
});

export default routes;