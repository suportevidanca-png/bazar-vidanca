import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductCondition } from "@prisma/client";
import Link from "next/link";
import HtmlTextArea from "@/components/HtmlTextArea";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export default function AdminPage() {
  async function createProduct(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const shortDescription = formData.get("shortDescription") as string;
    const detailedDescription = formData.get("detailedDescription") as string;
    const price = parseFloat(formData.get("price") as string);
    const category = formData.get("category") as any;
    const condition = formData.get("condition") as ProductCondition;
    const size = formData.get("size") as string;
    const color = formData.get("color") as string;
    const stockCount = parseInt(formData.get("stockCount") as string);
    const isFeatured = formData.get("isFeatured") === "on";
    
    // Processar e salvar as imagens enviadas
    const images: string[] = [];
    const imageKeys = ["image1", "image2", "image3"];
    
    // Garantir que a pasta uploads existe
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
      console.error("Erro ao criar diretório de uploads", e);
    }

    for (const key of imageKeys) {
      const file = formData.get(key) as File | null;
      if (file && file.size > 0 && file.name !== "undefined") {
        const buffer = Buffer.from(await file.arrayBuffer());
        // Gerar um nome único para o arquivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.name) || '.jpg';
        const filename = `${uniqueSuffix}${ext}`;
        const filePath = path.join(uploadDir, filename);
        
        await writeFile(filePath, buffer);
        images.push(`/uploads/${filename}`);
      }
    }

    await prisma.product.create({
      data: {
        name,
        shortDescription,
        detailedDescription,
        price,
        category,
        condition,
        size: size || null,
        color: color || null,
        stockCount: isNaN(stockCount) ? 1 : stockCount,
        isFeatured,
        images,
      },
    });

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Cadastrar Novo Produto</h1>
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 flex items-center gap-2">
          Ver Dashboard
        </Link>
      </div>
      
      <form action={createProduct} encType="multipart/form-data" className="space-y-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        
        {/* Informações Básicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Nome do Produto</label>
            <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Preço (R$)</label>
            <input name="price" type="number" step="0.01" required className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Categoria</label>
            <select name="category" className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors">
              <option value="Clothes">Roupas</option>
              <option value="Toys">Brinquedos</option>
              <option value="Sandals">Sandálias</option>
              <option value="Misc">Diversos</option>
            </select>
          </div>
        </div>

        {/* Detalhes Físicos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Quantidade</label>
            <input name="stockCount" type="number" defaultValue={1} required className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Condição</label>
            <select name="condition" className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors">
              <option value="NEW">Novo</option>
              <option value="LIKE_NEW">Seminovo</option>
              <option value="USED">Usado - Em bom estado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tamanho (Opcional)</label>
            <input name="size" type="text" placeholder="Ex: M, 42" className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Cor (Opcional)</label>
            <input name="color" type="text" placeholder="Ex: Azul" className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
        </div>

        {/* Textos de Venda */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Descrição Curta (Vitrine)</label>
            <input name="shortDescription" type="text" maxLength={250} required placeholder="Resumo de 2 linhas..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Descrição Detalhada</label>
            <HtmlTextArea name="detailedDescription" required placeholder="História da peça, material, dimensões..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-slate-50 text-slate-900 focus:border-slate-400 focus:bg-white outline-none transition-colors" />
          </div>
        </div>

        {/* Destaque e Imagens */}
        <div className="p-4 bg-yellow-50/50 border border-yellow-100 rounded-2xl flex items-center gap-3">
          <input type="checkbox" name="isFeatured" id="isFeatured" className="w-5 h-5 rounded border-slate-300 text-yellow-600 focus:ring-yellow-500" />
          <label htmlFor="isFeatured" className="text-sm font-bold text-yellow-900 cursor-pointer">
            ✨ Destacar na Vitrine Principal (Hero Section)
          </label>
        </div>

        <div className="p-4 bg-blue-50/50 rounded-2xl space-y-4 border border-blue-100">
          <label className="block text-sm font-semibold text-blue-900">Fotos do Produto (Câmera ou Arquivo)</label>
          <p className="text-xs text-blue-700 mb-2">Envie pelo menos 1 imagem. Ao clicar pelo celular, a câmera será ativada.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Foto Principal (Capa) *</label>
              <input name="image1" type="file" accept="image/*" capture="environment" required className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Foto Adicional 2</label>
              <input name="image2" type="file" accept="image/*" capture="environment" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 transition" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1">Foto Adicional 3</label>
              <input name="image3" type="file" accept="image/*" capture="environment" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 transition" />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg mt-4">
          Salvar Produto no Catálogo
        </button>
      </form>
    </div>
  );
}
