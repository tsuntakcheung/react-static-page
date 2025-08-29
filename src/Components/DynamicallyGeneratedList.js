import React from "react";

const facts = [
    { id : 1,
      title : 'Fact 1: React uses a virtual DOM for good rendering performance.', 
      text: 'Instead of directly updating the real DOM every time something changes, React updates a lightweight in-memory representation of the DOM (the virtual DOM). Then, it efficiently calculates the difference (diffing algorithm) and updates only the parts of the real DOM that changed — making updates much faster and more efficient. '
    },
    { id : 2, 
      title : 'Fact 2: React is just the View in Model-View-Controller.', 
      text: 'React focuses solely on building the user interface (View). It does not include built-in support for routing, state management (beyond local component state), or data fetching — which are typically handled by other libraries like React Router, Redux, or React Query. This makes React highly flexible and modular.'
    },
    { id : 3, 
      title : 'Fact 3: ReactJS was developed by Jordan Walke, a software engineer at Facebook (now Meta), in 2011', 
      text: "It was first used in Facebook's newsfeed and later adopted by Instagram in 2012. React was created to solve problems with building complex user interfaces by making them more efficient and declarative. Facebook open-sourced React in May 2013, and since then, it has grown into one of the most popular JavaScript libraries for building user interfaces, especially for single-page applications."
    }
];

const DynamicallyGeneratedList = () => {
    return (<ul className="App-list">
                {facts.map((fact) => <li className="App-list-item">
                                        <h3>{ fact.title }</h3>
                                        <p>{ fact.text }</p>
                                       </li> )}
            </ul>) ;
}

export default DynamicallyGeneratedList;