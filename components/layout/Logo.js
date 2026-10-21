import Image from "next/image";

export default function Logo({
  className = "",
  iconSize = 38,
  height,
  priority = false,
  ...props
}) {
  const finalHeight = height || iconSize || 38;
  const finalWidth = Math.round(finalHeight * 2.463);

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/logo.png"
        alt="WITS PERFUMES"
        width={finalWidth}
        height={finalHeight}
        priority={priority}
        className="h-auto w-auto object-contain select-none"
        style={{ maxHeight: `${finalHeight}px`, width: "auto" }}
      />
    </div>
  );
}

