import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function ClerkUserButton() {
  return (
    <SignedIn>
      <UserButton
        appearance={{
          elements: {
            userButtonPopoverFooter: {
              display: "none",
            },
            button__manageAccount: {
              display: "none",
            },
          },
        }}
      />
    </SignedIn>
  );
}

export default ClerkUserButton;
