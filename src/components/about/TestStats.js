const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function TestStats() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src={'https://bafybeidwiptjily2bt4yvxhqkdhdv66y4vxyvzk7ulbsan4mpdgxeit7zm.ipfs.w3s.link/ipfs/bafybeidwiptjily2bt4yvxhqkdhdv66y4vxyvzk7ulbsan4mpdgxeit7zm/generated.svg'}
                      alt="Workcation"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-indigo-200">Ulises Baretta, CEO de Code IT</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nuestro compromiso con nuestros empleados
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-base leading-7">
                En Code IT, estamos comprometidos a empoderar a nuestro equipo de trabajo y apoyarlos en todo lo que necesiten para tener éxito. Ofrecemos oportunidades constantes de capacitación y crecimiento, así como un ambiente de trabajo colaborativo y positivo. Además, proporcionamos apoyo y recursos para ayudar a nuestros empleados a alcanzar sus objetivos profesionales.
                </p>
                <p className="text-base leading-7">
                Estamos orgullosos de nuestro equipo y creemos que su éxito es clave para el éxito de nuestra empresa. Estamos comprometidos en proporcionarles las herramientas y recursos necesarios para alcanzar su máximo potencial.
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  