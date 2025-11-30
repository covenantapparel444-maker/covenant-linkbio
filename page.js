{"id":"59255","variant":"standard","title":"Archivo listo para editar tus links"}
export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif", color: "#fff", background:"#000", minHeight:"100vh" }}>

      {/* LOGO */}
      <img src="/logo.png" alt="Covenant Logo" style={{ width: "120px", margin: "0 auto 40px" }} />

      {/* SECCIONES */}
      <a href="[PON_AQUI_EL_LINK_DE_PAGINA]" style={btn}>Página</a>
      <a href="[PON_AQUI_EL_LINK_DE_ORIGEN]" style={btn}>Origen</a>
      <a href="[PON_AQUI_EL_LINK_DE_GALLERY]" style={btn}>Gallery</a>
      <a href="[PON_AQUI_EL_LINK_DE_PLAYLIST]" style={btn}>Playlist</a>
      <a href="[PON_AQUI_EL_LINK_DE_CONTACTO]" style={btn}>Contacto</a>

      {/* REDES */}
      <div style={{ marginTop: "60px" }}>
        <a href="[PON_AQUI_TU_INSTAGRAM]" target="_blank" style={social}>Instagram</a>
        <a href="[PON_AQUI_TU_TIKTOK]" target="_blank" style={social}>TikTok</a>
        <a href="[PON_AQUI_TU_YOUTUBE]" target="_blank" style={social}>YouTube</a>
        <a href="[PON_AQUI_TU_KICK]" target="_blank" style={social}>Kick</a>
      </div>

    </main>
  );
}

const btn = {
  display: "block",
  padding: "18px 24px",
  margin: "12px auto",
  width: "80%",
  color: "#fff",
  background: "#111",
  border: "1px solid #333",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: "18px"
};

const social = {
  display: "block",
  color: "#aaa",
  margin: "8px 0",
  textDecoration: "none"
};

---

# 📌 LO ÚNICO QUE DEBES HACER ES ESTO:

### 👉 Reemplazar **ESTO**:

`[PON_AQUI_EL_LINK_DE_PAGINA]`  
`[PON_AQUI_EL_LINK_DE_ORIGEN]`  
`[PON_AQUI_EL_LINK_DE_GALLERY]`  
`[PON_AQUI_EL_LINK_DE_PLAYLIST]`  
`[PON_AQUI_EL_LINK_DE_CONTACTO]`

`[PON_AQUI_TU_INSTAGRAM]`  
`[PON_AQUI_TU_TIKTOK]`  
`[PON_AQUI_TU_YOUTUBE]`  
`[PON_AQUI_TU_KICK]`

---

# 📌 EJEMPLO PARA QUE LO VEAS CLARO:

Si tu Instagram es:

```
https://instagram.com/covenant
```

Entonces cambias:

```
[PON_AQUI_TU_INSTAGRAM]
```

por

```
https://instagram.com/covenant
```

---

# 📌 Y EL LOGO:

Pon tu archivo del logo dentro de:

```
/public/logo.png
```

Debe llamarse exactamente:

```
logo.png
```

---

# ❗ LISTO. NO HAY QUE TOCAR NADA MÁS.

---

Si quieres, te puedo hacer un **video en texto paso a paso** de cómo crear el proyecto en Vercel + GitHub para que no te pierdas. ¿Quieres eso?
