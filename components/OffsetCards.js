import React from "react"
import { GrGroup } from "react-icons/gr"
import { FiHeart } from "react-icons/fi"
import { GoLightBulb } from "react-icons/go"

const OffsetCards = () => {
  return (
    <div className="bg-darkBlueBg">
      <div className="bg-white w-full" style={{ height: `400px` }}></div>

      <div className="-mt-64">
        <div className="w-full text-center">
          <h2 className="font-bold h1 text-darkBlueBg capitalize">What we believe in</h2>
        </div>

        <div className="max-w-sm mt-16 mx-auto grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-6xl lg:px-6">
          {/* 1st item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <GrGroup className="w-16 h-16 p-1 -mt-1 mb-2"/>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Community
            </h4>
            <p className="text-gray-600 text-center">
              Creating a space of love and connection with your instructors.
            </p>
          </div>

          {/* 2nd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <FiHeart className="w-16 h-16 p-1 -mt-1 mb-2"/>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Acceptance
            </h4>
            <p className="text-gray-600 text-center">
              Cultivating an environment of unity, trust, honesty and self-expression.
            </p>
          </div>

          {/* 3rd item */}
          <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <GoLightBulb className="w-16 h-16 p-1 -mt-1 mb-2"/>
            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
              Inspiration
            </h4>
            <p className="text-gray-600 text-center">
              Encouraging and building confidence so you can thrive.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
          <div className="p-2 sm:p-8 text-center cursor-pointer">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="font-bold text-xl mb-2">Spa</div>
                    <p className="text-gray-700 text-base">
                      Todo tipo de masajes y técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-8 text-center cursor-pointer text-darkBlueBg">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="font-bold text-xl mb-2">Bioseguridad</div>
                    <p className="text-base">
                      Altos estandares de bioseguridad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 sm:p-8 text-center cursor-pointer">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
              <div className="space-y-10">
                <div className="px-6 py-4">
                  <div className="space-y-5">
                    <div className="font-bold text-xl mb-2">Spa</div>
                    <p className="text-gray-700 text-base">
                      Todo tipo de masajes y técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default OffsetCards
