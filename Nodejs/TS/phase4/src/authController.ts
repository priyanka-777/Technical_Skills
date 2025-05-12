import {Request,Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import logger from './logger/logger';
import { users } from './memoryStore';
import {generatesalt, hashPassword ,createToken, verifyToken } from './jwt';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

//user schema
const userSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

// Register user
export const registerUser = async ( req: Request,res: Response): Promise<any> => {

     try {
    const parsedBody = userSchema.parse(req.body);  
    const { username, password } = parsedBody;

    // Log incoming request
    logger.info(`Registering user with username: ${username}`);

    // Check if user exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      logger.error(`User with username ${username} already exists`);
      return res.status(400).json({ message: 'Username already exists' });
    }

    const salt = await generatesalt();
    const hashedPassword = await hashPassword(password, salt);

    const newUser = {
      id: uuidv4(),
      username,
      password: hashedPassword,
    };

    users.push(newUser);
    logger.info(`User registered successfully with username: ${username}`);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn(`Validation failed: ${JSON.stringify(error.errors)}`);
      return res.status(400).json({ message: 'Validation failed', errors: error.errors });
    }

    logger.error(`Error during registration`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// login function 
export const loginUser = async(req:Request,res:Response):Promise<any>=>{
    try{
        const parseBody = userSchema.parse(req.body)
        const {username,password}=parseBody

        logger.info(`Login attempt for username: ${username}`);

        const user = users.find((u) => u.username === username);
    if (!user) {
      logger.warn(`Login failed: Invalid credentials for username: ${username}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(`Login failed: Password mismatch for username: ${username}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = createToken(user.id, JWT_SECRET);
    logger.info(`Login successful for username: ${username}`);
    res.json({ token });
    }
    catch(error){
        if (error instanceof z.ZodError) {
            // Handle Zod validation errors
            logger.warn(`Validation failed: ${error.errors}`);
            return res.status(400).json({ message: 'Validation failed', errors: error.errors });
          }
          logger.error(`Error during login for username: ${req.body.username}`, error);
          res.status(500).json({ message: 'Internal server error' });
        }   
};

//logout function
export const logout = (_req: Request, res: Response) => {
    logger.info('Logout request received');
    res.json({ message: 'Logged out successfully (client must discard token)' });
  };