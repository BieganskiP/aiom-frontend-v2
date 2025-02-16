import Link from "next/link";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="group bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors w-full lg:w-fit lg:overflow-hidden text-center text-lg font-bold flex items-center justify-center lg:justify-end lg:ml-auto"
    >
      <span className="mr-2 lg:mr-0 lg:max-w-0 lg:opacity-0 lg:transition-all lg:duration-300 lg:whitespace-nowrap lg:group-hover:mr-2 lg:group-hover:max-w-[100px] lg:group-hover:opacity-100">
        Login
      </span>
      <LogIn className="w-5 h-5 shrink-0" />
    </Link>
  );
};

export { LoginButton };
