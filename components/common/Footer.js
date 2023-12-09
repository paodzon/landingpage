import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/TarlacCathedralOfficial/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

]

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col justify-center md:order-2 gap-4 text-white">
          {/* <p className='flex flex-col justify-center items-center '>Contact Us</p> */}
          <div className='flex flex-row justify-start items-center gap-2'>
            <MapPinIcon width={20} color='white' />
         <div> <p className="text-xs leading-5 ">F. Tañedo St, 2300 Tarlac
          </p>
            <p className='text-xs leading-5'>Philippines, Tarlac, Philippines</p></div>
          </div>
          <div className='flex flex-row justify-start items-center gap-2'><PhoneIcon width={20} color='white' /><p className="text-xs leading-5 ">(045) 982 0859</p></div>
        

         <div className='flex justify-start'>
         {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-center">
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
         </div>

        </div>
        <div className="mt-8 md:order-1 md:mt-0 text-white">
          <p className="text-2xl leading-5 mb-2">San Sebastian Cathedral
            Parish of Tarlac</p>
          <p className="text-base leading-5 ">Office hours:</p>
          <p className="text-xs leading-5 ">Monday to Friday - 8:00 AM TO 4:00 PM</p>
          <p className=" text-xs leading-5 ">Saturday to Sunday - 8:00 AM TO 12:00 PM</p>
          <p className=" text-xs leading-5 ">Closed on Holidays</p>
          <p className="mt-5 text-xs leading-5 ">
            &copy; 2023, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
