Please install the npm dependencies `npm install` and start project `npm run dev`, this will host the app on port 5173 by default.

Click here to browse the app - http://127.0.0.1:5173/

The app is also deployed to vercel here - https://rsa-insurance-app.vercel.app/

Note: The mock-api should be running on your local machine at port 3000 with the below endpoints to view the app - 

http://localhost:3000/quote

http://localhost:3000/addons


In building this app, I had several options for the development tools and libraries to use, including CRA, nextJS, webpack, parcel, and vite. Although nextJS would have been my first choice, I ultimately decided to go with vite since the app only had a single route. I was impressed with vite's performance, and wanted to try it out for myself. Additionally, vite saves time as there's no need for configuring babel.

For type checking, I utilized TypeScript. To build the frontend components, I chose to use Tailwind CSS and build everything from scratch to keep the app lightweight, as opposed to using heavier libraries like Material UI or Mantine UI.

I employed MobX for state management to achieve simple, maintainable, and high-performance code. For APIs, I considered using Redux Toolkit, React Query, and SWR. I ultimately went with React Query as it is lightweight.

Unit testing was carried out using the React Testing Library and Jest. To enforce code standards, I used Eslint with Airbnb standards, and Prettier for code analysis and formatting.