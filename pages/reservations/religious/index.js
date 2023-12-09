import { CheckIcon } from '@heroicons/react/20/solid'

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


export default function Religious() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Other Religous Services</h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Funeral</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ol class="list-decimal ml-8 mt-4 text-sm leading-6 text-gray-600">
                            <li class="mb-4">
                                <h2 class="text-base mb-2">Funeral Mass</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        A death Certificate is required.
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        P1,000.00 fee
                                    </li>
                                </ol>
                            </li>

                            <li class="mb-4 ">
                                <h2 class="text-base mb-2">Funeral Blessing</h2>

                                         <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        A death Certificate is required.
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        P1,000.00 fee
                                    </li>
                                </ol>
                            </li>
                        </ol>

                   

                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Mass Intentions</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ol class="list-decimal ml-8 mt-4 text-sm leading-6 text-gray-600">
                            <li class="mb-4">
                                <h2 class="text-base mb-2">Requirements</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Form to be accomplished if it is for thanksgiving, special intentions, or for the departed souls.
                                    </li>
                             
                                </ol>
                            </li>

                            <li class="mb-4 ">
                                <h2 class="text-base mb-2">Fee</h2>

                                         <ol class="list-disc text-sm">
                                         <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        50 pesos per name.
                                    </li>
                                </ol>
                            </li>
                        </ol>

                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Request of Forms</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ol class="list-decimal ml-8 mt-4 text-sm leading-6 text-gray-600">
                            <li class="mb-4">
                                <h2 class="text-base mb-2">Baptismal Cert</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: 100 pesos
                                    </li>
    
                                </ol>
                            </li>

                            <li class="mb-4 ">
                            <h2 class="text-base mb-2">Confirmation Cert</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: 100 pesos
                                    </li>
    
                                </ol>
                            </li>
                            <li class="mb-4 ">
                            <h2 class="text-base mb-2">Marriage Cert</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: 100 pesos
                                    </li>
    
                                </ol>
                            </li>
                            <li class="mb-4 ">
                            <h2 class="text-base mb-2">Funeral Cert</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: 100 pesos
                                    </li>
    
                                </ol>
                            </li>
                        </ol>

                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Blessings</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ol class="list-decimal ml-8 mt-4 text-sm leading-6 text-gray-600">
                        <li class="mb-4 ">
                            <h2 class="text-base mb-2">Car Blessing</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: P1,000 fee
                                    </li>
    
                                </ol>
                            </li>

                            <li class="mb-4 ">
                            <h2 class="text-base mb-2">Store Blessing</h2>
                            <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        Fee: P1,000 fee
                                    </li>
    
                                </ol>
                            </li>
                        </ol>

                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Corrections of Wrong Entry on Certificates</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ol class="list-decimal ml-8 mt-4 text-sm leading-6 text-gray-600">
                        <li class="mb-4 ">
                            <h2 class="text-base mb-2">Fee</h2>
                                <ol class="list-disc text-sm">
                                    <li className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        300 pesos per correction
                                    </li>
    
                                </ol>
                            </li>
                        </ol>
                   
                     
                    
                        <div className="flex justify-center">
                            <button
                                href="#"
                                className="mt-20 block w-2/4 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Make Reservations
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
