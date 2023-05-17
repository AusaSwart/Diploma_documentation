import React, {useState} from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Layout } from "./components/layout";
import { Main } from "./pages/main";
import { Users } from "./pages/users";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { NotFound } from "./pages/not-found";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [user, setUser] = useState(true)

  return (
      <BrowserRouter>
          <Routes>
          {user
              ?
                  <Route element={<Layout />}>
                      <Route path="/" element={<Main />} />
                      <Route path="/users" element={<Users />} />
                  </Route>
              : <>
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                </>
          }
          <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
