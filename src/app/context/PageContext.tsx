'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface PageContextProps {
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
}
const PageContext = createContext<PageContextProps>({
  totalPages: 0,
  setTotalPages: () => {},
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalPages, setTotalPages] = useState(0);

  return (
    <PageContext.Provider value={{ totalPages, setTotalPages }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
