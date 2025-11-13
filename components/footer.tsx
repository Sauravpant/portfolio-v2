"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-4">
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl p-2 mt-2">
        © Saurav Pant, {currentYear} All Rights Reserved{" "}
      </p>
    </footer>
  );
}
