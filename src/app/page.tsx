export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">SubSynth</h1>
      <p className="text-lg mb-8 text-center">
        Download YouTube subtitles in various languages and use AI to summarize and interpret key sections.
      </p>
      <div className="flex items-center w-2/4">
        <input
          type="text"
          className="p-3 border border-gray-700 rounded-l-lg w-full bg-gray-800 text-white placeholder-gray-400"
          placeholder="Enter YouTube video URL"
        />
        <button className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">Process</button>
      </div>
    </div>
  );
}
