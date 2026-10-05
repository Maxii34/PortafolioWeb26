import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "6px",
            color: "#A6D63A",
          }}
        >
          {SITE_NAME.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Llevá tu negocio a internet
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: 28,
            lineHeight: 1.4,
            color: "#cbd5e1",
            maxWidth: "860px",
          }}
        >
          {SITE_DESCRIPTION}
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
