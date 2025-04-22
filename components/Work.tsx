import { recentWork } from '@/lib/works'
import WorkList from './WorkList'

const Work = () => {
  return (
    <div
      id='work'
      className='grid md:grid-cols-2 lg:grid-cols-3 px-4 pb-10 md:px-20 md:pb-20 lg:pb-40'
    >
      <h3 className='text-xl md:text-[40px] font-medium md:mb-5'>
        Recent Work
      </h3>

      <div className='w-full md:col-span-2'>
        <WorkList recentWork={recentWork} />
      </div>
    </div>
  )
}
export default Work
