import "./NavTab.css";

export const NavTab = () => {
  return (
    <div className="navtab">
      <div className="navtab__wrapper">
        <p className="navtab__header-backend">1 неделя</p>
        <p className="navtab__header-frontend">4 недели</p>
      </div>
      <div className="navtab__wrapper">
        <p className="navtab__backend">Back-end</p>
        <p className="navtab__frontend">Front-end</p>
      </div>
    </div>
  );
};
