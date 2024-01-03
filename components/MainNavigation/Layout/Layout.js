import MainNavigation from "../MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className="font-mono">{children}</main>
    </>
  );
};

export default Layout;
