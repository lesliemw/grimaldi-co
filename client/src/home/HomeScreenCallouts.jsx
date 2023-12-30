const callouts = [
  {
    name: "Women's Fashion",
    description: "Shop this season's hottest looks for women.",
    image:
      "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/5d78f41fe7897489583dd0c7bf21b9c2.jpg?imageView2/2/w/800/q/70",
    alt: "callout",
  },
  {
    name: "Men's Fashion",
    description: "Shop all of the latest looks for men.",
    image: "https://m.media-amazon.com/images/I/713oUBcWw2L._AC_SX679_.jpg",
    alt: "callout",
  },
  {
    name: "Jewelry",
    description: "Find your next heirloom piece here.",
    image: "https://m.media-amazon.com/images/I/51pOQKxSSFL._AC_SX679_.jpg",
    alt: "callout",
  },
];

function HomeScreenCallouts() {
  return (
    <div className=" bg-gray-100 font-themeFont">
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.image}
                    alt={callout.alt}
                    className="h-full w-full object-fit object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenCallouts;
