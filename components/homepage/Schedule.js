import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Calendar from './Calendar'


export default function Schedule() {
  return (
    <div className="bg-white py-24 sm:py-32" id='schedule'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Mass Schedules
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
          Join us Monday to Friday for moments of prayer and reflection.
          </p>
        </div>
      </div>
      <div className="relative pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Calendar />
          </div>
        </div>
      </div>

    </div>
  );
}
