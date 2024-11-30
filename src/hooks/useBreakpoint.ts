import { useContext } from 'react'

import BreakpointsContext from 'contexts/BreakpointsContext'

/**
 * IMPORTANT: Use this hook only if CSS media queries are not enough. This hook may produce flickering of the UI because of React hydration. Use CSS media queries whenever possible.
 */
export const useBreakpoint = () => useContext(BreakpointsContext)

export default useBreakpoint
