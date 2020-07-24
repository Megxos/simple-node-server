const http = require("http");

const app = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.write("Hello World, welcome to WeJapa Internships");
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write("You reached an undefined route");
        res.end();
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT :${PORT}`);
});