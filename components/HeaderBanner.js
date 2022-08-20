import Link from "next/link";

export const HeaderBanner = () => {
  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-l from-purple-700 via-pink-800 to-purple-700 py-1 text-xs font-medium uppercase text-gray-50 xs:text-sm md:text-base`}
    >
      {/* <a href="https://app.rouse.yoga">Sign up and get your first class <strong className="text-white tracking-wide">FREE</strong>!</a> */}
      <Link href="/holistic-corner" aria-label="Holistic Corner">
        <a
          className="underline"
          style={{
            textDecorationColor: "#60a5fa",
            textDecorationThickness: "2px",
            textUnderlineOffset: "2px",
          }}
        >
          Book Private Holistic Services!
        </a>
      </Link>
    </div>
  );
};
