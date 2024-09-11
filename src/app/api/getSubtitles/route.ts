import { NextRequest, NextResponse } from "next/server";
import { getSubtitles } from "youtube-caption-extractor";

export async function POST(request: NextRequest) {
  try {
    const { videoID, lang } = await request.json();
    const captions = await getSubtitles({ videoID, lang });
    const fullCaptions = transformCaptionsToText(captions);
    return NextResponse.json({ captions: fullCaptions });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}

function transformCaptionsToText(captions: { start: string; dur: string; text: string }[]): string {
  return captions.map((caption) => caption.text).join(" ");
}
