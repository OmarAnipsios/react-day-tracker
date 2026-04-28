export default function Card({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow rounded-xl my-4 md:my-0 mx-4 ${disabled ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
}
