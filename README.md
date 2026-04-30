# Bazar Vidança - Plataforma de E-commerce e Inclusão

Este repositório contém o código-fonte da plataforma digital do **Bazar Vidança**, o braço de sustentabilidade financeira da **Associação Vidança Cia de Danças do Ceará**. O objetivo deste sistema é conectar doadores e compradores à causa da inclusão social na periferia de Fortaleza.

---

## 🛠️ Stack Tecnológico Utilizado
A arquitetura do projeto foi desenhada para alta performance (SEO, rapidez) e facilidade de manutenção:
- **Framework Principal:** Next.js 16.2.4 (App Router, Server Components).
- **Linguagem:** TypeScript (Tipagem estática para evitar erros em produção).
- **Estilização:** Tailwind CSS v4 (com design utilitário responsivo).
- **Ícones:** Lucide React (Leves e escaláveis).
- **Banco de Dados:** MySQL (Relacional, garantindo integridade das vendas e do estoque).
- **ORM (Mapeamento de Banco):** Prisma Client v7.8.0 com Driver Adapter MariaDB para conexões estáveis.

---

## ✅ Checklist do que já foi feito (Fase 1 - O Catálogo)

**Infraestrutura e Banco de Dados**
- [x] Configuração da conexão com MySQL local usando endereçamento seguro (`127.0.0.1`).
- [x] Resolução de problemas de `pool timeout` usando o padrão *Singleton* no Prisma.
- [x] Expansão do modelo `Product` no Prisma para suportar campos de E-commerce: `shortDescription`, `detailedDescription`, `condition` (Novo, Seminovo, Usado), `size`, `color`, `stockCount` e Array JSON para `images`.
- [x] Adição da flag `isFeatured` (Destaque) no banco de dados.

**Painel Administrativo (`/admin`)**
- [x] Criação de formulário completo de cadastro de produtos.
- [x] Divisão do formulário em blocos (Informações Básicas, Detalhes Físicos, Textos de Venda e Fotos).
- [x] Implementação de recurso "Destacar na Vitrine Principal" via Checkbox.
- [x] Processamento de dados de forma segura usando Next.js *Server Actions*.

**Vitrine e Experiência do Usuário (Frontend)**
- [x] **Hero Section Dinâmico:** O banner principal agora puxa automaticamente o produto marcado como "Destaque" pelo admin (ou o mais recente, se não houver destaque).
- [x] **Cards Inteligentes:** Exibição do selo de condição ("Usado", "Novo") sobre a foto, preço formatado e botão bloqueado (com tag vermelha "Esgotado") quando o estoque é zero.
- [x] **Página de Detalhes (`/product/[id]`):** Rota dinâmica que exibe galeria de imagens, textos completos, badges de confiança (Compra Segura e Frete Solidário).
- [x] **Páginas Institucionais:** 
  - `/sobre`: Página contando os 43 anos de história da fundadora Ana Anália Timbó.
  - `/doar`: Central de doações otimizada para celular, com chave PIX e **QR Code Dinâmico** gerado via API.
- [x] **Navegação Global:** Header e Footer responsivos com links interligando perfeitamente todas as rotas (Home, Sobre, Doar, Admin).

---

## 🔄 Fluxos de Uso Atuais

### 1. Fluxo do Administrador
1. Acessa a rota oculta `/admin`.
2. Preenche o formulário detalhado (título, preço, descrição longa, condição, URLs das fotos).
3. (Opcional) Marca a caixa "Destacar na Vitrine Principal".
4. Ao salvar, a *Server Action* salva no MySQL e limpa o cache da aplicação (`revalidatePath`), fazendo o produto aparecer instantaneamente na Home Page.

### 2. Fluxo do Comprador / Doador
1. **Entrada:** Acessa a página inicial (`/`). É impactado pelo produto em Destaque gigante no topo ou pela vitrine abaixo.
2. **Descoberta:** Clica no card de um produto que achou interessante.
3. **Decisão:** Na página de detalhes (`/product/[id]`), ele lê toda a história daquela peça, vê a condição e decide se quer levar.
4. **Institucional:** Se quiser saber mais sobre a causa, clica em "Nossa História" ou "Doar agora", caindo nas páginas dedicadas à Cia Vidança, podendo fazer um PIX direto usando o QR Code.

---

## 🚀 O Que Falta Fazer (Próximas Fases)

O projeto está pronto para iniciar a conversão do "Catálogo" para uma "Plataforma Transacional Restrita".

### Fase 2: Autenticação e Segurança (Próximo Passo)
- [ ] Bloquear o acesso à rota `/admin` para qualquer pessoa não logada.
- [ ] Implementar sistema de Login (NextAuth / Auth.js) para o administrador.
- [ ] Criar o modelo de `User` (Usuário/Cliente) no Prisma para que os compradores possam criar contas no site (início do CRM).

### Fase 3: Carrinho e Pedidos
- [ ] Criar o contexto (Context API ou Zustand) para gerenciar o "Carrinho de Compras" global.
- [ ] Criar o modelo `Order` (Pedido) no banco de dados, conectando os produtos selecionados ao usuário logado.
- [ ] Checkout final com direcionamento para pagamento (ex: geração de PIX com o valor exato do carrinho).

### Fase 4: Gestão Avançada (Logística e BI)
- [ ] Abater automaticamente o `stockCount` no banco de dados quando um pedido for finalizado.
- [ ] Criar um Dashboard visual no `/admin` mostrando métricas de acesso, produtos mais acessados e alertas de estoque baixo.
- [ ] Integrar solução de hospedagem de imagens (ex: Vercel Blob) para que o admin faça *upload* direto do computador em vez de colar URLs.
