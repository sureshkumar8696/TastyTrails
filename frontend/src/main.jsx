import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ysj8f1janwkcb1ct.us.auth0.com"
    clientId="nDh6MfDJWT4FywC2eh3gtXqq9gBADen1"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <MantineProvider>
      <App />
    </MantineProvider>
  </Auth0Provider>
);
