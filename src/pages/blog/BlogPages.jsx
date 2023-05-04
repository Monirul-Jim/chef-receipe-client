import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';

const BlogPages = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='mt-4'>
                <h1 className='text-2xl font-semibold '>Tell us the differences between uncontrolled and controlled components.</h1>
                <p>In React, components can be categorized as either uncontrolled or controlled components. The main difference between the two is how they handle state management. Uncontrolled components are those where the state is managed by the DOM itself, rather than being controlled by React. These components are generally used for simple forms where there is no need to manage state in the React component. Controlled components are generally used for more complex forms where the state needs to be managed within the React component. For example, a controlled text input element would receive its value as a prop and notify its parent component of any changes via a callback function. Controlled components offer greater control and flexibility over form state, as the state is managed entirely within the React component. Uncontrolled components, on the other hand, are simpler to use for basic forms but offer less control over form state. Ultimately, the choice between the two will depend on the specific requirements of your application.</p>
                <>
                    <h1 className='text-2xl font-semibold '>How to validate React props using PropTypes?</h1>
                    <p>In React, PropTypes is a library used for typechecking props, which are inputs passed into a component. It provides a way to validate the type and shape of the props to ensure that they are of the correct format and meet the expectations of the component. This can help catch errors early in the development process and make it easier to maintain and debug code.To use PropTypes, you first need to import it from the 'prop-types' package. Then, you can define the PropTypes for your component by adding a 'propTypes' object as a property of the component. The 'propTypes' object should contain the expected types and shape of each prop.</p>
                </>
                <>
                    <h1 className='text-2xl font-semibold '>Tell us the difference between nodejs and express js.</h1>
                    <p>Node.js and Express.js are both popular technologies used for server-side web development in JavaScript. While they are related and often used together, they serve different purposes. Node.js is a JavaScript runtime built on the V8 JavaScript engine. It allows developers to use JavaScript to build server-side applications and scripts. Node.js provides a range of features and APIs for working with file systems, networking, and other low-level system operations. It is particularly well-suited for building real-time applications and scalable network applications. Express.js is a web framework built on top of Node.js. It provides a set of APIs and tools for building web applications, including routing, middleware, and template engines. Express.js makes it easier to build web applications in Node.js by providing a high-level interface that abstracts away many of the low-level details. In short, Node.js provides the underlying runtime environment, while Express.js provides a web framework for building web applications on top of Node.js. Express.js is built specifically for Node.js and can be used as a modular part of a Node.js application or as a standalone framework.</p>
                </>
                <>
                    <h1 className='text-2xl font-semibold '> What is a custom hook, and why will you create a custom hook?</h1>
                    <p>A custom hook is a reusable function in React that encapsulates certain logic and can be shared across different components. It allows developers to abstract away complex or repetitive code and makes it easier to maintain and refactor code. Custom hooks typically start with the prefix "use" and follow the conventions of the React hooks API. Developers may create custom hooks to encapsulate behavior that is not covered by the built-in React hooks, to share logic across different components, or to simplify the implementation of certain features. Custom hooks can be used to handle API calls, manage state, handle browser events, or any other logic that is needed across multiple components in a React application.</p>
                </>

            </div>
        </div>
    );
};

export default BlogPages;