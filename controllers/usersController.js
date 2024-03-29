const { prisma } = require('../prisma/prisma-client.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста заполните поля' });
        }
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        const isPasswordCorrect =
            user && (await bcrypt.compare(password, user.password));

        const secret = process.env.JWT_KEY;

        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        } else {
            return res
                .status(400)
                .json({ message: 'Неверно введен логин или пароль' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
};

const register = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста заполните обязательные поля' });
        }

        const registeredUser = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (registeredUser) {
            return res
                .status(400)
                .json({ message: 'Пользователь с таким email уже существует' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        const secret = process.env.JWT_KEY;
        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        } else {
            return res
                .status(400)
                .json({ message: 'Не удалось создать пользователя' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
};

const current = async (req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так' });
    }
};

module.exports = { login, register, current };
