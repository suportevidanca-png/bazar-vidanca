import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const prismaClientSingleton = () => {
  const url = process.env.DATABASE_URL;
  
  if (!url || url.includes("undefined")) {
    console.warn("AVISO: Variável DATABASE_URL não carregada. Se isso for durante o build, é normal. Em produção causará erros.");
    // Retorna um client sem adaptador (vai falhar apenas na hora da query se a url não existir, salvando o build)
    return new PrismaClient();
  }

  const connectionString = url.replace('mysql://', 'mariadb://');
  const adapter = new PrismaMariaDb(connectionString);
  
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
