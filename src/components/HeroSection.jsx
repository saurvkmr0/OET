import EmailInput from "./EmailInput";

function HeroSection() {
    return(
        <div id="home" className="relative mt-20 flex flex-col items-center text-[#024B6A]">
      {/* Watermark Text */}
      <div className="absolute bottom-12 inset-0 flex items-center justify-center">
        <span className="overflow-hidden mt-20 tracking-wider text-[#88D2F2] text-[40vw] font-bold opacity-45 z-10">
          OET
        </span>
      </div>

      {/* Main Content */}
      <p className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold z-10">Occupational</p>
      <p className="text-[4rem] sm:text-[6rem] md:text-[8rem]font-bold text-transparent custom-stroke z-20">English Test</p>
      <p className="text-[1rem] md:text-[2rem] w-[400px] md:w-[800px] text-center pb-8 z-20">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>
      <EmailInput />
    </div>
    )
}

export default HeroSection;