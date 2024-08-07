import "./container.scss";

const Container = ({ children }: React.PropsWithChildren) => {
  return <main className="container">{children}</main>;
};

export default Container;
