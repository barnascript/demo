import Image from "next/image";
import VerifyEmail from "./verify-email/page";

export default function Home() {
  return (
    <div className="max-w-2xl m-auto mt-[200px] px-4">
      <VerifyEmail />
    </div>
  );
}
