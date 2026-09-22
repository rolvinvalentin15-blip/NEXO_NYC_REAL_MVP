require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1>NEXO NYC</h1>
    <p>Servicios y trabajos rápidos en Nueva York.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`NEXO NYC funcionando en el puerto ${PORT}`);
});
