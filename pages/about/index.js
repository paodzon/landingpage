import TheLogo from '@/components/about_us/TheLogo'

const posts = [
  {
    id: 1,
    description:
      'A devoted servant of the church for over sixdecades. Born on May 6, 1918, in Bautista, he was ordained as a priest on March 29, 1941, in Lingayen, Philippines.At the age of 44, Bishop Sison received a significant appointment as the Bishop of Tarlac on March 8, 1963. Hisconsecration took place on May 11, 1963, at the venerable Saint Sebastian Cathedral in Tarlac. After serving theDiocese of Tarlac for 25 years, he resigned on January 21, 1988, at 69. Bishop Sison continued his journey asBishop Emeritus until his peaceful passing on March 26, 2004, at 85, in El Paso, TX, USA. His profoundcontributions as a Council Father at the Second Vatican Council and his 40.8 years of episcopal service leave anenduring legacy in the annals of the Catholic Church.',
    imageUrl:
      '/images/bishops/1.jpg',
      name: 'Bishop Jesus J. Sison, D.D. ',
   
  },
  {
    id: 2,
    description:
      "Born on March 14, 1938, in Guimba, Nueva Ecija. Ordained as a prieston December 21, 1963, in Cabanatuan City, his steadfast dedication to the Church earned him the appointment asBishop of San Jose on May 24, 1984, at the age of 46. Consecrated as a bishop on July 14, 1984, he assumed therole of Coadjutor Bishop of Tarlac on August 17, 1985, at the age of 47, eventually succeeding as Bishop on January21, 1988, at the age of 49. Bishop Cinense's enduring service spanned almost 60 years, retiring as Bishop Emeritusof Tarlac on March 31, 2016, at the age of 78. Beyond local duties, his contributions extend to the wider Churchcommunity as a member of the Catholic Bishops' Conference of the Philippines' Episcopal Commission onEcumenical Affairs. His life is a testament to unwavering commitment and leadership, leaving an indelible mark onthe Diocese of Tarlac and the broader Catholic community.",
    imageUrl:
      '/images/bishops/2.jpg',
      name: 'Bishop Florentino F. Cinense, D.D., PhD, STL',
   
  },  {
    id: 3,
    description:
      'A devoted Filipino prelate, born inManila. Ordained as a priest on May 19, 1979, in the Archdiocese of Lingayen-Dagupan, he served diligently untilhis appointment as the Bishop of Tarlac at the age of 60. His consecration followed on May 24, 2016, at the SaintJohn Evangelist Cathedral in Dagupan City. Sadly, at the age of 67, Bishop Macaraeg passed away due to a cardiacarrest while playing basketball in Malasiqui, Archdiocese of Lingayen-Dagupan, leaving behind a legacy of unwavering dedication to his faith and community. May he rest in eternal peace.',
    imageUrl:
      '/images/bishops/3.jpg',
      name: 'Bishop Enrique de Vera Macaraeg ',
      role: 'December 28, 1955 – October 23, 2023',
   
  },
  // More posts...
]

