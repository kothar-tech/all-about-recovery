export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Schema is built from static, trusted local data only.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
