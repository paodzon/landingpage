import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Foundation of Tarlac City',
    description:
      "A flaming heart struck by an arrow represents St. Augustine of Hippo, patron saint of Augustinian friar missionaries.The green field signifies the province's flourishing faith and livelihood, with talahib strands reflecting the origin ofthe city's name.",
    icon: LockClosedIcon,
  },
  {
    name: 'Unified Identity',
    description:
      "Join us on a journey through time, from the Spanish Baroque era to the present Neo-Gothic design. At San SebastianCathedral Parish, these symbols embody our enduring spirit and the shared history of our vibrant community.",
    icon: FingerPrintIcon,
  },
  {
    name: 'San Sebastian, Patron Saint',
    description:
      'The logo features crossed arrows symbolizing the miraculous healing and unwavering defense of Christianity by SanSebastian, the revered Roman soldier turned martyr.',
    icon: CloudArrowUpIcon,
  },

  {
    name: 'Roman Catholic Diocese',
    description:
      "Gold bishop's crozier and miter symbolize the elevated status of our cathedral within the Roman Catholic Diocese ofTarlac, formed in 1963.",
    icon: ArrowPathIcon,
  },

]

export default function TheLogo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Logo
          </p>
          <div className="mt-10 relative overflow-hidden rounded-3xl px-6 pb-9 pt-96">
              <img
                className="absolute inset-0 h-full w-full object-contain"
                src="/images/the_logo/1.jpg"
                alt=""
              />

            </div>
      
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="flex flex-col gap-10 justify-center items-center">
            {features.map((feature) => (
              <div key={feature.name} className="relative text-justify">
                <dt className="text-base font-semibold leading-7 text-gray-900">
              
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
