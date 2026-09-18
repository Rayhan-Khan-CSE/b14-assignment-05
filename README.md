Name of my project: Dev Stack

Description of my project:
Dev Stack is developed for technology selection for developers. This project provides different technology cards with information such as name, description, difficulty, rating and category. Developers can choosing the right technology stack for a project and manage selections and receive instant notifications.

Technology that i use:
1. React (For build a fast and interactive user interface)
2. TypeScript (For provide type safety)
3. Tailwind CSS (For rapid and responsive UI development)
4. Vite (For faster development server startup)
5. React Toastify (For display success or error message)
6. React Icons (For easily add icons)
7. DaisyUI (For ready made UI components)
8. JSON (For technology data)

3 Features about my project:
1. Resonsive Design
2. Technology Cards
3. Remove individual or all technology

1. What is JSX, and why is it used in React?
JSX means JavaScript XML that is a syntax for write HTML like code inside JavaScript. It is used in React because it makes react components easier to read and write.

2. What is the difference between props and state?
Props used to pass data from parent to child component. On the otherhand, state used to store data inside a component.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows a component to store and update data. In this project, I used useState in the CardStack.tsx in Components folder.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook is used for fetching data, calling API and updating the DOM. In this project, the data is loaded using react use() and suspense, so useEffect not used.

5. Why does every item in a .map() list need a unique key prop?
A unique key prop needs for react identify each item in a list and makes updates fast and solve rendering problems.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is used to check a condition is true or false and renders the appropriate content. In this project, I used conditional rendering in Components folder CardStack.tsx file and showed:
{selected.length === 0 ? "No technologies selected yet" : `${selected.length} technologies selected`}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
I pass data from a parent component to a child component using props and a child send something back to the parent using lifting state up.