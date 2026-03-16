export default function ImageViewer({ src, style }) {
  return (
    <div className="image-viewer" style={{ width: "100%", height: "100%" }}>
      <img
        src={src}
        alt="Scripture Page"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          ...style
        }}
      />
    </div>
  );
}