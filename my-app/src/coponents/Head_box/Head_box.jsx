import { Contacts } from "../Contact/Contact";
import { Logo } from "../Logo/Logo";
import { Nav } from "../Navigation/Navigation";
import "./Head_box.scss";

function Head_box() {
  return (
    <div className="head_box">
      <Logo />
      <div>

      <h3>ROCK FOREVER</h3>
      </div>
      <div>
        <Nav/>
      </div>
      <Contacts />
    </div>
  );
}

export { Head_box };
