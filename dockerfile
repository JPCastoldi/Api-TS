# Use a imagem base oficial do Node.js
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto

# Copie o restante do código da aplicação para o diretório de trabalho do contêiner
COPY . .

# Gere o cliente Prisma
RUN npx prisma generate

# Compile o código TypeScript
RUN npm run build

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/server.js"]
