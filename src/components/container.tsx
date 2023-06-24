import { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container text-white px-4 md:max-w-screen-sm m-auto">{children}</div>
  )
}

export default Container