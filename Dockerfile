# Вибираємо базовий образ
FROM node:14

# Встановлюємо робочу директорію в контейнері
WORKDIR /usr/src/app

# Копіюємо package.json і встановлюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо решту файлів
COPY . .

# Відкриваємо порт
EXPOSE 8080

# Запускаємо застосунок
CMD ["npm", "start"]
