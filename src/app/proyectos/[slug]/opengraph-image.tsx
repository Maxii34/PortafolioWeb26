import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";
import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#081826",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "6px",
            color: "#A6D63A",
          }}
        >
          {SITE_NAME.toUpperCase()} — {project?.type.toUpperCase() ?? "PROYECTO"}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "950px",
          }}
        >
          {project?.title ?? "Proyecto"}
        </div>
        <div
          style={{
            marginTop: "36px",
            width: "220px",
            height: "10px",
            borderRadius: "999px",
            backgroundColor: "#A6D63A",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
