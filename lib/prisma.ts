import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const prismaClientSingleton = () => {
  // Pegamos a URL diretamente do processo
  const url = process.env.DATABASE_URL;
  
  if (!url || url.includes("undefined")) {
    throw new Error("ERRO: Variável DATABASE_URL não carregada. Verifique seu arquivo .env na raiz.");
  }

  const connectionString = url.replace('mysql://', 'mariadb://');
  
  // O adaptador PrismaMariaDb cria o pool internamente
  const adapter = new PrismaMariaDb(connectionString);
  
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
