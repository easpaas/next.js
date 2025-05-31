import { useEffect, useTransition } from 'react'
import { dispatcher } from 'next/dist/compiled/next-devtools'

export const useAppDevRenderIndicator = () => {
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (isPending) {
      dispatcher.renderIndicatorShow()
    } else {
      dispatcher.renderIndicatorHide()
    }
  }, [isPending])

  return startTransition
}
