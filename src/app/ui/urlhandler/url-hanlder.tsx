"use client";
import { useState } from "react";
import ExtractButton from "../ExtractButton/ExtractButtonProps";
import { LinkInput } from "../LinkInput/LinkInput";
import { ComboboxDemo } from "../CustomCombobox/CustomCombobox";
import { TextareaCustome } from "../TextAreaCustome/TextareaCustome";

export const UrlHandler = () => {
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [videoID, setVideoID] = useState("taiQcrVpXlQ");
  const [lang, setLang] = useState("es");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      const response = await fetch("/api/getSubtitles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoID, lang }),
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data.captions);
        setLoading(false);
      } else {
        setError(data.error);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
        <LinkInput
          value={videoID}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVideoID(e.target.value)}
          disabled={loading}
        />
        <ComboboxDemo disabled={loading} selectedValue={lang} onValueChange={(value) => setLang(value)} />
        <ExtractButton type="submit" isLoading={loading} />
      </form>
      {result ? <TextareaCustome className="mt-4" value={result} /> : null}
      {error ? <div className="text-red-900">{error}</div> : null}
    </>
  );
};
