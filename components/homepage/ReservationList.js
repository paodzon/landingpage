import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CalendarIcon, CommandLineIcon, MegaphoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const items = [
  {
    name: 'Baptismal Rites',
    description: 'I think the kids call these memes these days.',
    href: '/reservations/baptismal',
    iconColor: 'bg-pink-500',
    icon: MegaphoneIcon,
  },
  {
    name: 'First Reconciliation',
    description: 'Something really expensive that will ultimately get cancelled.',
    href: '/reservations/reconciliation',
    iconColor: 'bg-purple-500',
    icon: CommandLineIcon,
  },
  {
    name: 'First Holy Communion',
    description: 'Like a conference all about you that no one will care about.',
    href: '/reservations/communion',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
  {
    name: 'Confirmation Rites',
    description: 'Like a conference all about you that no one will care about.',
    href: '/reservations/confirmation',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
  {
    name: 'Wedding Rites',
    description: 'Like a conference all about you that no one will care about.',
    href:  '/reservations/wedding',
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
  {
    name: 'Religous Services',
    description: 'Like a conference all about you that no one will care about.',
    href: '/reservations/religious' ,
    iconColor: 'bg-yellow-500',
    icon: CalendarIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ReservationList() {
  return (
    <div className="max-w-xl">
      <h2 className="text-base font-semibold leading-6 text-gray-900">Make a Reservation</h2>
      <p className="mt-1 text-sm text-gray-500">Select and reserve your sacrament date today.</p>
      <ul role="list" className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
        {items.map((item, itemIdx) => (
          <li key={itemIdx}>
            <div className="group relative flex items-center space-x-3 py-4">
              {/* <div className="flex-shrink-0">
                <span
                  className={classNames(item.iconColor, 'inline-flex h-10 w-10 items-center justify-center rounded-lg')}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div> */}
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-gray-900">
                  <Link href={item.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.name}
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0 self-center">
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
