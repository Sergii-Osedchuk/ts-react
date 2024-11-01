import { type PropsWithChildren, type FC } from 'react';

type HeaderProps = PropsWithChildren<{image: {src: string, alt: string}}>

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      <h1>{ children }</h1>
    </header>
  )
}

export default Header;