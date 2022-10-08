import { render } from "@lib/render";
import { AppProvider } from "@containers/AppProvider";
import { Router } from "@containers/Router";
import "@styles";

render(
  <AppProvider>
    <Router />
  </AppProvider>
);
