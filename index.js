const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

// Додавання body-parser для обробки JSON запитів
app.use(bodyParser.json());

// Існуючий маршрут
app.get('/', (req, res) => {
  res.send('Hello from Docker on DigitalOcean!');
});

// Новий маршрут - Отримати список користувачів
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];
  res.json(users);
});

// Новий маршрут - Додавання користувача
app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: 'User created successfully!',
    user: newUser
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
