import { Contacts } from "../Contact/Contact";
import { Logo } from "../Logo/Logo";
import "./Head_box.scss";

function Head_box() {
  return (
    <div className="head_box">
      <Logo />
      <h3>ROCK FOREVER</h3>
      <Contacts />
    </div>
  );
}

export { Head_box };
