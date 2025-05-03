import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
const router = Router();

const fanSchema = z.object({
  name: z.string().optional(),
  cpf: z.string().optional(),
  address: z.string().optional(),
  email: z.string().email().optional(),
  events: z.string().optional(),
  products: z.string().optional(),
  socials: z.object({
    instagram: z.string().optional(),
    twitter: z.string().optional(),
    google: z.string().optional(),
  }).optional(),
  games: z.array(z.string()).optional(),
  gamingProfiles: z.array(z.object({ link: z.string() })).optional(),
});

router.post('/fans', async (req, res) => {
  const parsed = fanSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  const {
    name, cpf, address, email, events, products,
    socials, games, gamingProfiles
  } = parsed.data;

  try {
    const fan = await prisma.fan.create({
      data: {
        name,
        cpf,
        address,
        email,
        events,
        products,
        instagram: socials?.instagram,
        twitter: socials?.twitter,
        google: socials?.google,
        games: {
          create: games?.map(game => ({ name: game })) || [],
        },
        gamingProfiles: {
          create: gamingProfiles || [],
        }
      },
      include: {
        games: true,
        gamingProfiles: true,
      }
    });

    return res.status(201).json(fan);
  } catch (error) {
    console.error('Erro ao criar fã:', error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

export default router;
