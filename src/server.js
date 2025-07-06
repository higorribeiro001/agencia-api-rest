import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em ${process.env.APP_URL}:${port}/docs`);
})