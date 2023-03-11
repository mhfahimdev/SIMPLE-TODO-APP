import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./redux/store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* navbar */}
          <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
            Simple Todo Application with Redux
          </div>
          {/* header */}
          <Header />
          {/* todos */}
          <TodoList />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
