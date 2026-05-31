export default function PostForm() {
  return (
    <div style={{
      background: "#111",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "30px"
    }}>
      <h2>Create New Story 📝</h2>

      <input
        type="text"
        placeholder="Story Title"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px"
        }}
      />

      <textarea
        placeholder="Write your story here..."
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
          marginTop: "10px"
        }}
      />

      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "gold",
          border: "none",
          fontWeight: "bold"
        }}
      >
        Publish Story
      </button>
    </div>
  );
}
