import { CheckIcon } from '@heroicons/react/20/solid'

const requirements = [
    'Registration should be made at least three weeks before the Baptism date.',
    'Birth Certificate (Original copy)',
    'List of godparents (must be Catholic)',
    'Fee: P150.00 per godparent',
    'Candles for the godparents',
    'Baptismal attire (white) and head covering or hat.'
]

const reminders = ['Formal attire is required for baptism attendees.', 'Prohibited attire includes shorts, sleeveless blouses, low necklines, mini skirts,tank tops, caps, spaghetti straps, and earrings for males.', 'Arrive one hour before the baptism for registration.'];
export default function Baptismal() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Baptismal Rites Guidelines</h2>

                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 ">Celebration</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">The celebration of the Sacrament of Baptism is a communal event within the Holy
                            Mass, scheduled on a designated Sunday for Baptism, from 11:00-12:00 pm. In
                            Baptism, your child becomes a member of the Church, and our parish community is
                            delighted to be present at this significant beginning of your child's faith journey.
                            Baptism becomes more meaningful when more people pray for your child.
                            Note: To emphasize the communitarian dimension of the sacrament, the parish
                            discourages individual/special baptisms, except for serious reasons (medical
                            emergencies, security, etc.). "For convenience" is not considered a serious reason.</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">Parents</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Parents should be married in the Catholic Church. To nurture their child in the
                            Catholic faith, they are expected to live by Catholic principles. Parishioners married
                            civilly or unmarried must interview the Parish Priest before the seminar. Non-
                            parishioners are advised to conduct baptisms in their respective parishes.
                        </p>

                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-10">Sponsors</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sponsors must be practicing Catholics who have received Baptism, Confirmation,
                            and Holy Eucharist. They actively participate in the Sacraments—Eucharist and
                            Reconciliation. Sponsors are crucial partners with parents in the Catholic upbringing
                            of the child. Parents are limited to a maximum of five pairs of sponsors</p>
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
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Reminders</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {reminders.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
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
