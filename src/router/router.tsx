import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TaskPage = lazy(() => import("../pages/tasks/index"));

function Router() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<TaskPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Router;
