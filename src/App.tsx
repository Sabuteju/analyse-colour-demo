import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AndroidLarge from "./pages/AndroidLarge";
import AndroidLarge1 from "./pages/AndroidLarge1";
import AndroidLarge2 from "./pages/AndroidLarge2";
import AndroidLarge3 from "./pages/AndroidLarge3";
import AndroidLarge4 from "./pages/AndroidLarge4";
import AndroidLarge5 from "./pages/AndroidLarge5";
import AndroidLarge6 from "./pages/AndroidLarge6";
import AndroidLarge7 from "./pages/AndroidLarge7";
import AndroidLarge8 from "./pages/AndroidLarge8";
import AndroidLarge9 from "./pages/AndroidLarge9";
import AndroidLarge10 from "./pages/AndroidLarge10";
import AndroidLarge11 from "./pages/AndroidLarge11";
import AndroidLarge12 from "./pages/AndroidLarge12";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-2":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-3":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-4":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-9":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-11":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-13":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-14":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-15":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-16":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-17":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-18":
        title = "";
        metaDescription = "";
        break;
      case "/android-large-19":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AndroidLarge />} />
      <Route path="/android-large-2" element={<AndroidLarge1 />} />
      <Route path="/android-large-3" element={<AndroidLarge2 />} />
      <Route path="/android-large-4" element={<AndroidLarge3 />} />
      <Route path="/android-large-9" element={<AndroidLarge4 />} />
      <Route path="/android-large-11" element={<AndroidLarge5 />} />
      <Route path="/android-large-13" element={<AndroidLarge6 />} />
      <Route path="/android-large-14" element={<AndroidLarge7 />} />
      <Route path="/android-large-15" element={<AndroidLarge8 />} />
      <Route path="/android-large-16" element={<AndroidLarge9 />} />
      <Route path="/android-large-17" element={<AndroidLarge10 />} />
      <Route path="/android-large-18" element={<AndroidLarge11 />} />
      <Route path="/android-large-19" element={<AndroidLarge12 />} />
    </Routes>
  );
}
export default App;
