import jwt from 'jsonwebtoken';

class sessionController {
async store(req, res) {
        const { email } = req.body;

        const user = await user.findOne({ where: { email }});

        if (!user) {
            return res.status(401).json({ error: 'Email not found'});
        }

        return res.json({
            token: jwt.sign({ email }, '97961630cef515da1bafc31889ab8f28', {
                expiresIn: '7d',
            }),
        })
    }
    
}

export default new sessionController();