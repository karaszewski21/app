export const quiz5 = {
    id: '9dcceb17-1189-42f9-815e-46b5988d1ba2',
    title: "React Quiz Component Demo",
    synopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    progressBarColor: "#9de1f6",
    totalQuestions: 6,
    checkAutoAnswer: false,
    timer: false,
    duration: 30, // 10 minut
    previousButton: true,
    questions: [
      {
        id: 1,
        text: "How can you access the state of a component from inside of a member function?",
        type: "text",
        image: "https://dummyimage.com/600x400/000/fff&text=X", // Optional image for the question
        answerType: "single",
        options: [
          "this.getState()",
          "this.prototype.stateValue",
          "this.state",
          "this.values",
        ],
        correctOptionIndex: 2,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 2,
        text: "ReactJS is an MVC based framework?",
        type: "text",
        answerType: "single",
        options: ["True", "False"],
        correctOptionIndex: 1,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 10,
      },
      {
        id: 3,
        text: "Which of the following concepts is/are key to ReactJS?",
        type: "text",
        answerType: "single",
        options: [
          "Component-oriented design",
          "Event delegation model",
          "Both of the above",
        ],
        correctOptionIndex: 2,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 30,
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        type: "image",
        answerType: "single",
        options: [
          "https://dummyimage.com/600x400/000/fff&text=A",
          "https://dummyimage.com/600x400/000/fff&text=B",
          "https://dummyimage.com/600x400/000/fff&text=C",
          "https://dummyimage.com/600x400/000/fff&text=D",
        ],
        correctOptionIndex: 1,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        type: "image",
        answerType: "multiple",
        options: [
          "https://dummyimage.com/600x400/000/fff&text=A",
          "https://dummyimage.com/600x400/000/fff&text=B",
          "https://dummyimage.com/600x400/000/fff&text=C",
          "https://dummyimage.com/600x400/000/fff&text=D",
        ],
        correctOptionIndex: [0, 1, 3],
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 5,
        text: "What are the advantages of React JS?",
        type: "text",
        answerType: "multiple",
        options: [
          "React can be used on client and as well as server side too",
          "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
          "React components have lifecycle events that fall into State/Property Updates",
          "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
        ],
        correctOptionIndex: [0, 1, 3],
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
    ],
  };
  
  export const quiz6 = {
    id: 'fb15337b-43e5-414e-b4cb-d59f81370f1e',
    title: "Frugi quiz demo",
    synopsis: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    progressBarColor: "#9de1f6",
    totalQuestions: 6,
    checkAutoAnswer: false,
    timer: true,
    duration: 30, // 10 minut
    previousButton: true,
    questions: [
      {
        id: 1,
        text: "How can you access the state of a component from inside of a member function?",
        type: "text",
        image: "https://dummyimage.com/600x400/000/fff&text=X", // Optional image for the question
        answerType: "single",
        options: [
          "this.getState()",
          "this.prototype.stateValue",
          "this.state",
          "this.values",
        ],
        correctOptionIndex: 2,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 2,
        text: "ReactJS is an MVC based framework?",
        type: "text",
        answerType: "single",
        options: ["True", "False"],
        correctOptionIndex: 1,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 10,
      },
      {
        id: 3,
        text: "Which of the following concepts is/are key to ReactJS?",
        type: "text",
        answerType: "single",
        options: [
          "Component-oriented design",
          "Event delegation model",
          "Both of the above",
        ],
        correctOptionIndex: 2,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 30,
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        type: "image",
        answerType: "single",
        options: [
          "https://dummyimage.com/600x400/000/fff&text=A",
          "https://dummyimage.com/600x400/000/fff&text=B",
          "https://dummyimage.com/600x400/000/fff&text=C",
          "https://dummyimage.com/600x400/000/fff&text=D",
        ],
        correctOptionIndex: 1,
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        type: "image",
        answerType: "multiple",
        options: [
          "https://dummyimage.com/600x400/000/fff&text=A",
          "https://dummyimage.com/600x400/000/fff&text=B",
          "https://dummyimage.com/600x400/000/fff&text=C",
          "https://dummyimage.com/600x400/000/fff&text=D",
        ],
        correctOptionIndex: [0, 1, 3],
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
      {
        id: 5,
        text: "What are the advantages of React JS?",
        type: "text",
        answerType: "multiple",
        options: [
          "React can be used on client and as well as server side too",
          "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
          "React components have lifecycle events that fall into State/Property Updates",
          "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
        ],
        correctOptionIndex: [0, 1, 3],
        correctFeedback: "Correct answer. Good job.",
        incorrectFeedback: "Incorrect answer. Please try again.",
        explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        points: 20,
      },
    ],
  };