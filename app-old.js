const http = require("http");

// * Crear el servidor
http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/csv",
      "Content-Disposition": "attachment; filename=lista.csv",
    });

    const persona = {
      id: 1,
      name: "Josue",
    };

    res.write(JSON.stringify(persona));
    res.end();
  })
  .listen(8080);

console.log(`Escuchando en el puerto 8080`);
