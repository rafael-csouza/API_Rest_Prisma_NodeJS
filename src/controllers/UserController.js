import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  async createUser(req, res) {
    try {
      const { name, email } = req.body;

      console.log('req.body: ', req.body);

      let user = await prisma.user.findUnique({ where: { email } });

      if (user) {
        return res.json({ error: 'User already exist.' });
      }

      user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      return res.json(user);
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  },

  async findAllUsers(req, res) {
    try {
      const users = await prisma.user.findMany();
      return res.json(users);
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  },

  async findUser(req, res) {
    try {
      const { id } = req.params;
      console.log('req.params: ', req.params);

      const user = await prisma.user.findUnique({ where: { id: Number(id) } });
      if (!user) return res.json({ error: 'This user does not exist.' });

      return res.json(user);
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  },

  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      console.log('req.params: ', req.params);
      const { name, email } = req.body;
      console.log('req.body: ', req.body);

      let user = await prisma.user.findUnique({ where: { id: Number(id) } });
      if (!user) return res.json({ error: 'This user does not exist.' });

      user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
      });
      return res.json(user);
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      console.log('req.params: ', req.params);

      const user = await prisma.user.findUnique({ where: { id: Number(id) } });
      if (!user) return res.json({ error: 'This user does not exist.' });

      await prisma.user.delete({ where: { id: Number(id) } });

      return res.json({ message: 'User deleted.' });
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  },
};
