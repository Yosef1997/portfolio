const Marquee = () => {
  return (
    <div className='absolute bottom-0 flex overflow-x-hidden'>
      <div className='pb-12 lg:pb-20 animate-marquee whitespace-nowrap'>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Software Engineer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Fullstack Developer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Mobile Developer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Software Engineer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Fullstack Developer-
        </span>
      </div>

      <div className='absolute top-0 pb-12 lg:pb-20 animate-marquee2 whitespace-nowrap'>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Mobile Developer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Software Engineer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Fullstack Developer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Mobile Developer-
        </span>
        <span className='text-4xl lg:text-[150px] text-off-white'>
          Software Engineer
        </span>
      </div>
    </div>
  )
}
export default Marquee
