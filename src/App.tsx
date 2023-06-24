import { hstack } from "../styled-system/patterns";
import { button } from "./button.css";

function App() {
  return (
    <>
      <div className={hstack({ gap: "8px", padding: "16px" })}>
        <button className={button({ size: "small", type: "default" })}>
          Button
        </button>
        <button className={button({ size: "large", type: "default" })}>
          Button
        </button>
        <button className={button({ size: "small", type: "danger" })}>
          Button
        </button>
        <button className={button({ size: "large", type: "danger" })}>
          Button
        </button>
        <button className={button()}>Button</button>
      </div>
    </>
  );
}

export default App;
