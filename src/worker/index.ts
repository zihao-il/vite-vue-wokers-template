import {Hono} from "hono";

type Env = {
    DB: D1Database;
};

const app = new Hono<{ Bindings: Env }>();

app.post("/api/", (c) => c.json({name: "Cloudflare"}));


export default app;
