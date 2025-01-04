import Image from "next/image";
import checked from "../[assets]/icons/checked.svg";
import pending from "../[assets]/icons/pending.svg";
import not_checked from "../[assets]/icons/not-checked.svg";

const RegistrationSteps = () => {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <div className="flex items-center gap-[10px]">
        <Image src={checked} />
        <p className="text-bangladesh">Sign Up</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <Image src={pending} />
        <p className="text-hade">Verify your email</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <Image src={not_checked} />
        <p className="text-sonic-silver">Secure your account</p>
      </div>
      <div className="flex items-center gap-[10px]">
        <Image src={not_checked} />
        <p className="text-sonic-silver">Welcome!</p>
      </div>
    </div>
  );
};

export default RegistrationSteps;
