import { RouteObject } from "react-router-dom";
import App from "../App";
import { SolutionPage, NewQuizPage } from "../features/Trivia_quiz/pages";

export const routes : RouteObject[]=[
    {
        path: "/",
        element: <App/>,
        //create an error component
        errorElement: <div>Wrong route</div>,
    },
    {
        path: "/new_quiz",
        element: <NewQuizPage/>
    },
    {
        path: "/solution",
        element: <SolutionPage/>
    },
]