import CodeConfirm from "../../pages/Code";
import ContactForm from "../../pages/Contact";
import Enterprises from "../../pages/Enterprises";
import Home from "../../pages/Home";
import Mirror from "../../pages/Mirror";
import Plateform from "../../pages/Plateform";
import Plateform2 from "../../pages/Plateform2";

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
  {
    path: "/platform",
    element: Plateform,
  },
    {
    path: "/platforms",
    element: Plateform2,
  },
];
