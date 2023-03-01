import React, { useState } from "react";
import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface IDropdownItemProps {
    item: string;
    onClick: any;
}

interface IDropdownProps {
    items: IDropdownItemProps[];
}


const DropdownContainer = styled.div`
    position: relative;
    margin-top: 50px;
`;

const DropdownHeader = styled.div<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px 15px 25px;
    border: 3px solid #ced4da;
    background-color: #2e3338;
    border-radius: 24px;
    cursor: pointer;
    width: 26vw;
    height: 4vh;
    color: #4a5159;

    font-weight: 700;
    font-size: 1.3em;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition: 0.3s ease-in-out;

    ${(props) =>
        props.isOpen &&
        `
        border: 3px solid #ced4da;
        border-radius: 24px 24px 0 0;
    `}

    @media screen {
        @media (max-width: 1300px) {
            width: 55vw;
        }

        @media (max-width: 960px) {
            width: 50vw;
            font-size: 1.7vmax;
        }   
    }
`;

const DropdownArrow = styled.div<{ isOpen: boolean }>`
    width: 0;
    height: 0;
    margin-left: 8px;
    margin-top: 2px;
    border-top: 6px solid ${(props) => (props.isOpen ? "#666" : "#ccc")};
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
    transition: transform 0.2s ease-in-out;
    transform-origin: center;
    transform: rotate(-90deg) translate(0px, 0px);
    /* background-color: red; */

    ${(props) =>
        props.isOpen &&
        `
        transform: rotate(0deg) translate(-3px, 3px);
    `}
`;

const DropdownMenu = styled.div`
    position: absolute;
    width: 26vw;
    padding-left: 5px;
    padding-right: 5px;
    top: 99%;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    background-color: #121517;
    border: 3px solid #A4ADB6;
    border-top: none;
    font-size: 1.5vmin;

    @media screen {
        @media (max-width: 1300px) {
            width: 55vw;
            font-size: 1.4vmax;
        }

        @media (max-width: 960px) {
            width: 50vw
        }

        @media (max-width: 768px) {
            font-size: 1.5vmax;
        }
    }
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #2e3338;
    }
`;

const Dropdown: React.FC<IDropdownProps> = ({ items }) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item: IDropdownItemProps) => {
        setSelectedItem(item.item);
        setIsOpen(false);

        item.onClick();
    };

    return (
        <DropdownContainer>
            <DropdownHeader isOpen={isOpen} onClick={handleToggle}>
                {selectedItem || t('selectCalculator')}{" "}
                <DropdownArrow isOpen={isOpen} />
            </DropdownHeader>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.20, ease: "easeInOut" }}
                    >
                        <DropdownMenu>
                            {items.map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    onClick={() => handleSelect(item)}
                                >
                                    {item.item}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </motion.div>
                )}
            </AnimatePresence>
        </DropdownContainer>
    );
};

export default Dropdown;
