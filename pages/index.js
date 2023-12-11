import Footer from "@/components/common/Footer";
import Calendar from "@/components/homepage/Calendar";
import Hero from "@/components/homepage/Hero";
import ReservationList from "@/components/homepage/ReservationList";
import Schedule from "@/components/homepage/Schedule";
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Hero />
      <Schedule />
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            width={500}
            height={500}
            className="h-full w-full object-cover"
            src="/images/san_seb/15.jpg"
            alt=""
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore Our Gallery
            </p>

            <div className="mt-8">
              <Link
                href="/gallery"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                More photos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex md:flex-row justify-center items-center py-20 bg-gray-100 gap-24">
        <ReservationList />
        <div className="w-9/12 overflow-auto flex justify-center items-start md:w-3/12">
          <iframe
            style={{ border: "none", overflow: "hidden" }}
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTarlacCathedralOfficial%2F&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1366591907276924"
            width="500"
            height="500"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
