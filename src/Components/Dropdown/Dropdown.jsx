import React, { useState, useEffect, useCallback } from 'react';
import { usePopper } from 'react-popper';

import { DropdownButton, DropdownOptions } from './'
import useFocus from "./useFocus";

import { MoreIcon } from '../Icons/MoreIcon'

export function Dropdown({ children, position, controlContent }) {
    const [showPopup, setShowPopup] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [focus, setFocus] = useFocus(children?.length);

    // Close popup on Escape key press
    const escFunction = useCallback(event => {
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    }, []);
  
    // Handle Escape key press
    useEffect(() => {
      document.addEventListener('keydown', escFunction, false);
      return () => {
        document.removeEventListener('keydown', escFunction, false);
      };
    }, []);
  
    // Handle outside click
    useEffect(() => {
      const handleClickOutside = e => {
        if(popperElement &&
          !popperElement.contains(e.target?.parentNode?.parentNode) &&
          !referenceElement.contains(e.target)) {
          setShowPopup(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popperElement, showPopup, referenceElement]);
  
    // Initialize Popper 
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: position,
    });
    
    return (
      <>
        <DropdownButton
          id="dropdown-button"
          type="button"
          onClick={() => { setShowPopup(!showPopup); setFocus(-1);}}
          aria-expanded={showPopup}
          aria-haspopup
          aria-label="Open options button"
          aria-controls="options"
          name="Open options button"
          ref={setReferenceElement}
        >
            {controlContent || <MoreIcon size="38"/>}
        </DropdownButton>
        { showPopup && (
          <DropdownOptions
            id="options"
            style={styles.popper}
            role="menu"
            aria-labelledby="dropdown-button"
            ref={setPopperElement}
            {...attributes.popper}
        >
          { React.Children.map(children, (child, i) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(
                child,
                { index: i, setFocus: setFocus, focus: focus === i });
            }
            return child 
          })}
        </DropdownOptions>
        )}
      </>
    );
};

