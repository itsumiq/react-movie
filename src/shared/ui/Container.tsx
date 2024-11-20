interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return <div className={`mx-auto w-[94.444vw] ${className}`}>{children}</div>;
};
