'use server';

import { prisma } from '@/lib/prisma';

export async function trackVisit(path: string) {
  try {
    await prisma.pageVisit.create({
      data: { path },
    });
  } catch (error) {
    console.error("Failed to track visit", error);
  }
}

export async function incrementProductView(productId: string) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { views: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment view", error);
  }
}

export async function incrementCartCount(productId: string) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { addedToCart: { increment: 1 } },
    });
  } catch (error) {
    console.error("Failed to increment cart count", error);
  }
}

export async function toggleProductStatus(productId: string, isActive: boolean) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { isActive },
    });
    const { revalidatePath } = await import('next/cache');
    revalidatePath('/dashboard');
    revalidatePath('/bazar');
  } catch (error) {
    console.error("Failed to toggle product status", error);
  }
}

export async function updateProductStock(productId: string, stockCount: number) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: { stockCount },
    });
    const { revalidatePath } = await import('next/cache');
    revalidatePath('/dashboard');
    revalidatePath('/bazar');
  } catch (error) {
    console.error("Failed to update product stock", error);
  }
}
