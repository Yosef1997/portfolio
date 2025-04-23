import { work } from '@/lib/works'
import { Button } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

interface WorkListInterface {
  recentWork: work[]
}

const WorkList: React.FC<WorkListInterface> = ({ recentWork }) => {
  return (
    <>
      {recentWork.map((e, idx) => {
        return (
          <div
            key={e.name}
            className={`flex items-center justify-between w-full ${
              idx !== recentWork.length - 1 &&
              'border-b pb-4 mb-4 lg:pb-8 lg:mb-8'
            } border-b-light-grey`}
          >
            <div>
              <p className='text-xl md:text-3xl lg:text-6xl mb-2 md:mb-[18px]'>
                {e.name}
              </p>
              <div className='flex gap-x-1'>
                {e.role.map((role, i) => {
                  return (
                    <div key={i}>
                      <p className='text-xs md:text-lg'>
                        {role} {i !== e.role.length - 1 ? <span>-</span> : null}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            <Button
              onClick={() => window.open(e.url, '_blank')}
              className='p-5 cursor-pointer border border-dark-grey rounded-full text-dark-grey hover:text-off-white bg-off-white hover:bg-dark-grey'
              title='Explore'
            >
              <ArrowUpRight />
            </Button>
          </div>
        )
      })}
    </>
  )
}
export default WorkList
