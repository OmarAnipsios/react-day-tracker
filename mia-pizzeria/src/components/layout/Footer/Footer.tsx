export default function Footer() {
  return (
    <footer className="footer bg-white shadow-md flex p-4 mt-6 fixed bottom-0 w-full items-center justify-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Pizzeria Bella Torino. All rights
        reserved.
      </p>
    </footer>
  );
}
