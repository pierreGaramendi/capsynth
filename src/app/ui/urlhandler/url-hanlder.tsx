"use client";

import { useState } from "react";

export const UrlHandler = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.message);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <input
        value={videoUrl}
        onChange={handleInputChange}
        type="text"
        className="p-3 border border-gray-700 rounded-l-lg w-full bg-gray-800 text-white placeholder-gray-400"
        placeholder="Enter YouTube video URL"
      />
      <button onClick={handleButtonClick} className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
        Process
      </button>
    </>
  );
};
