import jwt from 'jsonwebtoken';
import { promisify } from 'util';

export default authasync (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(400).json({ error: 'Token does not exists'});
    }

    const [, token ] = authHeader.split('');

    try {
        await promisify(jwt.verify)(token);

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token does not match.' });
    }
};