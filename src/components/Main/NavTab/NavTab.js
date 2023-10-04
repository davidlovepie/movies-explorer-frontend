import "./NavTab.css";

export const NavTab = () => {
  return (
    <div className="navtab">
      <div className="navtab__wrapper">
        <div className="navtab__header-backend">1 неделя</div>
        <div className="navtab__header-frontend">4 недели</div>
      </div>
      <div className="navtab__wrapper">
        <div className="navtab__backend">Back-end</div>
        <div className="navtab__frontend">Front-end</div>
      </div>
    </div>
  );
};
