import FsLightbox from "fslightbox-react"
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react"
import LightBoxContext from "./lightBoxContext"

type Props = {
  children: ReactNode
}

const LightBoxContextProvider: FC<Props> = ({ children }) => {
  const [video, setVideo]: [string[], Dispatch<SetStateAction<string[]>>] =
    useState([""])
  const [toggler, setToggler]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false)
  const [showButton, setShowButton]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false)
  const value = useMemo(
    () => ({ toggler, setToggler, video, setVideo, showButton, setShowButton }),
    [showButton, toggler, video]
  )
  return (
    <LightBoxContext.Provider value={value}>
      {useMemo(
        () => (
          <>
            {video && <FsLightbox toggler={toggler} sources={video} />}
            {children}
          </>
        ),
        [toggler, video, children]
      )}
    </LightBoxContext.Provider>
  )
}

export default LightBoxContextProvider
