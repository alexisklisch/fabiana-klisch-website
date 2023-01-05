import { createPortal, JSX } from 'preact/compat'

interface props {
  children: (JSX.Element | JSX.Element[])
}

export const Portal = ({children}: props) => {
  const portalContainer: HTMLDivElement | null = document.querySelector('#portal')
  return (
    <>
      {createPortal(<>{children}</>, portalContainer!)}
    </>
  )
}