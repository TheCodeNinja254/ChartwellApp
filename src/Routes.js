import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from "./layouts/MainLayout";

const HomeView = lazy(() =>
  import(/* webpackChunkName: "homeView" */ "./pages/Home")
);
const NotFoundView = lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

const MeetingView = lazy(() =>
  import(/* webpackChunkName: "MeetingView" */ "./pages/Meeting")
);
const ProjectsView = lazy(() =>
  import(/* webpackChunkName: "ProjectsView" */ "./pages/Projects")
);
const GlidepathView = lazy(() =>
  import(/* webpackChunkName: "GlidepathView" */ "./pages/Glidepath")
);

const AppRoutes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        layout={MainLayout}
        exact
        path="/"
      />
      <RouteWithLayout
        component={HomeView}
        layout={MainLayout}
        exact
        path="/home"
      />
      <RouteWithLayout
        component={MeetingView}
        layout={MainLayout}
        exact
        path="/meetings"
      />
      <RouteWithLayout
        component={ProjectsView}
        layout={MainLayout}
        exact
        path="/projects"
      />
      <RouteWithLayout
        component={GlidepathView}
        layout={MainLayout}
        exact
        path="/chart"
      />
      <RouteWithLayout component={NotFoundView} layout={MainLayout} />
    </Switch>
  );
};

export default AppRoutes;