export default function AboutUs() {
  return <div>
    <div className="mt-24 bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">About us</h2>
      </div>
    </div>
    {/* About 1 */}
    <div className="overflow-hidden bg-white py-24 sm:py-32 text-justify">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 mt-10">
            <div className="mx-8 relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/images/about_us/1.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
            </div>
          </div>
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Welcome to the San Sebastian Cathedral Parish of Tarlac, a living testament to centuries of history, faith, and
                resilience. Our journey traces back to the roots of Tarlac City, once part of Pampanga, established in 1686 by
                devoted priests assigned to Magalang. The church, founded in the same year and administered by the Augustinians
                from Pampanga, gained independence in 1727, marking the beginning of its storied legacy.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">The first parochial building, erected in 1740 by Father Agustion Barriocanal, laid the foundation for what would
                become a beacon of faith in the region. Father Baltazar Gamarra later constructed a wood and stone church in
                1872, completed with dedication by Father Fermin Sardon in 1890. Unfortunately, the ravages of World War II led
                to the destruction of this church, and the present-day neo-gothic structure emerged from the ashes in 1945.</p>

            </div>
          </div>

        </div>
        <div className="px-6 md:px-0 lg:pr-4 lg:pt-4 mx-4">
          <div className="mx-auto">
          <p className="mt-6 text-lg leading-8 text-gray-600">Dedicated to San Sebastian, our post-war church features an exquisite facade adorned with ornate stained glass
            windows. The hues of beige, pink, and white create a captivating visual experience, with the image of our patron
            saint prominently displayed at the entrance porch.</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">San Sebastian Cathedral holds a unique place in Philippine history, serving as the venue for the Philippine
            Revolutionary Congress during the Philippine-American War. In 1899, pivotal decrees were issued within these
            sacred walls, shaping the course of the First Philippine Republic. The cathedral, once the seat of Emilio Aguinaldo’s
            Revolutionary Government, also housed the Literaria Cientifico Universidad de Malolos, with diplomas signed by
            General Emilio Aguinaldo himself.</p>
          </div>

        </div>
      </div>
    </div>

    {/* About 2 */}

    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <div className="max-w-xl">
                <p className="mt-6">
                  Despite the challenges of war, the church, identical to the Concepcion, Tarlac structure, was rebuilt into its
                  present-day form. Today, it stands not only as a place of worship but also as a cherished pilgrimage site, drawing
                  visitors to the Chapel of the Blessed Sacrament within the cathedral. This spiritual haven has become a beloved
                  stop for pilgrim tours, offering a profound connection to our history and faith before embarking on journeys to the
                  Monasterio De Tarlac.
                </p>
                <p className="mt-8">
                  Join us in exploring the vibrant history and enduring spirit of the San Sebastian Cathedral Parish of Tarlac. Here,
                  every stone speaks of resilience, every window reflects the light of faith, and every visit becomes a pilgrimage 2 through time.  </p>

              </div>
            </div>

          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/images/about_us/2.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />

            </div>
          </div>
        </div>
      </div>
    </div>


    {/* History */}

    <div className="overflow-hidden bg-white py-24 sm:py-32 text-justify">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 mt-10">
            <div className="mx-8 relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl">
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="/images/history/1.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-gray-300 mix-blend-multiply" />
            </div>
          </div>
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">History</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In the year 1686, Tarlac City emerged as a humble visita of Magalang, Pampanga, cradled under the patronage of
                San Sebastian. A testament to unwavering faith, the seeds of this sacred haven were planted. Over time, the
                echoes of devotion grew louder, and in 1727, the nascent visita blossomed into a parish, carving its place in the
                chronicles of spiritual heritage.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">The winds of change swept through in 1872, as the church underwent a transformative reconstruction, its
                foundations solidifying in stone. This architectural metamorphosis laid the groundwork for a sacred sanctuary that
                would weather the tests of time.</p>

            </div>
          </div>

        </div>
        <div className="px-6 md:px-0 lg:pr-4 lg:pt-4 mx-4">
          <div className="mx-auto">
            <p className="mt-6 text-lg leading-8 text-gray-600">The pages of our history come alive in July 1899 when the National Assembly reconvened within these hallowed
              walls. Tarlac became the stage for a crucial chapter in the story of the First Republic of the Philippines. Laws were
              penned, and on July 16, 1899, an appropriation for the Republic's resistance against the forces of America found
              its voice within these sacred confines.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">A momentous occasion unfolded on August 23, 1899, as Apolinario Mabini ascended to the position of Chief
              Justice of the Supreme Court of the Philippines, leaving an indelible mark on the annals of our legal history.
              Concurrently, the Literary University of the Philippines, under the guiding hand of Leon Ma. Guerrero, reopened its
              doors on August 8, 1899. The only graduation ceremony graced these venerable halls on September 29, 1899,
              marking the culmination of academic pursuits.</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">The tapestry of time witnessed a renewal in 1959 when the cathedral underwent a transformative renovation,
              breathing new life into its storied structure. On February 16, 1963, the crescendo of its spiritual journey reached its
              zenith as the cathedral ascended to the dignified status of a cathedral, an embodiment of enduring faith and
              architectural magnificence</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Today, as you step into the San Sebastian Cathedral Parish of Tarlac, you step into a living narrative. Each stone,
              each archway, and each whispering breeze carries with it the echoes of centuries past. Join us in uncovering the
              layers of history, where faith and heritage intertwine to create a sanctuary that transcends time.</p>
          </div>
        </div>
      </div>
    </div>


    {/* Bishops */}


<div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
      <div className="flex justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Bishops of Tarlac</h2>
       
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-1">
          {posts.map((post) => (
            <li key={post.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={post.imageUrl} alt="" />
              <div className="flex-auto text-justify">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{post.name}</h3>
                <p className="text-base leading-7 text-gray-600">{post.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{post.description}</p>
        
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* The Logo */}
    <TheLogo />
  </div>
}
