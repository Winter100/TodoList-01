import "./App.css";
import Card from "./card/Card";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import Title from "./components/Title";

function App() {
  return (
    <Card>
      <Title />
      <MainBody />
      <Footer />
    </Card>
  );
}

export default App;
