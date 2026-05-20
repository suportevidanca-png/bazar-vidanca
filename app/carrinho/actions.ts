'use server';

import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createOrder(formData: FormData) {
  const customerName = formData.get('customerName') as string;
  const customerEmail = formData.get('customerEmail') as string;
  const customerPhone = formData.get('customerPhone') as string;
  const itemsJson = formData.get('items') as string;
  const totalAmount = parseFloat(formData.get('totalAmount') as string);

  const items = JSON.parse(itemsJson) as { productId: string, quantity: number, price: number }[];

  if (items.length === 0) {
    throw new Error("Carrinho vazio");
  }

  const order = await prisma.order.create({
    data: {
      customerName,
      customerEmail,
      customerPhone,
      totalAmount,
      items: {
        create: items.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        }))
      }
    }
  });

  redirect(`/sucesso?orderId=${order.id}`);
}
