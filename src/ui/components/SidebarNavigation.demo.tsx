import { useState } from "react";
import { SidebarNavigation } from "..";

export const SidebarNavigationDemo = () => {
  return (
    <div className="border border-foreground min-h-screen flex flex-row">
      <SidebarNavigation
        role="SUPER"
        user_email="👽"
      />
    </div>
  );
};
