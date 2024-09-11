import { NextResponse } from "next/server";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Ejecutar el comando yt-dlp para descargar los subtítulos
    const command = `yt-dlp --write-subs --sub-lang en --skip-download ${url}`;
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      return NextResponse.json({ error: stderr }, { status: 500 });
    }

    return NextResponse.json({ message: "Subtitles downloaded successfully", output: stdout });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
