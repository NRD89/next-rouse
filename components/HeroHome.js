import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Snowfall from "react-snowfall";

const HeroHome = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`01/02/2022`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      // setYear(new Date().getFullYear());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="text-xs md:text-sm font-medium text-white">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="relative w-full overflow-hidden">
      <Snowfall
        speed={[-0.5, 0.5]}
        snowflakeCount={150}
      />
      {/* Background image */}
      <div className="absolute inset-0 h-full max-h-[748px] w-full box-content -z-1">
        <Image
          className="absolute inset-0 w-full h-full max-h-[748px] object-cover opacity-40"
          src="https://res.cloudinary.com/rouse-yoga/image/upload/c_scale,f_auto,q_55,w_2000/v1616231889/Alfred_Beach_W2_3_tue3xe.jpg"
          // src="c_scale,f_auto,q_auto:eco,w_1500/v1610702114/rouse-hero-image_f3md0w.jpg"
          // width={1440}
          // height={577}
          alt="About"
          layout="fill"
          quality="75"
          priority
        />
        {/* <div className="absolute top-[25%] left-[45%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-lg opacity:60 dark:opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[20%] left-[35%] w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-lg opacity:60 dark:opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[25%] left-[25%] w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-lg opacity:60 dark:opacity-70 animate-blob"></div> */}
        <div
          className="absolute h-full inset-0 bg-gradient-to-t from-white dark:from-black"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 w-full h-full mix-blend-color opacity-80 dark:opacity-80  bg-gradient-to-tr from-blue-900 dark:from-blue-400 to-blue-500 dark:to-blue-200"
          // style={{
          //   // background: `linear-gradient(-45deg, #267DEB, #5D45F9, #000000)`,
          //   backgroundSize: `300% 300%`,
          //   height: `100%`,
          //   backgroundRepeat: `no-repeat`,
          //   perspective: `1000px`,
          //   // backfaceVisibility: `hidden`,
          // }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-32 md:pt-40 md:pb-20">
          <div className="text-center">
            <div className="relative flex justify-center items-center">
              <div
                className="relative inline-flex items-start"
                data-aos="fade-up"
              ></div>
              {/* <div className="absolute -top-20 -left-2 w-96 h-96 bg-purple-500 rounded-full mix-blend-color filter blur-xl "></div>
              <div className="absolute -top-8 left-80 w-96 h-96 bg-blue-500 rounded-full mix-blend-color filter blur-xl "></div> */}
              <div className="max-w-4xl" data-aos="fade-down">
                <div className="bg-red-500 w-64 md:w-72 mx-auto rounded-lg mb-4">
                  {timerComponents.length ? (
                    timerComponents
                  ) : (
                    <span>Time's up!</span>
                  )}
                </div>
                <h1 className="mb-4 font-red-hat-display text-4xl md:text-7xl tracking-tight font-black uppercase text-indigo-900 dark:text-blue-300">
                  ❄️ Holiday <span className="text-blue-50">Sale</span> ❄️
                  {/* <span className="h1 sm:h1 md:text-7xl">Empower</span> */}
                  {/* <br />
                  <span className="h2-hero md:text-6xl uppercase dark:text-gray-100">
                    Your Yoga Practice
                  </span> */}
                </h1>
                <p
                  className="text-xl md:text-2xl font-medium text-gray-700 max-w-[640px] mx-auto dark:text-gray-100"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  Rouse Yoga offers the gift of{" "}
                  <strong
                    className="font-black text-gray-900 dark:text-white underline"
                    style={{ textDecorationColor: "rgb(147, 197, 253)" }}
                  >
                    $10
                  </strong>{" "}
                  off Monthly and{" "}
                  <strong
                    className="font-black text-gray-900 dark:text-white underline"
                    style={{ textDecorationColor: "rgb(147, 197, 253)" }}
                  >
                    $300
                  </strong>{" "}
                  off Yearly subscriptions!
                </p>
                {/* <p
                  className="text-xl font-medium text-gray-700 max-w-[640px] mx-auto dark:text-gray-300"
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  Discover the healing power of Yoga with classes designed to
                  empower your body, mind, and soul.
                </p> */}
                {/* CTA form */}
                <div
                  className="flex flex-col justify-center max-w-sm mx-auto sm:max-w-md mt-8"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  {/* <small className="text-sm mb-4 text-gray-700 dark:text-gray-300 font-red-hat-display">
                    Try our Digital Membership free for 7 days
                  </small> */}
                  <Button buttonText="Subscribe and Save!" btnPriority="cta" />
                  <div className="max-w-3xl mx-auto text-center pb-3">
                    <h2 className="text-sm mt-7 font-medium font-red-hat-display">
                      As Seen On:
                    </h2>
                  </div>
                  <div
                    className="grid gap-2 lg:gap-6 grid-cols-4 text-center"
                    data-aos-id-stats
                  >
                    {/* 1st item */}
                    <div
                      className="bg-transparent py-1 px-4"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                    >
                      <div className="text-gray-900 dark:text-gray-100 flex justify-center items-center">
                        <svg
                          className="fill-current"
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M46.175 7.24995C37.2 8.87495 30.325 15.3499 28.225 24.1249C27.775 26.0749 27.725 26.8749 27.825 29.9999C27.95 34.0249 28.3 35.5249 29.825 38.8499C32.325 44.2249 37.15 48.5249 42.875 50.4249C44.75 51.0499 45.15 51.0999 49.625 51.0999C54.75 51.1249 55.875 50.9249 59.125 49.3249C62.3 47.7499 66.675 43.9749 67.75 41.8499C67.95 41.4499 68.375 40.7249 68.675 40.2499C69.55 38.8499 70.7 35.7249 71.15 33.4749C71.8 30.2249 71.55 25.5999 70.525 22.4999C68.125 15.1249 62.675 9.87495 55.175 7.72495C53.15 7.14995 48.175 6.87495 46.175 7.24995V7.24995ZM53.4 17.0249C59.625 18.1249 65.325 22.0749 68.95 27.8499L69.725 29.0499L69.125 30.2249C67.35 33.6999 63.475 37.3249 59.375 39.3749C55.85 41.1499 54.35 41.5249 50.475 41.6749C45.725 41.8749 42.125 40.9499 38.125 38.4999C34.85 36.4999 31.575 33.0749 30.025 30.0499L29.5 29.0249L31.05 26.7499C34.325 21.8749 39.5 18.3749 45.125 17.1749C47.2 16.7249 51.325 16.6499 53.4 17.0249V17.0249Z" />
                          <path d="M47.075 17.6246C42.85 18.5496 39.35 21.8746 38.125 26.0996C37.8 27.2246 37.725 28.1746 37.8 29.8996C37.9 31.8996 38.05 32.4746 38.825 34.0996C40.4 37.4246 43.025 39.6746 46.3 40.5246C53.45 42.3996 60.275 38.0996 61.2 31.1246C61.75 27.0746 60.775 23.8746 58.2 21.0996C56.5 19.2996 54.425 18.1246 52.075 17.6246C50.025 17.1746 49.1 17.1746 47.075 17.6246V17.6246ZM16.875 53.9746C9.375 54.7496 2.6 60.6746 0.825 67.9996C0.225 70.5496 0.225 75.6746 0.825 78.1996C2.1 83.4996 5.7 87.9746 10.75 90.4996C15.675 92.9746 23.8 92.9996 28.7 90.5246C31 89.3746 34.75 86.3246 34.75 85.6246C34.75 85.4996 33.575 84.1996 32.15 82.7746L29.55 80.1996L28.125 81.3496C22.85 85.6246 16.675 85.6996 12.475 81.5246C6.95 75.9746 8.5 65.6496 15.3 62.6496C19.25 60.8996 23.875 61.6246 27.5 64.5496C28.325 65.1996 29.1 65.7496 29.225 65.7496C29.35 65.7496 29.875 65.2246 30.4 64.5746C30.95 63.9246 32.075 62.5996 32.925 61.6246C33.8 60.6746 34.5 59.7496 34.5 59.5996C34.5 59.2996 33.05 58.0746 31.375 56.9496C29.9 55.9496 27.325 54.8246 25.625 54.3996C23.8 53.9496 19.25 53.7246 16.875 53.9746V53.9746ZM81.15 54.2746C79.3 54.7246 76.65 56.1996 75.325 57.4996C74.575 58.2496 73.675 59.4746 73.2 60.4496C72.425 61.9996 72.375 62.3246 72.3 64.9996C72.175 68.5996 72.65 70.0496 74.575 72.1746C76.175 73.8996 78.475 75.0496 83 76.3746C88.975 78.0996 89.5 78.2746 90.55 79.0746C92.5 80.5746 92.4 82.5746 90.35 83.9996C89.125 84.8246 85.675 84.9996 83.275 84.3746C81.25 83.8496 78.575 82.5246 76.925 81.1996C75.725 80.2746 75.625 80.2246 75.325 80.6746C75.125 80.9246 74.625 81.5246 74.15 81.9996C73.7 82.4746 72.75 83.6246 72.025 84.5746C70.525 86.4746 70.525 86.4746 72.425 87.7996C75.7 90.0496 78.075 91.0746 81.55 91.7496C85.975 92.6246 91.2 92.2496 94.2 90.8246C94.95 90.4746 96.25 89.5246 97.125 88.7246C98.35 87.5746 98.85 86.8746 99.35 85.6246C99.925 84.1496 100 83.6746 100 80.6496C100 76.8746 99.725 75.8246 98.225 74.1496C96.4 72.0746 93.725 70.7746 87.75 69.0746C82 67.4746 80.725 66.6746 80.675 64.6496C80.65 63.5746 81.325 62.5496 82.525 61.9246C83.825 61.2246 87.575 61.4496 89.75 62.3496C91.675 63.1496 93.15 63.8996 93.975 64.5496C94.8 65.1746 95.075 65.1246 95.625 64.1746C95.875 63.7496 96.825 62.3746 97.7 61.1496C98.925 59.4496 99.25 58.8246 99.075 58.5246C98.625 57.7996 94.9 55.7996 92.5 54.9746C90.25 54.1996 89.9 54.1496 86.125 54.0996C83.925 54.0496 81.675 54.1246 81.15 54.2746V54.2746ZM37.5 73.1496V91.7996L48.825 91.6746C60.775 91.5746 60.95 91.5496 63.75 90.2996C67.625 88.5746 69.775 84.9246 69.425 80.6246C69.15 77.1746 67.625 74.7996 64.6 73.0996L63.025 72.2246L64.225 71.1746C66.65 69.0746 67.225 67.6996 67.25 64.0996C67.25 61.7746 67.2 61.4496 66.475 60.0496C65.625 58.3246 63.775 56.5496 61.95 55.7496C59.25 54.5746 58.5 54.4996 47.7 54.4996H37.5V73.1496ZM57.275 62.6996C57.875 63.0496 58.35 63.6246 58.6 64.2496C59.125 65.5496 59.1 65.8746 58.5 67.1246C57.625 68.9496 55.525 69.4746 49.325 69.4996H45.75V61.9746L51.075 62.0496C56.075 62.1246 56.425 62.1496 57.275 62.6996V62.6996ZM58.8 77.1746C60.275 77.8496 61 78.9496 61 80.5496C61 81.9496 60.175 83.0746 58.625 83.7746C57.75 84.1746 56.9 84.2496 51.7 84.2496H45.75V76.4496L51.7 76.5496C57.175 76.6246 57.725 76.6746 58.8 77.1746V77.1746Z" />
                        </svg>
                      </div>
                    </div>
                    {/* 2nd item */}
                    <div
                      className="bg-transparent py-1 px-4"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                      data-aos-delay="100"
                    >
                      <div className="text-gray-900 dark:text-gray-100 flex justify-center items-center">
                        <svg
                          className="fill-current"
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M99.2808 50.5625C99.2808 77.4688 77.4683 99.2812 50.562 99.2812C23.6558 99.2812 1.84326 77.4688 1.84326 50.5625C1.84326 23.6563 23.6558 1.84375 50.562 1.84375C77.4683 1.84375 99.2808 23.6563 99.2808 50.5625ZM16.0095 32.3018V42.2424H16.0063C16.0063 46.0486 18.347 48.1893 22.8782 48.1424C27.3126 48.1424 29.7501 46.0455 29.7501 42.1955V32.3018H25.322V40.9268C25.322 42.6361 25.1251 44.2924 22.8845 44.2924C20.6407 44.2924 20.447 42.633 20.447 40.9268V32.3018H16.0095ZM33.0688 42.9268L30.9251 45.8986C31.897 46.9705 34.0938 48.1893 36.9688 48.1424C40.8657 48.1424 43.0126 45.8986 43.0126 42.9268C43.0126 40.0518 41.0595 38.8799 38.5282 38.0986C38.3683 38.0435 38.21 37.9914 38.0555 37.9406C36.9835 37.5881 36.0907 37.2945 36.0907 36.4424C36.0907 35.858 36.5782 35.3705 37.747 35.3705C38.3263 35.3658 38.9 35.4852 39.4293 35.7207C39.9587 35.9563 40.4314 36.3025 40.8157 36.7361L42.8157 33.7643C41.647 32.6893 39.8907 31.958 37.5032 31.958C34.0907 31.958 31.6532 33.958 31.6532 36.883C31.6532 39.5643 33.6532 40.733 35.8938 41.4143C37.6001 41.9018 38.5751 42.2455 38.5751 43.3174C38.5751 44.2424 37.8938 44.7299 36.7251 44.7299C35.2126 44.7299 33.8501 43.9018 33.0688 42.9268ZM53.8345 32.3018H48.9595C48.9595 32.3018 43.2063 47.8486 43.1595 47.8486H47.6907L48.422 45.608H54.272L55.0032 47.8486H59.6314L53.8345 32.3018ZM53.1491 42.0955L51.9313 38.3455C51.6894 37.5813 51.5107 36.7984 51.397 36.0049H51.2501C51.1355 36.7985 50.9557 37.5814 50.7126 38.3455L49.4938 42.0955H53.1491ZM16.0313 56.9299H19.8813V68.8705H24.3126V56.9299H28.1688V53.3236H16.0313V56.9299ZM36.9907 53.0268C31.1907 53.0268 28.4595 57.2705 28.4595 61.1205C28.4595 64.9705 31.1907 69.2111 36.9907 69.1643C42.7907 69.1643 45.522 64.9236 45.522 61.1205C45.522 57.3174 42.7907 53.0268 36.9907 53.0268ZM36.9907 56.8799C39.1845 56.8799 40.9876 58.3393 40.9876 61.1205C40.9876 63.8986 39.1345 65.3111 36.9907 65.3111C34.847 65.3111 33.0438 63.8986 33.0438 61.1205C33.0438 58.3424 34.847 56.8799 36.9907 56.8799ZM52.8782 53.3236H47.1313V68.9205H52.8814C58.2876 68.9205 61.5063 65.8986 61.5063 61.1205C61.5063 56.2455 58.3876 53.3236 52.8782 53.3236ZM52.5876 65.3111H51.6126V56.9299H52.5876C55.4626 56.9299 56.9751 58.2924 56.9751 61.1236C56.9751 63.9486 55.4626 65.3111 52.5876 65.3111ZM71.5532 53.3236H66.6782V53.3205C66.6782 53.3205 60.9251 68.8705 60.8782 68.8705H65.4095L66.1407 66.6268H71.9907L72.722 68.8705H77.3501L71.5532 53.3236ZM69.6501 59.3674L70.8657 63.1174H67.2126L68.4314 59.3674C68.6747 58.6022 68.8544 57.8183 68.9688 57.0236H69.1126C69.227 57.8183 69.4068 58.6022 69.6501 59.3674ZM73.6938 53.3705L79.4939 63.3643H79.5439V68.9205H84.222V63.3643L90.022 53.3705H85.2939L83.2001 57.2205C82.7095 58.0486 82.1251 59.2674 81.9813 60.0955H81.8813C81.7376 59.2674 81.1001 58.0486 80.6626 57.2205L78.5688 53.3705H73.6938Z"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* 3rd item */}
                    <div
                      className="bg-transparent py-1 px-4"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                      data-aos-delay="200"
                    >
                      <div className="text-gray-900 dark:text-gray-100 flex justify-center items-center">
                        <svg
                          className="fill-current"
                          width="122"
                          height="100"
                          viewBox="0 0 122 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M120.304 70.9854H120.083C118.761 67.7247 117.261 64.539 115.59 61.4425H117.057C118.217 63.6747 119.298 65.9354 120.304 68.2389V70.989V70.9854ZM1.03531 14.6925C6.90084 12.7135 12.9452 11.3117 19.0827 10.5068L20.8314 1.37109H34.9995L31.8233 9.66395C35.6347 9.65324 39.4391 9.87824 43.2256 10.3318L47.6437 1.37109H63.2108L55.7948 12.6925C65.634 15.2534 75.0004 19.3733 83.5386 24.8961C85.2409 25.9925 86.8933 27.1461 88.4957 28.3425H86.2473C76.8111 21.6595 66.2363 16.7543 55.0418 13.8675L45.9735 28.0104H39.464V37.6461L23.4045 63.9854H18.2654V72.7925L1.80617 98.6282H1.28155L42.626 11.5711C38.889 11.1361 35.1286 10.9334 31.3665 10.964L1.14951 98.6247H1.03174V14.6925H1.03531ZM1.03531 97.0068L18.79 11.8854C12.7713 12.7348 6.84914 14.1665 1.10668 16.1604H1.03174V97.0068H1.03531Z" />
                          <path d="M51.069 50.4269H59.8269V42.2305H51.069V38.3198H61.7254L61.1437 30.1055H42.1578V60.1912H51.069V50.4269V50.4269ZM88.106 60.1055H97.6846L102.049 52.7233L106.525 60.1126H116.324L106.874 44.5233L115.386 30.1555H105.679L102.021 36.3948L98.2271 30.134H88.3558L97.1207 44.5948L88.106 60.1019V60.1055ZM76.9642 60.434C81.0358 60.4885 84.9628 58.925 87.8843 56.0864C90.8058 53.2477 92.4833 49.3656 92.5491 45.2912C92.3794 41.146 90.5715 37.238 87.5231 34.4265C84.4748 31.615 80.4354 30.1301 76.2933 30.2983C72.3739 30.4635 68.6597 32.0972 65.8878 34.8751C63.1159 37.653 61.4888 41.3722 61.3293 45.2948C61.3605 47.3144 61.7889 49.3081 62.5901 51.162C63.3913 53.0159 64.5496 54.6937 65.9988 56.0995C67.448 57.5054 69.1598 58.6118 71.0364 59.3555C72.9129 60.0992 74.9175 60.4657 76.9356 60.434H76.9642ZM74.2091 38.6912C74.2148 37.9778 74.4937 37.2939 74.9883 36.7802C75.483 36.2666 76.1557 35.9625 76.8678 35.9305C77.5998 35.9454 78.2986 36.2394 78.8212 36.7525C79.3439 37.2656 79.6511 37.959 79.68 38.6912V51.459C79.6365 52.1555 79.3293 52.8091 78.8211 53.2869C78.3129 53.7646 77.6418 54.0306 76.9446 54.0306C76.2473 54.0306 75.5762 53.7646 75.068 53.2869C74.5598 52.8091 74.2526 52.1555 74.2091 51.459V38.6912ZM53.0997 82.6519H62.1644V76.6305H53.0997V72.5376H64.1451V66.0233H46.1048V94.1555H64.2807V87.3876H53.0997V82.6519V82.6519ZM92.1137 66.0233L88.6377 82.1269L85.2438 66.0233H79.2447L76.0149 82.2912L72.646 66.0233H65.4941L71.9857 94.1555H78.5059L81.7 78.0305L84.9904 94.1519H91.3785L97.8952 66.0233H92.1137V66.0233ZM115.793 78.734C113.93 77.0126 111.796 76.5555 109.397 75.8769C106.564 75.0769 105.001 74.9876 105.001 73.3376C105.028 73.0465 105.113 72.7638 105.25 72.5055C105.387 72.2472 105.574 72.0185 105.799 71.8325C106.024 71.6464 106.284 71.5066 106.564 71.4211C106.843 71.3355 107.137 71.306 107.427 71.334H107.445C108.321 71.2636 109.193 71.5094 109.904 72.027C110.614 72.5446 111.115 73.2997 111.317 74.1555L117.441 72.109C116.89 70.0334 115.646 68.2087 113.917 66.9374C112.187 65.6662 110.075 65.0249 107.931 65.1198C101.535 65.1198 97.6239 69.0555 97.6239 74.3555C97.6239 78.9376 100.283 81.1912 105.611 82.784C108.794 83.7483 110.482 83.6733 110.482 85.7233C110.482 86.8019 109.483 87.6519 107.824 87.6519C106.768 87.772 105.706 87.4828 104.856 86.8439C104.007 86.2049 103.434 85.2646 103.255 84.2162L96.539 85.6948C97.681 91.0305 101.653 94.2019 107.738 94.2019C109.225 94.2409 110.705 93.9678 112.08 93.4C113.456 92.8323 114.697 91.9825 115.725 90.9055C117.259 89.2126 118.102 87.0055 118.08 84.7126C118.141 83.6085 117.968 82.504 117.572 81.4717C117.176 80.4394 116.566 79.5027 115.782 78.7233H115.793V78.734V78.734ZM37.3863 80.1412L29.0246 66.1483H20.9092V94.1733H28.0325V77.7983L37.5826 94.134H44.3383V66.1126H37.4077L37.3899 80.1412H37.3863Z" />
                        </svg>
                      </div>
                    </div>
                    {/* 4th item */}
                    <div
                      className="bg-transparent py-1 px-4"
                      data-aos="fade-down"
                      data-aos-anchor="[data-aos-id-stats]"
                      data-aos-delay="300"
                    >
                      <div className="text-gray-900 dark:text-gray-100 flex justify-center items-center">
                        <svg
                          className="fill-current"
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5257 19.8032C9.5686 23.3818 8.12932 31.489 15.2615 36.2318L43.7257 55.7318L29.9257 24.1532C27.0329 16.7032 19.1222 15.0782 13.5257 19.8032V19.8032Z" />
                          <path d="M38.0257 4.44993C33.4007 4.54278 26.4543 10.0464 29.5436 18.4499L43.8186 52.0714L48.8365 16.7071C49.9972 7.92136 43.3365 3.86421 38.0257 4.44993V4.44993Z" />
                          <path d="M51.0616 15.3567H53.758C53.758 15.3567 55.2009 15.3567 55.3973 16.0352C54.333 16.9031 51.4437 17.0138 51.8259 21.6424L56.3616 52.071L70.5401 18.3567C73.4401 10.8281 67.3544 4.54238 61.9544 4.34953C61.699 4.32952 61.4428 4.3188 61.1866 4.31738C56.3401 4.31738 50.7866 7.83524 51.0616 15.3602V15.3567Z" />
                          <path d="M69.9692 24.4434L56.562 55.6434L85.0156 36.0363C91.5763 31.3899 90.5156 23.9613 86.8477 20.2863C85.3084 18.5577 82.4799 17.2256 79.4906 17.2256C75.9513 17.2256 72.1656 19.097 69.9692 24.4399V24.4434Z" />
                          <path d="M81.8328 40.476L55.1113 59.1188H88.0149C94.7649 59.1188 99.1006 52.1653 97.1756 45.7867C95.8828 41.776 92.0613 38.6295 87.6256 38.626C85.7578 38.626 83.7792 39.1867 81.8328 40.476V40.476Z" />
                          <path d="M12.7581 59.1195H45.176L18.4438 40.4767C12.2688 36.5124 5.32598 38.8338 2.81883 45.4052C0.693834 52.9374 5.99741 59.1195 12.7581 59.1195V59.1195Z" />
                          <path d="M48.6577 84.6246H54.6719C56.0541 84.7103 58.5041 85.9174 58.5041 88.771C58.5041 91.7567 55.9612 92.9639 54.5827 93.0996H48.6541V84.6246H48.6577ZM48.5648 71.3317H53.5148C55.2077 71.421 57.2077 72.671 57.2077 74.9889C57.2077 77.2639 55.6934 78.7782 53.7362 79.0496H48.5648V71.3317ZM41.7969 65.796V98.6282H57.7469C61.5327 98.6282 66.0327 94.8389 66.0327 89.8853C66.0327 84.7139 62.6469 82.171 60.5041 81.146C60.5041 81.146 64.4255 78.871 64.2541 73.9639C64.0755 67.3603 57.9684 65.7996 55.8755 65.7996H41.7969V65.796ZM17.3362 98.6282V79.7139L38.0077 99.871V65.796H31.0612V84.2174L10.3862 64.4639V98.6282H17.3362ZM67.1505 81.8567C67.3255 92.2389 74.7934 99.9996 84.3934 99.9996C86.6684 99.9996 89.0684 99.571 91.5184 98.6282V91.9389C89.6456 93.0856 87.4929 93.6936 85.2969 93.696C79.4862 93.696 74.0041 89.3996 74.2327 81.5889C74.3825 78.7161 75.6224 76.0086 77.6996 74.0184C79.7767 72.0282 82.5347 70.9052 85.4112 70.8782C87.4612 70.8782 89.5719 71.471 91.5184 72.7567V66.2496C89.391 65.3762 87.1144 64.9238 84.8148 64.9174C75.2362 64.9174 67.3327 72.9853 67.1505 81.8567Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
                className="absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700"
                aria-hidden="true"
              ></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
