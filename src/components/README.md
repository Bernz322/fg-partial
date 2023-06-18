# Components

This directory contains source files for all reusable components. A component is a piece of code that can be reused in different parts of the application. For example, a button component can be used in different pages of the application.

#### Development requirements

- As much as possible, components should be independent of the application. This means that they should not depend on the application's state or data. This is to ensure that they can be reused in different applications.
- If props are passed to a component, they should be validated using PropTypes. This is to ensure that the component is used correctly and provides better documentation for maintenance.

##### Note:
Expose your newly created to the index.js file. This is to ensure that the component can be imported from the components directory directly and not to the component file itself.