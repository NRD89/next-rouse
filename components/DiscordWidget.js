import Image from "next/image"

const DiscordWidget = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="h2 font-red-hat-display">
            Connect with The Rouse Community on{" "}
            <span className="text-purple-600 uppercase tracking-tighter">
              Discord
            </span>
          </h2>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-7 text-center md:text-left flex flex-col justify-center"
            data-aos="fade-right"
          >
            <div className="relative w-1/2 mx-auto md:mx-0 mb-6">
              <Image
                src="c_scale,f_auto,w_617/v1610617526/Rouse-Discord_byyaaz.png"
                alt="Rouse logo plus Discord logo"
                layout="responsive"
                width={350}
                height={249}
                // objectFit="fill"
              />
            </div>
            <h3 className="h4 font-red-hat-display mb-4">
              Engage directly with your instructors.
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 ">
              Get support and help during your practice and chat with other
              members.
            </p>
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5 mb-8 md:mb-0 md:rtl flex justify-end items-center"
            data-aos="fade-up"
          >
            <iframe
              src="https://discord.com/widget?id=788301141023653888&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscordWidget
