import { ArrowLeftCircleIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import Image from 'next/image'
  export default function TGMP() {
    const router = useRouter()
    const photoArray = Array.from({ length: 11 }, (_, index) => index);
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" text-center flex justify-between">
            <div className='flex items-center gap-3 cursor-pointer'  onClick={() => router.push('/gallery')}><ArrowLeftCircleIcon width={35}/>Go back</div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">TGMP 2023</h2>
            <div></div>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {photoArray.map((number) => (
              <article
                key={number}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image height={400} width={400} src={`/images/tgmp/${number+1}.jpg`} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  