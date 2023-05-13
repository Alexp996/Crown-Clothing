import DirectoryCategories from "../../components/directory-categories/directory-categories.component"
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Outlet />
      <DirectoryCategories />
    </div>
  )
}

export default Home;