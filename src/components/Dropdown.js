import React, {useState, useEffect} from 'react';
import {IconArrowDown, IconArrowUp} from '../assets/svg-icons';

const Dropdown = ({placeHolder, options, parentElementStateSetter = null}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    /**
     * Side effect to update the state of the parent component.
     */
    useEffect(() => {
        parentElementStateSetter(selectedValue.value);
    }, [parentElementStateSetter, selectedValue]);

    /**
     * Side effect to set up a window event listener for the dropdown menu.
     * When an area outside of the dropdown menu is clicked, the menu will close.
     */
    useEffect(() => {
            const handler = () => setShowMenu(false);
            window.addEventListener('click', handler);
            return () => {
                window.removeEventListener('click', handler);
            }
        }
    );

    /**
     * Hide or show dropdown menu on clicks.
     *
     * @param event
     */
    const handleInputClick = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    };

    /**
     * Set the input to display either selected option or the placeholder.
     *
     * @returns {*}
     */
    const showSelectedOption = () => {
        if (selectedValue) {
            return selectedValue.value;
        }
        return placeHolder;
    };

    /**
     * Check which item is selected for highlighting in the dropdown menu.
     *
     * @param option
     * @returns {boolean}
     */
    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };

    return (
        <div className='dropdown'>
            <div onClick={handleInputClick} className={!showMenu ? 'dropdown-input' : 'dropdown-input-active'}>
                <div className='dropdown-selected-value'>{showSelectedOption()}</div>
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
                        <div onClick={() => setSelectedValue(option)}
                             key={option.key}
                             className={`dropdown-item ${isSelected(option) && "selected"}`}>
                            {option.value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;