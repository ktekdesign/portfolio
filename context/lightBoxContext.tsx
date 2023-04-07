import { createContext, Dispatch, SetStateAction } from "react"
type LightBoxContextData = {
  toggler: boolean
  setToggler: Dispatch<SetStateAction<boolean>>
  video: string[]
  setVideo: Dispatch<SetStateAction<string[]>>
  showButton: boolean
  setShowButton: Dispatch<SetStateAction<boolean>>
}
const LightBoxContext = createContext({} as LightBoxContextData)

export default LightBoxContext
