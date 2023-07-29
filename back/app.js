const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const db = require("./db");

// const whiteList = ["http://127.0.0.1:5173"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: whiteList }));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  db.getAllCabin((data) => {
    res.json(data);
  });
});

app.put("/edit/:id", (req, res) => {
  const dataCabin = {
    nombre_inquilino: req.body.nombre_inquilino,
    fecha_ingreso: req.body.fecha_ingreso,
    fecha_salida: req.body.fecha_salida,
  };

  db.updateCabin(req.params.id, dataCabin, (data) => {
    res.json(data);
  });
});

app.put("/resetCabin/:id", (req, res) => {
  const dataCabin = {
    nombre_inquilino: req.body.nombre_inquilino || "",
    fecha_ingreso: req.body.fecha_ingreso || "",
    fecha_salida: req.body.fecha_salida || "",
  };

  db.emptyCabin(req.params.id, dataCabin, (data) => {
    res.json(data);
  });
});

///////////////////////////////////////////////////////////////////////

app.get("/tasks", (req, res) => {
  db.getAllTask((data) => {
    res.json(data);
  });
});

app.post("/addTask", (req, res) => {
  const item = {
    cabania: req.body.cabania,
    nombre_inquilino: req.body.nombre_inquilino,
    fecha_ingreso: req.body.fecha_ingreso,
    fecha_salida: req.body.fecha_salida,
  };

  db.addTask(item, (data) => {
    res.json(data);
  });
});

app.delete("/tasks/:id", function (req, res) {
  db.deleteTask(req.params.id, (data) => {
    res.json(data);
  });
});

app.put("/editTask/:id", function (req, res) {
  const dataTask = {
    cabania: req.body.cabania,
    nombre_inquilino: req.body.nombre_inquilino,
    fecha_ingreso: req.body.fecha_ingreso,
    fecha_salida: req.body.fecha_salida,
  };
  db.editTask(req.params.id, dataTask, (data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
