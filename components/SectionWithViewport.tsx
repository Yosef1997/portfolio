'use client'

import { handleViewport, type InjectedViewportProps } from 'react-in-viewport'
import { ReactNode } from 'react'

function Section(
  props: InjectedViewportProps<HTMLDivElement> & { children: ReactNode }
) {
  const { forwardedRef, children } = props
  return <div ref={forwardedRef}>{children}</div>
}

const SectionWithViewport = handleViewport(
  Section,
  {},
  { disconnectOnLeave: false }
)
export default SectionWithViewport
