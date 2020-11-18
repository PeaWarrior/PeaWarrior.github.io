import { useEffect } from "react"

export const useOnClickMenu = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current !== event.target) return
      handler(event)
    }

    document.addEventListener("click", listener)

    return () => {
      document.removeEventListener("click", listener)
    }
  }, [ref, handler])
}
