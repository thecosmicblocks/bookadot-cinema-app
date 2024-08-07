import "./style.scss";

const Header2 = ({ children }: React.PropsWithChildren) => {
  return <header className="header-2">{children}</header>;
};

export const HEADER_2_HEIGHT = 64;

export default Header2;
