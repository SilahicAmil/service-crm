const MainNavigation = () => {
  return (
    <>
      <div className="w-full flex bg-slate-600 font-serif">
        <nav className="ml-auto mr-8 mt-4 mb-4">
          <ul className="flex justify-between gap-12">
            <li className="">Login</li>
            <li>Account</li>
            <li>Logout</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MainNavigation;
