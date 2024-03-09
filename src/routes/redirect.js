import express from "express"
import { db } from "../connect.js";

const router = express.Router();


router.get("/*", (req, res) => {
  const shortUrl = req.params[0];

  // Use parameterized queries to avoid SQL injection
  db.all("SELECT url FROM urldirectory WHERE shortern=?", [shortUrl], (err, rows) => {
    if (err) {
      res.status(404).send("404! URL not found");
    } else {
      if (rows.length > 0) {
        const originalUrl = rows[0].url;
        res.send(`
          <p>Please wait 3 seconds while we redirect you to the original URL: "${originalUrl}"</p>
          <script>
            setTimeout(() => {
              const url = "${originalUrl}";
              if (!url.startsWith('https://') && !url.startsWith('http://')) {
                location.replace("https://" + url);
              } else {
                location.replace(url);
              }
            }, 3000);
          </script>
        `);
      } else {
        res.status(404).send("404! URL not found");
      }
    }
  });
});

export default router;
