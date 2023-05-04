import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blogs = () => {
    return (

        <>

            <div className='w-full flex justify-center my-5'>

                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='font-bold my-btn' onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref}>

                <div className='text-center text-3xl font-bold text-green-500 mb-10'>
                    <p>Question And Answer</p>
                </div>

                <div className='   my-3 md:w-3/4 px-5 md:px-0 mx-auto '>
                    <p className='font-bold text-2xl mb-5 '>
                        1.What is the differences between uncontrolled and controlled components?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-green-500 mr-2'>Ans:</span>A component that controls its own internal state is known as an uncontrolled component. That means a situation when the DOM itself handles form data. On the Other Hand The data from the form element is handled by the React component (not the DOM) in a controlled component and kept in the component's state. 
In essence, a controlled component overrides the HTML form components' default behavior.
                    </p>
                    {/* 1 */}

                    <p className='font-bold text-2xl mb-5 '>
                        2. How to validate React props using PropTypes ?
?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-green-500 mr-2'>Ans:</span>
                        React comes with a built-in library called React PropTypes that offers a means to verify the props that are supplied to a component. It aids in ensuring that the necessary and appropriate props are used.
                    </p>
                    {/* 2 */}
                    {/* 3 */}
                    <p className='font-bold text-2xl mb-5 '>
                        3. What is the difference between nodejs and express js?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-green-500 mr-2'>Ans:</span>Node.js is an open-source, server-side platform that allows developers to build scalable, high-performance applications using JavaScript.  on the other hand Express jsis a web application framework built on top of Nodejs. It provides a set of features and tools for building web applications, including middleware, routing, and templating.
                    </p>
                    {/* 4 */}
                    <p className='font-bold text-2xl mb-5 '>
                        4. What is a custom hook, and why will you create a custom hook?
                    </p>
                    <p className='font-semibold text-base mb-5 ml-6 w-9/12 '>
                        <span className='text-green-500 mr-2'>Ans:</span>In React, a custom hook is a JavaScript function that starts with the word "use" and allows you to reuse stateful logic between components. You would create a custom hook when you find that you need to reuse a specific piece of stateful logic across multiple components. For example, if you have two components that need to share the same data-fetching logic, you could extract that logic into a custom hook and reuse it in both components.
                    </p>

                </div>
            </div>
        </>
    );
};

export default Blogs;