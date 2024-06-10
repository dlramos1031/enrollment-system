// Sidebar.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronFirst, ChevronLast } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    useEffect(() =>  {
        setTimeout(() => {
            setExpanded(false);
          }, 2000);
    }, []);

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white bg-opacity-80 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
}

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export function SidebarItem({ icon, text, alert, to, onClick }) {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = location.pathname === to;

    const handleClick = async () => {
        if (onClick) {
            await onClick();
        }
        navigate(to);
    };

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                isActive ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"
            }`}
        >
            <div className="flex items-center w-full" onClick={handleClick}>
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
                {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />}
                {!expanded ? (
                    <div
                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-200 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                        {text}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </li>
    );
}

SidebarItem.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    alert: PropTypes.bool,
    to: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

SidebarItem.defaultProps = {
    alert: false,
    onClick: null,
};
