/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getLogoDataUri() {
  const logoPath = path.join(process.cwd(), "public", "favicon", "apple-icon.png");
  const logoBuffer = await readFile(logoPath);

  return `data:image/png;base64,${logoBuffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #fffaf4 0%, #f7ead6 45%, #f0dcc0 100%)",
          color: "#4A0E0E",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(201, 146, 42, 0.22), transparent 35%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -140,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(201, 146, 42, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: -120,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(74, 14, 14, 0.06)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "56px 64px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 28,
                color: "#C9922A",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                fontSize: 26,
                fontFamily: "Arial, sans-serif",
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 2,
                  background: "#C9922A",
                }}
              />
              Design Education Redefined
            </div>

            <div
              style={{
                fontSize: 82,
                lineHeight: 1,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Dezine Acharya
            </div>

            <div
              style={{
                fontSize: 36,
                lineHeight: 1.3,
                color: "#6B1A1A",
                marginBottom: 32,
                maxWidth: 650,
              }}
            >
              Coaching for NID, NIFT, UCEED, NATA and CEED with reflective,
              human-centered mentorship.
            </div>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                fontFamily: "Arial, sans-serif",
                fontSize: 24,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {["NID", "NIFT", "UCEED", "NATA", "CEED"].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    border: "2px solid rgba(201, 146, 42, 0.45)",
                    background: "rgba(255, 255, 255, 0.72)",
                    padding: "12px 18px",
                    color: "#6B1A1A",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 310,
              height: 310,
              borderRadius: 40,
              background: "linear-gradient(180deg, #6B1A1A 0%, #4A0E0E 100%)",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 30px 80px rgba(58, 10, 10, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 228,
                height: 228,
                borderRadius: "50%",
                background: "#fff",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: 24,
              }}
            >
              <img
                src={logoSrc}
                alt="Dezine Acharya logo"
                width={180}
                height={180}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
