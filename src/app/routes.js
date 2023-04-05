import MainLayout from 'src/layouts/MainLayout';
import LoginPage from 'src/features/authen/login/LoginPage';
import RegisterPage from 'src/features/authen/register/RegisterPage';
import HomePage from 'src/features/home/HomePage';
import NotFoundPage from 'src/layouts/NotFoundPage';
import Message from 'src/features/message/Message';
import NewsFeed from 'src/features/newsFeed/NewsFeed';
import Profile from 'src/features/profile/Profile';
import ContentMessage from "src/features/message/components/ContentMessage";
import VideoCall from "src/features/videoCall/VideoCall";

const routes = [
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <HomePage />,
            children: [
               { path: '/', element: <NewsFeed /> },
               { path: '/home', element: <NewsFeed /> },
               { path: '/profile', element: <Profile /> },
               { path: '/chat/:chatId', element: <Message />},
            ],
         },
         { path: '404', element: <NotFoundPage /> },
         { path: '/', element: <HomePage /> },
         { path: '/video', element: <VideoCall /> },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
   {
      path: '/authen',
      element: <MainLayout />,
      children: [
         { path: 'login', element: <LoginPage /> },
         { path: 'register', element: <RegisterPage /> },
         { path: '*', element: <NotFoundPage /> },
      ],
   },
];

export default routes;
