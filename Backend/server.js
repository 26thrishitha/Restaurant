import app from "./app.js";

const PORT = process.env.PORT || 4000; // ✅ fallback only for local

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
