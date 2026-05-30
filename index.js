export default function Home() {
  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial",
      padding: "20px",
      textAlign: "center"
    }}>

      <h1 style={{fontSize: "50px"}}>
        Logical Sports Media ⚽🔥
      </h1>

      <p style={{fontSize: "20px", color: "gray"}}>
        Sports News • Football Predictions • Videos • Entertainment
      </p>

      <div style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#111",
        borderRadius: "15px"
      }}>
        <h2>Football Predictions ⚽</h2>
        <p>
          Daily match analysis, combo ideas, betting tips,
          and football updates worldwide.
        </p>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#111",
        borderRadius: "15px"
      }}>
        <h2>Sports News 📰</h2>
        <p>
          Latest transfer news, match previews,
          and breaking sports stories.
        </p>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#111",
        borderRadius: "15px"
      }}>
        <h2>Videos 🎥</h2>
        <p>
          Watch highlights, reactions,
          and trending football clips.
        </p>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "#111",
        borderRadius: "15px"
      }}>
        <h2>Stories 📚</h2>
        <p>
          Read inspiring football stories,
          motivation, and entertainment articles.
        </p>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        backgroundColor: "gold",
        color: "black",
        borderRadius: "15px",
        fontWeight: "bold"
      }}>
        VIP Section Coming Soon 🔒
      </div>

      <div style={{marginTop: "40px"}}>
        <a
          href="https://instagram.com"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Follow Us
        </a>
      </div>

      <footer style={{
        marginTop: "50px",
        color: "gray"
      }}>
        © 2026 Logical Sports Media
      </footer>

    </div>
  );
}
