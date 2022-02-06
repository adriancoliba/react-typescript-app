import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faStore, faInbox, faUserAlt, faQuestion } from "@fortawesome/free-solid-svg-icons";

type NonEmptyArray<T> = [T, ...T[]];

interface Props {
    navigationData: NonEmptyArray<string>,
    currentRoute: string,
    setCurrentRoute: (item: string) => void,
}

const Tabbar: React.FC<Props> = ({
    navigationData, 
    currentRoute, 
    setCurrentRoute
}) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
          case "Home":
            return faHome;
          case "Discover":
            return faSearch;
          case "Store":
            return faStore;
          case "Inbox":
            return faInbox;
          case "Profile":
            return faUserAlt;
          default:
            return faQuestion;
        }
    }, []);
    
    return (
        <nav className="flex md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
          {navigationData.map((item: string, index: React.Key) => (
            <span
                key={index}
                className={`
                    text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center
                    ${currentRoute === item ? "bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700" : ""}
                `}
                onClick={() => setCurrentRoute(item)}
            >
              <span className="-mb-1"><FontAwesomeIcon icon={getTabIcon(item)} size="5x" /></span>
            </span>
          ))}
        </nav>
      );
};

export default Tabbar;
