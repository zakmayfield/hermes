"use client";

import { Box, Heading } from "@/ui";
import React from "react";
import { ReadProducts } from "./ProductsRead";
import { CreateProduct } from "./ProductsCreate";

type TabContext = {
  activeTab: string | null;
  handleToggleTab: (tab: string) => void;
};

const tabs = ["Read", "Create"];

const initialTabState: TabContext = { activeTab: tabs[0], handleToggleTab: () => {} };

const TabContext = React.createContext<TabContext>(initialTabState);

const tabReducer = (state: TabContext, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

const useTabContext = () => {
  const [tabContext, dispatch] = React.useReducer(tabReducer, initialTabState);
  return { tabContext, dispatch };
};

export const ProductsTemplate = () => {
  const { tabContext, dispatch } = useTabContext();

  const handleToggleTab = (tab: string) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: tab });
  };

  return (
    <TabContext.Provider value={{ activeTab: tabContext.activeTab, handleToggleTab }}>
      <Box style={{ border: "sm", width: "md", padding: "sm", spaceY: "sm" }}>
        <Heading text="Products" />
        <Tabs tabs={tabs} />

        <div className="border p-xs">
          <ProductsDisplay />
        </div>
      </Box>
    </TabContext.Provider>
  );
};

function Tabs({ tabs }: { tabs: string[] }) {
  return (
    <Box style={{ display: "flex-row", flexSpacing: "space-between" }}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          name={tab}
        />
      ))}
    </Box>
  );
}

function Tab({ name }: { name: string }) {
  const { activeTab, handleToggleTab } = React.useContext(TabContext);
  return (
    <Box
      style={{
        width: "full",
        textAlign: "center",
        backgroundColor: "success",
        opacity: activeTab !== name ? "light" : "opaque"
      }}
    >
      <p
        className="p-xs cursor-pointer"
        onClick={() => handleToggleTab(name)}
      >
        {name}
      </p>
    </Box>
  );
}

// TODO: *** Handle refresh token logic ***

function ProductsDisplay() {
  const { activeTab } = React.useContext(TabContext);

  switch (activeTab) {
    case "Read":
      return <ReadProducts />;
    case "Create":
      return <CreateProduct />;
  }
}
