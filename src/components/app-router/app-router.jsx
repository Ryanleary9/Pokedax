import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SearchBar = lazy(() => import("../pokemon-search/Pokemon-search"));
const HomePage = lazy(() => import("../home/home"));
const DetailsPage = lazy(() => import("../Detail-page/detail-page"));

export function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
        <Route path={"/search"} element={<SearchBar></SearchBar>}></Route>
        <Route
          path={"/detail/:name"}
          element={<DetailsPage></DetailsPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
