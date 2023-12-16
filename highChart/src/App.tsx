import { useState } from "react";
import Button from "@mui/material/Button";
import FullScreenDialog from "./components/FullScreenDialog/FullScreenDialog";
import "./App.css";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Click here to see the chart
      </Button>
      <FullScreenDialog open={open} onClose={handleClose} />
    </>
  );
}

export default App;
