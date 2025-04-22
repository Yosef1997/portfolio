import { recentWork } from '@/lib/works'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import useMeasure from 'react-use-measure'
import { animate, AnimatePresence, motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

const WorkRow = () => {
  const FAST_DURATION = 25
  const SLOW_DURATION = 75

  const [duration, setDuration] = useState<number>(FAST_DURATION)

  const [ref, { width }] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [mustFinish, setMustFinish] = useState(false)

  const [rerender, setRerender] = useState(false)

  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    let controls
    const finalPosition = -width - 20
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }
    return controls.stop
  }, [xTranslation, width, duration, rerender])

  return (
    <motion.div
      className='flex gap-x-5 w-full mb-10 md:mb-20 lg:mb-40 overflow-x-visible'
      ref={ref}
      style={{ x: xTranslation }}
      onHoverStart={() => {
        setMustFinish(true)
        setDuration(SLOW_DURATION)
      }}
      onHoverEnd={() => {
        setMustFinish(true)
        setDuration(FAST_DURATION)
      }}
    >
      {[...recentWork, ...recentWork, ...recentWork, ...recentWork].map(
        (el, idx) => {
          return (
            <motion.div
              className='relative overflow-hidden h-[200px] min-w-[200px] bg-light-grey rounded-xs flex justify-center items-center hover:shadow-2xl'
              key={idx}
              onHoverStart={() => setShowOverlay(true)}
              onHoverEnd={() => setShowOverlay(false)}
              onClick={() => window.open(el.url, '_blank')}
            >
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    className='absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full' />
                    <motion.h1
                      className='bg-off-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:bg-dark-grey hover:text-off-white'
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      exit={{ y: 10 }}
                    >
                      <span>Explore Now</span>
                      <ArrowUpRight className='h-4 w-4' />
                    </motion.h1>
                  </motion.div>
                )}
              </AnimatePresence>
              <Image
                src={el.imageUrl}
                alt={el.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          )
        }
      )}
    </motion.div>
  )
}
export default WorkRow
