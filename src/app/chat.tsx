"use client";
// pages/api/data.js
import axios from "axios";
import { useEffect, useState } from "react";

export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("Hello");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "query_lab45",
          {
            messages: [
              {
                content: query,
                role: "user",
              },
            ],
            stream_response: false,
          },
          {
            headers: {
              Authorization: `Bearer token`,
              "Content-Type": "application/json",
            },
          }
        );

        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [query]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      setQuery(inputValue); // Set query to the current input value
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your query and hit Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <h1>Response:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>{query ? "Loading..." : "Type a query and press Enter"}</p>
      )}
    </div>
  );
}
