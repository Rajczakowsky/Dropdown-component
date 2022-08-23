# Dropdown Component

React Dropdown component build taking advantage of Popper.js library allowing for easy positioning.

## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm test`
  
# Dropdown Component API


### Usage

import:

`import { Dropdown, DropdownOption } from  './Components/Dropdown';`

and use as:

```jsx
<Dropdown  position={'string'}  controlContent={<Compoonent>/Text}>
	<DropdownOption  clickHandler={function}>Option Button</DropdownOption>
	<DropdownOption  link="string">Option Link</DropdownOption>
</Dropdown>
```

##  API

Props available for ```<Dropdown />``` component

|     Prop       |Type                             |Default                      | Description           |
|----------------|-------------------------------  |-----------------------------|-----------------------|
|position        |**One of**:  'auto','auto-start', 'auto-end', 'left', left-start', 'left-end', 'right-start', 'right-end', 'bottom-end', 'right', 'top-end','bottom', 'bottom-start', 'auto-end', 'top', 'top-start'| bottom-end					|	Value specified position of the popup box when opened.
|  controlContent  |  String/Component|	 ```<MoreIcon />```	| Text or Component inserted inside Dropdown Control button.

Props available for ```<DropdownOption />``` component

|     Prop       |Type                             |Default                      | Description           |
|----------------|-------------------------------  |-----------------------------|-----------------------|
|clickHandler        | Function   | N/A					| Function called on option button click. Optional.
|  link  |  String|	 N/A	| Option link href

## Powered by popper.js

Component takes advantage of helper library https://popper.js.org/ helping with easy positioning of popup.

