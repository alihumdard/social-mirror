import CodeConfirm from "../../pages/Code";
import ContactForm from "../../pages/Contact";
import Enterprises from "../../pages/Enterprises";
import Home from "../../pages/Home";
import Mirror from "../../pages/Mirror";


export const publicRoutes = [
  {
    path: "/",
    element: Home,
  },
    {
    path: "/mirror",
    element: Mirror,
  },
    {
    path: "/contact",
    element: ContactForm,
  },
   {
    path: "/code",
    element: CodeConfirm,
  },
    {
    path: "/enterprises",
    element: Enterprises,
  },
];

