import Image from "next/image";
import Layout from "../components/Layout";
const classes = [
  {
    name: "Deep Stretch & Sound Healing",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This is an all levels deep stretch class and sound healing combination guided by Michael. This class is designed to help us relax and release tension. Students will be guided through various poses designed for both strengthening and stretching the body to release stubborn areas of tension all while listening to calming healing tones and sounds. This class is an open invitation for students to enjoy this class freely, we encourage you to listen to your body and decide if meditation, or engaging in the stretches offered or laying down and enjoying the sound healing is what you need. This is a community class for you to enjoy it the way that resonates with you.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Hot Power Flow",
    role: "Senior Front-end Developer",
    imageUrl: "./rouse_class_bg.jpeg",
    bio: "Power Yoga is an all levels flow done in a heated environment. You will be guided with progressions and regressions throughout the practice so no matter the level you are you have the option to regress or progress as needed.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Functional Mobility & Sound Healing",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This is an all levels functional mobility class and sound healing combination guided by Adri & Michael. This class is designed to help us relax and release tension. Students will be guided through various poses designed for both strengthening and stretching the body to release stubborn areas of tension all while listening to calming healing tones and sounds. This class is an open invitation for students to enjoy this class freely, we encourage you to listen to your body and decide if meditation, or engaging in the stretches offered or laying down and enjoying the sound healing is what you need. This is a community class for you to enjoy it the way that resonates with you.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Deep Stretch & Breath Work",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This is a combo class where we engage in deep stretching and active poses with a strong emphasis on our breath to help us release those tense areas of our bodies. During this class we go through the normal functional mobility class style, but we will engage in deep breathing and explore various styles of breath techniques so yogis can discover the power and rhythm of their breath.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Yoga En Español",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Breath flow is a vinyasa style flow with an emphasis on practicing breath to movement. This class offers a specific set of poses sequenced in a way to invite the power of our breath while fluidly moving in and out of poses. In addition, musical tones and vibrational rhythms will be present to compliment the breath to movement relationship.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Yin Yoga w/ Reiki",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Yin yoga w/ Reiki is a restorative and sensitizing flow where one can work completely at their own pace. This is a practice great for alleviating back and muscle pain. The slower pace of the class accomplishes deep tissue release. While students are engaged in their restorative practice, reiki will be offered by Hannah as an option for students who want to invite this into their practice.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Yogis Choice",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Yogis choice is a 1 hour block of time where yogis can come in and receive guidance from an instructor to improve their personal practice. The first 20 min of class will be a guided full body warm up, followed by 40 min of space to explore your individual practice. This is a community-based class where we celebrate our individual journeys and accomplishments with each other. Feel welcomed no matter your level, we are all here to learn from each other.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Intro to Yoga",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Intro to Yoga is for new yogis who are looking to set a solid foundation for their yoga journey. This class will take yogis step by step in how to move in and out of poses, learn breath techniques, and explore and develop their personal yoga practice.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rise and Shine",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Rise and shine is a high intensity vinyasa flow to get your body moving first thing in the morning. Yogis will be guided through consistent dynamic movements and poses to keep the body active. This class is designed to test your endurance and warm up the body through consistent movements rather than holding certain poses.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Sound Healing",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Enjoy the relaxing and healing sounds of music. This class is intended to be relaxing and comfortable so your body can find its state of peace and deep serenity.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Meditation",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This class teaches us to explore our mind and body more deeply. You will be guided through a meditation and a series of breath techniques to help you find your own state of relaxation and peace.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Adaptive Vinyasa",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This class helps us to explore our potential; where to push and where to let go using dynamic and static postures through vinyasa. If you are a beginner or more advanced, this class will offer you opportunities to grow in your Yoga practice and help build confidence, flexibility, strength and steadiness.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vinyasa Sculpt",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This is a high intensity class using props to challenge the body and find your maximum potential. Think boot camp meets yoga, a combination class to help you discover the power and strength of your body.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ashtanga Yoga",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "A series of poses designed to sync breath to movement. This is an energetic flow that vitalizes and sensitizes the body, mind and soul.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "All Levels Vinyasa",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "This is an all levels vinyasa class that gives the freedom for new and experienced yogis to challenge their bodies as needed wherever they are in their yoga journey. This class will take students step by step in how to move in and out of poses, connect to their breath, and explore their internal experience.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Power Flow",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "A challenging high-intensity vinyasa style class that will make you sweat. This flow is designed to challenge you so you can strengthen your mind, body and soul.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Yin Yoga",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "A restorative and sensitizing flow where one can work completely at their own pace. This is a practice great for alleviating back and muscle pain. The slower pace of the class accomplishes deep tissue release.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Restorative Flow",
    role: "Senior Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Is all about releasing tension, stress and anxiety.  Restorative postures tap into deep connective and muscle tissues which helps calm the mind and body; creating space to improve breath and become more comfortable with moments of stillness.  Feeling more centered is a great way to head toward the weekend!",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More classes...
];

export default function Example() {
  const sortedArray = classes.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return (
    <Layout
      metaTitle="Yoga Classes"
      metaDescription="Come get a glimpse at what classes Rouse Yoga Studio offers residents and visitors of Riverside, CA. We offer new dynamic classes that combine two or more elements of mindfulness, sound healing, energy healing, yoga and much more."
    >
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Classes
            </h2>
            <p className="text-xl">
              Get a glimpse of all the yoga classes Rouse Yoga Studio has to
              give to the people of Riverside, CA. From beginner to advanced all
              are welcome and accommodated here.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {sortedArray.map((_class) => (
                <li key={_class.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2 relative">
                      <Image
                        className="object-cover shadow-lg rounded-lg opacity-30 brightness-100 dark:opacity-60 dark:brightness-25"
                        src="/rouse_class_bg.jpeg"
                        alt=""
                        layout="fill"
                        quality={35}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-tr from-pink-300 to-blue-300 dark:from-pink-800 dark:to-blue-800 rounded-lg opacity-75 dark:opacity-70 mix-blend-color"
                        aria-hidden="true"
                      ></div>
                      <div className="absolute inset-0 w-full h-full flex justify-center items-center px-2 text-center">
                        <h3 className="font-bold text-3xl text-black dark:text-white uppercase">
                          {_class.name}
                        </h3>
                      </div>
                    </div>
                    {/* <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{_class.name}</h3>
                      <p className="text-indigo-600">{_class.role}</p>
                    </div> */}
                    <div className="prose-lg">
                      <p>{_class.bio}</p>
                    </div>

                    <ul role="list" className=" space-x-5 hidden">
                      <li>
                        <a
                          href={_class.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={_class.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
