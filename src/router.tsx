import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {AlbumsPage, CommentsPage, ListsPage, PostPage} from "./Pages";

export const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'todos'}/>},
            {path: 'todos', element: <ListsPage/>},
            {path: 'albums', element: <AlbumsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/posts', element: <PostPage/>}
        ]
    }
])