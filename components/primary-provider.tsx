"use client";

import {createContext, useState, useEffect, useContext, ReactNode} from "react";

interface PrimaryColorContextType {
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
}

const initialState: PrimaryColorContextType = {
  primaryColor: "blue",
  setPrimaryColor: () => null,
};

const PrimaryProviderContext =
  createContext<PrimaryColorContextType>(initialState);

interface PrimaryProviderProps {
  children: ReactNode;
}

export default function PrimaryProvider({children}: PrimaryProviderProps) {
  const [primaryColor, setPrimaryColor] = useState<string>();

  useEffect(() => {
    const pColor = localStorage.getItem("primaryColor") || "blue";
    setPrimaryColor(pColor);
  }, []);

  const value = {
    primaryColor,
    setPrimaryColor: (primaryColor: string) => {
      localStorage.setItem("primaryColor", primaryColor);
      setPrimaryColor(primaryColor);
    },
  };

  return (
    <PrimaryProviderContext.Provider value={value as any}>
      {children}
    </PrimaryProviderContext.Provider>
  );
}

export const usePrimaryColor = (): PrimaryColorContextType => {
  const context = useContext(PrimaryProviderContext);

  if (context === undefined)
    throw new Error("usePrimaryColor must be used within a PrimaryProvider");

  return context;
};
