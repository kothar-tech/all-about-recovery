import { ImageResponse } from "next/og";

export const alt = "All About Recovery — Registered NDIS Provider";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf1e0",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#c66d39",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 26, color: "#543332", letterSpacing: 2, textTransform: "uppercase", display: "flex" }}>
            All About Recovery
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.04,
              color: "#543332",
              fontWeight: 600,
              letterSpacing: -2,
              display: "flex",
              maxWidth: 940,
            }}
          >
            We empower people with psychosocial disabilities
          </div>
          <div style={{ fontSize: 30, color: "#6b4746", display: "flex" }}>
            Registered NDIS provider · Sydney · Dubbo · Tamworth
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["#68744b", "#c66d39", "#678f97"].map((c) => (
              <div key={c} style={{ width: 64, height: 8, borderRadius: 999, background: c, display: "flex" }} />
            ))}
          </div>
          <div style={{ fontSize: 26, color: "#543332", display: "flex" }}>
            allaboutrecovery.com.au
          </div>
        </div>
      </div>
    ),
    size,
  );
}
