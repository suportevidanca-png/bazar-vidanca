import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AdminPage() {
  // Esta é a Server Action: ela processa os dados no servidor
  async function createProduct(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as any;

    await prisma.product.create({
      data: {
        name,
        description,
        price,
        category,
        stockCount: 1,
      },
    });

    // Limpa o cache da home para o novo produto aparecer lá
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Cadastrar Novo Item</h1>
      
      <form action={createProduct} className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Nome do Produto</label>
          <input 
            name="name" 
            type="text" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Ex: Camiseta Pintada à Mão"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$)</label>
            <input 
              name="price" 
              type="number" 
              step="0.01" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Categoria</label>
            <select 
              name="category" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
            >
              <option value="Clothes">Roupas</option>
              <option value="Toys">Brinquedos</option>
              <option value="Sandals">Sandálias</option>
              <option value="Misc">Diversos</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Descrição</label>
          <textarea 
            name="description" 
            rows={4} 
            required 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Conte a história deste item..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg"
        >
          Salvar no Catálogo
        </button>
      </form>
    </div>
  );
}
