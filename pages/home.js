import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [posts, setPosts] = useState([]);

  const publishStory = () => {
    if (!title || !story) {
      alert("Please write a title and story");
      return;
    }

    const newPost = {
      title,
      story,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setStory("");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Logical Sports Media ⚽🔥
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "gray",
          fontSize: "20px",
        }}
      >
        Football News • Stories • Predictions • Videos
      </p>

      <div
        style={{
          background: "#111",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "40px",
        }}
      >
        <h2>Create New Story 📝</h2>

        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <textarea
          placeholder="Write your story here..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={publishStory}
          style={{
            marginTop: "15px",
            padding: "12px 25px",
            background: "gold",
            color: "black",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Publish Story
        </button>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h2>Latest Stories 📚</h2>

        {posts.length === 0 ? (
          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >
            No stories yet.
          </div>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "15px",
                marginTop: "20px",
              }}
            >
              <h3>{post.title}</h3>
              <p style={{ color: "gray" }}>{post.story}</p>
            </div>
          ))
        )}
      </div>

      <footer
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "gray",
        }}
      >
        © 2026 Logical Sports Media
      </footer>
    </div>
  );
}
