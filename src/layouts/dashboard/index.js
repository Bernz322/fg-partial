import { memo, Fragment, lazy } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import * as SettingSelector from "../../store/setting/selectors";

const Header = lazy(() =>
  import(
    "../../components/partials/dashboard/HeaderStyle/header"
  )
);
const SubHeader = lazy(() =>
  import(
    "../../components/partials/dashboard/HeaderStyle/sub-header"
  )
);
const Sidebar = lazy(() =>
  import(
    "../../components/partials/dashboard/SidebarStyle/sidebar"
  )
);
const Footer = lazy(() =>
  import(
    "../../components/partials/dashboard/FooterStyle/footer"
  )
);
const Loader = lazy(() =>
  import("../../components/Loader")
);

const Default = memo((props) => {
  const appName = useSelector(
    SettingSelector.app_name
  );

  return (
    <Fragment>
      <Loader />
      <Sidebar app_name={appName} />
      <main className="main-content">
        <div className="position-relative">
          <Header />
          <SubHeader />
        </div>
        <div className="py-0 conatiner-fluid content-inner mt-n5">
          <Outlet />
        </div>
        <Footer />
      </main>
    </Fragment>
  );
});

Default.displayName = "Default";
export default Default;
