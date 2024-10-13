import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/Task.Page";
import NewTask from "./pages/New.Task";
import NotFound from "./pages/Not.Fount";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Index  from "./pages/index";


import { TaskContextProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskContextProvider>
      <div className="flex flex-col min-h-screen bg-zinc-900">
        <Navbar />
        <div className="container mx-auto flex-grow py-4">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/newtask" element={<NewTask />} />
            <Route path="/updatetask/:id" element={<NewTask />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </TaskContextProvider>
  );
}

export default App;
