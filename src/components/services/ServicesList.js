import ServiceCard from "./ServiceCard"


function ServicesList({posts,section_title}){
    return(
        <>
        <div className="relative pb-20 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3  sm:h-2/3" />
          </div>
          <div className="relative mx-auto  max-w-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold mt-5 tracking-tight text-gray-900 sm:text-4xl">{section_title}</h2>
            </div>
            <div className="mx-auto mt-14  grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {posts.map((post,index) => (
                <ServiceCard data={post} index={index}/>
              ))}
            </div>
          </div>
      </div>
        </>
    )
}
export default ServicesList