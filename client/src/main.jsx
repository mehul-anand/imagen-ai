import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { shadesOfPurple } from '@clerk/themes'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useAuth,
} from "@clerk/clerk-react";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Pages from "./pages";
import Layout from "./pages/Layout";
import { HomeTwo } from "./pages/HomeTwo";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const { Home, Community, CreatePost } = Pages;

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="community" element={<Community />} />
        <Route
          path="create-post"
          element={
            <>
              <SignedIn>
                <CreatePost />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="sign-in"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider appearance={{baseTheme:shadesOfPurple}} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={appRouter} />
    </ClerkProvider>
  </StrictMode>
);
