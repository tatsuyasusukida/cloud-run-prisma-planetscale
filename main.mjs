import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express()
app.get('/', async (req, res, next) => {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.$queryRaw`show databases;`;
    res.send(result);
  } catch (err) {
    next(err);
  }
})

app.listen(process.env.PORT || '3000')