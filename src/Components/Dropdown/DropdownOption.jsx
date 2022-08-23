import React, { useRef, useEffect, useCallback } from 'react';
import { OptionStyled } from './DropdownOptionStyled';

export const DropdownOption = ({ 
    children,
    setFocus,
    index,
    clickHandler,
    link,
    focus,
    ...otherProps
  }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (focus) {
        // Focus on option
        ref.current.focus();
      }
    }, [focus]);

    const handleSelect = useCallback(() => {
      // Setting focus to selected option
      setFocus(index);
    }, [index, setFocus]);

    // Handling Link/Button option
    const optionType = link ? "a" : 'button';

    return (
        <li> 
          <OptionStyled
            as={optionType}
            ref={ref}
            role="menuitem"
            tabIndex={focus ? 0 : -1}
            onKeyPress={handleSelect}
            {...clickHandler && { 'onClick': clickHandler }}
            {...link && { 'href': link }}
            {...otherProps}
          >
            {children}
          </OptionStyled>
        </li>
    )
}