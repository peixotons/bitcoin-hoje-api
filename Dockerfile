# Etapa de build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de produção
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm ci --production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]

