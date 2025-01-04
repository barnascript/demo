import RegistrationSteps from "../[components]/RegistrationSteps";

const VerifyEmail = () => {
  return (
    <section className="flex items-center sm:w-full sm:flex-col justify-center md:flex-row md:max-w-[655px] gap-[48px]">
      <div className="flex flex-col items-center text-center justify-center gap-[24px]">
        <h5>Verify your email</h5>
        <div className="flex flex-col items-center justify-center max-w-[340px] gap-[24px]">
          <p className="text-center">
            To keep a trusted and safe community, we've sent an email to{" "}
            <a
              className="p-standard-underline"
              href="mailto:matthew@tracka.com"
            >
              matthew@tracka.com
            </a>{" "}
            for verification, and you'll only do this once.
          </p>

          <p>
            I didn’t get an email,{" "}
            <a href="#" className="p-standard-underline text-bangladesh">
              Resend Mail
            </a>{" "}
          </p>

          <p className="text-sonic_silver align-center text-center">
            {" "}
            Once your email is verified, You will be automatically redirected to
            the next step
          </p>
        </div>
      </div>
      <div className=" sm:w-[80%] sm:h-[1px] md:h-[262px] md:w-[1px] bg-[#000000]"></div>
      <div>
        <RegistrationSteps />
      </div>
    </section>
  );
};

export default VerifyEmail;
