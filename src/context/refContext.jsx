import { createContext, useContext, useRef } from "react";


const RefContext = createContext();

export const RefProvider = ({children}) => {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

return (
    <RefContext.Provider value={{ contactRef , scrollToContact }}>
      {children}
    </RefContext.Provider>
  );
}

export const useRefContext = () => useContext(RefContext);