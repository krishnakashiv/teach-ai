import Image from "next/image";
import TeachLogo from "../../public/teachai.svg"

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center justify-center text-gray-200 text-2xl ${className}`}
    >
      <Image
        src={TeachLogo}
        alt="teach-logo"
        width="230"
        height="50"
        className="ml-3"
      />{" "}
      
    </header>
  );
}
