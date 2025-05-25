import Footer from "../components/todo/footer/footer";
import ToDoHeader from "../components/todo/header/header";
import MainPage from "../components/todo/main/main";

export default function ToDo() {
  return (
    <div className="h-screen">
      <ToDoHeader />
      <MainPage />
      <Footer />
    </div>
  );
}
