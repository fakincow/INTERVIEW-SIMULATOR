const ReactQuestions = [
  {
    id: "1",
    question: "What is the virtual DOM?",
    answers: [
      "A virtual copy of the actual DOM",
      "A way to speed up rendering",
      "A way to update the actual DOM efficiently",
      "All of the above",
    ],
    correctIndex: 2,
  },
  {
    id: "2",
    question: "What is JSX?",
    answers: [
      "A way to write HTML in JavaScript",
      "A way to write JavaScript in HTML",
      "A syntax extension for JavaScript",
      "A way to describe UI",
    ],
    correctIndex: 0,
  },
  {
    id: "3",
    question: "Can web browsers read JSX directly?",
    answers: [
      "Yes",
      "No",
      "Only using a special plugin",
      "Depends on the browser",
    ],
    correctIndex: 1,
  },
  {
    id: "4",
    question: "What is the purpose of a Higher-Order Component (HOC)?",
    answers: [
      "To reuse component data",
      "To reuse component styling",
      "To reuse component logic",
      "All of the above",
    ],
    correctIndex: 2,
  },
  {
    id: "5",
    question: "What is state?",
    answers: ["Array", "String", "Object", "None of above"],
    correctIndex: 2,
  },
  {
    id: "6",
    question: "What is prop?",
    answers: ["Object", "Array", "String", "None of above"],
    correctIndex: 0,
  },
  {
    id: "7",
    question: "What is the purpose of Redux?",
    answers: [
      "Styling components",
      "Handling server requests",
      "Debugging code",
      "Managing global state",
    ],
    correctIndex: 3,
  },
  {
    id: "8",
    question: "What is the difference between state and props in React?",
    answers: [
      "State is internal, props are external",
      "Props are used for styling, state for functionality",
      "State can be changed, props cannot",
      "Props are only used in functional components",
    ],
    correctIndex: 0,
  },
  {
    id: "9",
    question: "What is a Higher Order Component (HOC)?",
    answers: [
      "A component that holds other components",
      "A component that can accept a component as a prop",
      "A function that returns a component",
      "A component that is higher in order",
    ],
    correctIndex: 2,
  },
  {
    id: "10",
    question: "What is the useEffect hook?",
    answers: [
      "Used for styling components",
      "Used for managing the component lifecycle",
      "Used for handling side effects in functional components",
      "Used for making server requests",
    ],
    correctIndex: 2,
  },
  {
    id: "11",
    question: "What is Redux?",
    answers: [
      "Library for UI",
      "Library for state management",
      "Library for requests",
      "None of above",
    ],
    correctIndex: 1,
  },
  {
    id: "12",
    question: "What is the useContext hook?",
    answers: [
      "Used for accessing global state",
      "Used for handling server requests",
      "Used for handling form input",
      "Used for making network requests",
    ],
    correctIndex: 0,
  },
  {
    id: "13",
    question: "What is the useRef hook?",
    answers: [
      "Used for creating a reference to a component",
      "Used for creating a reference to a state variable",
      "Used for creating a reference to a prop",
      "Used for creating a reference to a DOM element",
    ],
    correctIndex: 3,
  },
  {
    id: "14",
    question:
      "What is the difference between a controlled and uncontrolled component in React?",
    answers: [
      "Controlled components can only be used in class components",
      "Uncontrolled components have a defaultValue prop",
      "Controlled components handle their own updates",
      "Controlled components have a state that controls their behavior",
    ],
    correctIndex: 3,
  },
  {
    id: "15",
    question: "What is the purpose of a Higher Order Component (HOC)?",
    answers: [
      "Add functionality to a component",
      "Wrap a component",
      "Both",
      "None",
    ],
    correctIndex: 2,
  },
  {
    id: "16",
    question:
      "What is the purpose of the `constructor` method in a React component?",
    answers: ["Initialize the state", "Bind event handlers", "Both", "None"],
    correctIndex: 2,
  },
  {
    id: "17",
    question: "What is the purpose of the map function in React?",
    answers: [
      "Used to create a map of a component.",
      "Transforms an array into another array of the same size.",
      "Used to update the state of a component.",
      "Used to create a new component.",
    ],
    correctIndex: 1,
  },
  {
    id: "18",
    question:
      "What is the difference between `componentDidUpdate` and `componentWillUpdate`?",
    answers: [
      "`componentDidUpdate` runs after the update, `componentWillUpdate` runs before",
      "`componentWillUpdate` runs after the update, `componentDidUpdate` runs before",
      "Both runs before the update",
      "Both runs after the update",
    ],
    correctIndex: 0,
  },
  {
    id: "19",
    question:
      "What is the purpose of the `props` property in a React component?",
    answers: [
      "Pass data from child to parent component",
      "Pass data from parent to child component",
      "Both",
      "None",
    ],
    correctIndex: 1,
  },
  {
    id: "20",
    question:
      "What is the purpose of the `defaultProps` property in a React component?",
    answers: ["Validate props", "Set default values for props", "Both", "None"],
    correctIndex: 1,
  },
  {
    id: "21",
    question: "What is the difference between `setState` and `forceUpdate`?",
    answers: [
      "`setState` updates the state,`forceUpdate` updates the component",
      "`forceUpdate` updates the state, `setState` updates the component",
      "Both update the component",
      "Both update the state",
    ],
    correctIndex: 0,
  },
  {
    id: "22",
    question: "Purpose of HOC?",
    answers: [
      "Render hijacking",
      "Code reuse",
      "Props manipulation",
      "All of above",
    ],
    correctIndex: 3,
  },
  {
    id: "23",
    question: "What is the component lifecycle?",
    answers: [
      "Events that happen during a component's existence",
      "A way to manage component updates",
      "A set of methods to handle component rendering",
      "All of above",
    ],
    correctIndex: 3,
  },
  {
    id: "24",
    question: "What is the purpose of setState?",
    answers: [
      "Re-render component",
      "Change component's state",
      "Change component's props",
      "All of above",
    ],
    correctIndex: 1,
  },
  {
    id: "22",
    question: "What is the main advantage of using React?",
    answers: [
      "Easy to learn",
      "Performance",
      "Reusability",
      "All of the above",
    ],
    correctIndex: 3,
  },
  {
    id: "23",
    question: "What is Virtual DOM in React?",
    answers: [
      "A copy of actual DOM",
      "A tree structure",
      "A way to manipulate DOM",
      "None of the above",
    ],
    correctIndex: 1,
  },
  {
    id: "24",
    question:
      "Which one of these is NOT a component lifecycle method in React?",
    answers: [
      "componentWillUnmount()",
      "componentDidMount()",
      "componentWillMount()",
      "componentShouldUpdate()",
    ],
    correctIndex: 3,
  },
  {
    id: "25",
    question: "What is a Higher Order Component in React?",
    answers: [
      "A component that uses another component",
      "A component that wraps another component",
      "A component that returns another component",
      "None of the above",
    ],
    correctIndex: 2,
  },
  {
    id: "26",
    question:
      "What is the name of the function that returns a piece of JSX in React?",
    answers: ["getJSX()", "render()", "createElement()", "makeJSX()"],
    correctIndex: 1,
  },
  {
    id: "27",
    question:
      'What is the difference between a "var" and a "let" variable in JavaScript?',
    answers: [
      '"var" variables are hoisted, "let" variables are not',
      '"let" variables are block-scoped, "var" variables are function-scoped',
      '"var" variables can only be used inside a for loop, "let" can be used anywhere',
      '"let" variables are immutable, "var" variables are not',
    ],
    correctIndex: 1,
  },
  {
    id: "1",
    question: "Who created React?",
    answers: ["Facebook", "Google", "Microsoft", "Amazon"],
    correctIndex: 0,
  },
  {
    id: "30",
    question: "Name an important feature of React",
    answers: [
      "Allows you to use 3rd party libraries",
      "Time-Saving",
      "Great community",
      "All of the above",
    ],
    correctIndex: 3,
  },
];

