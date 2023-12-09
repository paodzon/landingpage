import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const requirements = [
    'Attend Mass regularly.',
    'Attendance at Meetings',
    , 'The readiness required for the Sacrament of Penance consists in the capacity to discern between right and wrong, togetherwith an understanding, appropriate to the child’s age, of what sin is. Understanding sin and the difference between seriousand less serious sin are crucial concepts for the reception of the sacrament.',

    'Children must be attending the Parish Faith Formation Program or the any catholic school. If candidates are not enrolled in any Catholic school, they are required to attend a 2-day seminar from 9 am to 4 pm.',
  
    'At least one parent or adult guardian is required to attend the sessions with their child. Each child is required to completethe Sacramental Preparation materials with their parents.',

]

export default function Reconciliation() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">First Reconciliation</h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Requirements</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {requirements.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
        
                        <div className="flex justify-center">
                            <Link
                                href="/reservations"
                                className="mt-20 block w-2/4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Make Reservations
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
