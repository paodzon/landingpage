
const days = [
  {
    time: '5:00-6:00am', events: [
      { id: 1, name: 'Holy Mass' },
    ],
    day: 0
  },
  { time: '', events: [] ,day: 1},
  { time: '', events: [] ,day: 2},
  { time: '', events: [] ,day: 3},
  { time: '', events: [] ,day: 4},
  { time: '',  events: [] ,day: 5},
  { time: '',  events: [] ,day: 6},
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 0 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 1 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 2 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 3 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 4 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 5 },
  { time: '6:30-7:30am', events: [{ id: 1, name: 'Holy Mass' }], day: 6 },
  { time: '8:00-9:00am', events: [{ id: 1, name: 'Holy Mass' }], day: 0 },
  { time: '',  events: [] },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '9:30-10:30am', events: [
      { id: 1, name: 'Holy Mass' },
      { id: 2, name: 'Livestream through' },
      { id: 3, name: 'FB Live' },
    ], day: 0
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  { time: '12:00-1:00pm',  events: [
    { id: 1, name: 'Holy Mass' },
  ], day: 0 },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '12:15-1:15pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 3
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '3:00-4:00pm',
    
    isSelected: true,
    events: [
      { id: 1, name: 'Holy Mass' },
      { id: 2, name: 'Livestream through' },
      { id: 3, name: 'FB Live' },
    ], day: 0
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '4:15-5:15pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 0
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 0
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 1
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 2
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 3
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 4
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 5
  },
  {
    time: '5:30-6:30pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 6
  },
  {
    time: '7:00-8:00pm', events: [
      { id: 1, name: 'Holy Mass' },
    ], day: 0
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
  {
    time: '',
    events: []
  },
];



export default function Calendar() {

  var today = new Date();
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day of the week (0-6, where 0 is Sunday, 1 is Monday, and so on)
var dayOfWeekNumber = today.getDay();
console.log("Today is day " + dayOfWeekNumber);

  return (
    <div className=" lg:flex lg:h-full lg:flex-col">
            <div className="block lg:hidden flex justify-center py-2 m-4">{daysOfWeek[dayOfWeekNumber]}</div>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
  
        <div className="hidden lg:grid lg:grid-cols-7 lg:gap-px lg:border-b lg:border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
        <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>

        </div>
        <div className="flex justify bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:gap-px">
            {days.map((day) => (
              <div
                key={day.time}
                className='bg-white relative px-3 py-2 flex flex-col justify-center items-center'
              >
                <time
                  dateTime={day.time}
                  className={
                    day.isToday
                      ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                      : undefined
                  }
                >
                  {day.time}
                </time>
                {day.events.length > 0 && (
                  <ol className="mt-2 ">
                    {day.events.map((event) => (
                      <li key={event.id}>
                        <div className="group flex">
                          <p className="text-center flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.name}
                          </p>
                        </div>
                      </li>
                    ))}
    
                  </ol>
                )}
              </div>
            ))}
          </div>
        
        </div>
      </div>
      {days.map((day, idx)=> {
        if(day.day === dayOfWeekNumber && day.time !== ''){
          return <div key={idx} className="pt-4 px-4 py-1 sm:px-6 lg:hidden">
            <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
              <div> 
              <time className="mt-2 flex items-center font-semibold text-center justify-center text-gray-700">
                  {day.time}
                </time>
                {day.events.map((event) => (
                  <li key={event.id} className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50">
                    <div className="flex-auto justify-center flex">
                      <p className="font-semibold text-gray-900">{event.name}</p>
                    </div>

                  </li>
                ))}
              </div>
          </ol>
        </div>
        }
      })}
    </div>
  )
}
