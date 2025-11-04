import AntButton from "./components/ui/AntButton";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="space-y-4 p-4">
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <AntButton>AntButton</AntButton>
      </div>
    </div>
  );
}

export default App;
