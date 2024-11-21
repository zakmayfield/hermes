import { useState } from "react";
import { SidebarNavigation } from "..";

export const SidebarNavigationDemo = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="border border-foreground min-h-screen flex flex-row">
      <SidebarNavigation />

      <div className="p-sm w-full">
        <div className="bg-primary p-lg h-full">
          <div className="demo flex flex-col h-sm w-sm">
            <div
              className={`rounded-lg w-2xs h-2xs bg-secondary transition-all ease-in-out duration-300 ${
                isHidden && " h-none w-none"
              }`}
            />
          </div>

          <button onClick={() => setIsHidden(!isHidden)}>hide square</button>
        </div>
      </div>
    </div>
  );
};
