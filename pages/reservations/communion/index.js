import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const requirements = [
    "A child must be a baptized Catholic. A copy of the certificate must be on file with the San Sebastian Cathedral Parish of Tarlac office.",
    "Attend the Parish Faith Formation Program.",
    "Completed the Basilica preparation for and received First Reconciliation.",
    "Attend all First Holy Communion sessions.",
    "Each child is required to complete the First Communion Sacramental Preparation materials with their parents.",
    "Each child and at least one parent are required to attend the Sessions, and rehearsal for First Holy Communion.",
    "A 3-week seminar will be given and required to be finished.",
    "Children and their parents are expected to attend Mass."
]

export default function Communion() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">First Communion</h2>

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
