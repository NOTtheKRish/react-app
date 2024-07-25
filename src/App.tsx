import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onCloseBtnClicked={() => setShowAlert(false)}>
          Button Clicked
        </Alert>
      )}
      <Button color="primary" onClick={() => setShowAlert(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default App;
