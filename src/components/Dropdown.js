import React, {useState, useEffect} from 'react';
import {IconArrowDown, IconArrowUp} from '../assets/svg-icons';

const Dropdown = ({placeHolder, options}) => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
            const handler = () => setShowMenu(false);
            window.addEventListener('click', handler);
            return () => {
                window.removeEventListener('click', handler);
            }
        }
    );

    const handleInputClick = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        return placeHolder;
    };

    return (
        <div className='dropdown-container'>
            <div onClick={handleInputClick} className='dropdown-input'>
                <div className='dropdown-selected-value'>{getDisplay()}</div>
                <div className='dropdown-tools'>
                    <div className='dropdown-tool'>
                        {
                            !showMenu ? <IconArrowDown/> : <IconArrowUp/>
                        }
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className='dropdown-menu'>
                    {options.map((option) => (
                        <div key={option.key} className='dropdown-item'>
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;