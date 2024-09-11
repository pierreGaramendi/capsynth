import { NextRequest, NextResponse } from "next/server";
import { getSubtitles, getVideoDetails } from "youtube-caption-extractor";

export async function POST(request: NextRequest) {
  try {
    const { videoID, lang } = await request.json();
    const captions = await getSubtitles({ videoID, lang });
    const fullCaptions = transformCaptionsToText(captions);
    return NextResponse.json({ captions: fullCaptions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

function transformCaptionsToText(captions: { start: string; dur: string; text: string }[]): string {
  return captions.map((caption) => caption.text).join(" ");
}
