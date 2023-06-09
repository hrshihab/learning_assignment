import { useEffect } from "react"

const useTitle = title => {
  useEffect(()=> {
    document.title = `${title} - Learn & Build`
  },[title])
}

export default useTitle ;