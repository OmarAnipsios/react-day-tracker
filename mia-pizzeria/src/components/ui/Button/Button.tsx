export default function Button({
  children,
  onClick,
  style,
  type,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      className="w-full py-4 px-6 bg-transparent border-2 rounded-lg font-semibold text-center transition-all duration-200 hover:bg-olive-300 hover:shadow-md hover:cursor-pointer active:scale-[0.98]"
      onClick={onClick}
      type={type}
      style={{ ...style }}
    >
      {children}
    </button>
  );
}