/* const ReactQuestions = [
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    question: 'WHO CREATED REACT ? ',
    answers: ['GOOGLE','FACEBOOK','ME','GOD'],
    correctIndex:1
    },
    {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    question: 'What is JSX ? ',
    answers: ['JSX is SyntaxExt','describe UI ','write HTML/JS','ALL OF THOSE'],
    correctIndex:3
    },
     {
     id: '58694a0f-3da1-4719d722',
    question: 'Can web browsers read JSX directly? ',
    answers: ['CANT == NEEET','YES it CAN!','Only using Proxy','Depends...'],
    correctIndex:0
    },
     {
    id: '58694a0f-3da1-471f-bd96-245732',
    question: 'What is the virtual DOM? ? ',
    answers: ['IT IS LIKE ..','COPY OF RL DOME','Virtual..','ONE OF THOSE'],
    correctIndex:1
    },
     {
    id: '586941-471f-bd96-229d472',
    question: 'Why use React instead of other frameworks, like Angular? ',
    answers: ['Improved performance','Unidirectional data flow','Dedicated tools ','ALL OF THOSE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471f-bd96-24e29d752',
    question: 'What is the difference between the ES6 and ES5 standards?',
    answers: ['Components and Function','exports vs export','require vs import','ALL OF THE ABOVE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471d96-245571e29d672',
    question: 'What is an event in React? ',
    answers: ['camelCase','JSX pass a function','onPress={lightItUp} ','ALL OF THE ABOVE'],
    correctIndex:3
    },
     {
    id: '58694a0f-3da1-471f-bd96-245571e772',
    question: 'How do you create a React app ? ',
    answers: ['Install NodeJS','Install CLI','Install a text editor ','ALL OF THE ABOVE'],
    correctIndex:3
    },
    {
    id: '58694a0f-3da1-471f-e298d72',
    question: 'Explain how lists work in React ? ',
    answers: ['as in regular JavaScript','add key','use map()','ALL THE ABOVE'],
    correctIndex:3
    },
    {
    id: '5869110f-3da1-471f-bd96-245571e29',
    question: 'How do you create forms in React? ',
    answers: ['ADD FORM TAG','ADD SUBMIT','ADD HANDLER','ALL OF THE ABOVE'],
    correctIndex:3
    }
  ] */
export default ReactQuestions;
