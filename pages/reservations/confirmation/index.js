import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const confirmationGuidelines = [
    "Candidates will choose a sponsor who will stand with them as they are presented to the Bishop for Confirmation.",
    "The Church encourages, if possible, that one of the Baptismal Godparents serves as a sponsor for Confirmation.",
    "The sponsor must have been Baptized Catholic, regularly receive Holy Communion, and have been confirmed.",
    "They must be at least 16 years old and a good role model of the Catholic faith.",
    "If married, sponsors must have received the Sacrament of Matrimony in the Catholic faith."
  ];

  const baptismFeeGuidelines = [
    "Each godfather, godmother, or sponsor will have a fee of 200 pesos.",
    "An additional 50 pesos for the certificate.",
    "A baptismal certificate is required."
  ];
  

export default function Reconciliation() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cofirmation Rights Guidelines</h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Eligibility</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                             <li className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Candidates should be in at least the eighth grade and currently enrolled in any catholic schools. High School candidates, college-age students,
and adults are welcome to participate.
                                </li>
                        </ul>
        
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Sponsors</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {confirmationGuidelines.map((feature, idx) => (
                                <li key={idx} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
        
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Seminar Requirement (For Non-Catholic School Enrollees):</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                              <li className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    If candidates are not enrolled in any Catholic school, they are required to attend a 2-day seminar from 9 am to 4 pm.
                                </li>
                        </ul>
        
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Fees</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {baptismFeeGuidelines.map((feature, idx) => (
                                <li key={idx} className="flex gap-x-3">
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
