import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_ACCESS_SECRET } from '$env/static/private'

import db from './db'

const createUser = async (name: string, email: string, password: string) => {
    const user = await db.user.findUnique({
        where: { email },
    });

    if (user) {
        return {
            error: 'Email is in use',
        };
    }

    try {
        const user = await db.user.create({
            data: {
                name,
                email,
                password: await bcrypt.hash(password, 10),
            }
        })
        return { user }
    } catch (error) {
        return {
            error: 'Something went wrong'
        }
    }
}

const login = async (email: string, password: string) => {
    const user = await db.user.findUnique({
        where: { email },
    })

    if (!user) {
        return {
            error: 'Invalid credentials'
        }
    }

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if (!passwordIsValid) {
        return {
            error: 'Invalid credentials'
        }
    }

    const jwtUser = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(jwtUser, JWT_ACCESS_SECRET, {
        expiresIn: '1d'
    })

    return { token }
}

export { createUser, login }