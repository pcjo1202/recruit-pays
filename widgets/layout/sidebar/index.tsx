import SideBarContainer from "./ui/side-bar-container";
import SideBarFooter from "./ui/side-bar-footer";
import SideBarHeader from "./ui/side-bar-header";
import SideBarNav from "./ui/side-bar-nav";

export default function Sidebar() {
  return (
    <SideBarContainer>
      <SideBarHeader />
      <SideBarNav />
      <SideBarFooter />
    </SideBarContainer>
  );
}
