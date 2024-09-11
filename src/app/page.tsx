import { UrlHandler } from "./ui/urlhandler/url-hanlder";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">SubSynth</h1>
      <p className="text-lg mb-8 text-center">
        Download YouTube subtitles in various languages and use AI to summarize and interpret key sections.
      </p>
      <div className="flex items-center w-2/4">
        <UrlHandler></UrlHandler>
      </div>
    </div>
  );
}
