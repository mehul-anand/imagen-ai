import React from "react";
import { SignedIn, UserButton } from "@clerk/clerk-react";

function ClerkUserButton() {
  return (
    <SignedIn>
      <UserButton
        appearance={{
          elements: {
            userButtonPopoverMain: "bg-gradient-to-r from-indigo-500 to-purple-500",
            userButtonPopoverFooter: "hidden",
            button__manageAccount: "hidden",
          },
        }}
      />
    </SignedIn>
  );
}

export default ClerkUserButton;
