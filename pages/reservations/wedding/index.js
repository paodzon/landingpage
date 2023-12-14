import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
const weddingReservationGuidelines = [
    "Reservations must be made as early as possible or not later than three (3) months BEFORE THE WEDDING.",
    "There is a 1-day seminar from 9 am to 4 pm.",
    "Marriage license from the Civil Registrar's Office.",
    "CENOMAR (Certificate of No Marriage) from PSA (for non-civilly and civilly married).",
    "Marriage contract from PSA (if civilly married).",
    "Certificate of Baptism and Confirmation (Bride and Groom) with annotation 'FOR MARRIAGE PURPOSES.'",
    "For non-parishioners of San Sebastian Cathedral Parish, permit to marry and marriage banns signed by the parish priest.",
    "Attendance of pre-marital counseling in the Parish.",
    "If not yet confirmed, reception of the sacrament of Confirmation.",
    "Reception of the Sacrament of Reconciliation a day before the wedding.",
    "Non-refundable deposit of P500.00 upon reservation of time and day of the wedding.",
    "Reservation Information: Reservations must be made as early as possible or not later than three (3) months BEFORE THE WEDDING.",
    "Full payment one week before the wedding.",
    "Canonical interview 1 month or 2 months before the wedding. All documents must be available.",
    "MIXED MARRIAGE: Marriage between a Catholic and non-Catholic, secure a permit from the Chancery office, Bishop's Residence, Tarlac City.",
    "Marriage between a Filipino and a Foreigner: Secure Civil Status at the Foreign Embassy.",
    "2X2 ID picture.",
    "Death Certificate of the Widowed applicant."
  ];

  const weddingPackageGuidelines = [
    "Wedding with Nuptial Mass plus reservation fee (carpet only) - P5,500.00",
    "Wedding only without Nuptial Mass plus reservation fee - P2,000.00.",
    "Note: The contracting parties shall shoulder decorations or flower arrangements. The choir is not included in the package."
  ];
 
  

export default function Wedding() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wedding Rites Guidelines</h2>

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
                            {weddingReservationGuidelines.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Basic Fees</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {weddingPackageGuidelines.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
        
        
                        <div className="flex justify-center">
                            <Link
                                href="/reservations?sacrament=wedding_rites"
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
