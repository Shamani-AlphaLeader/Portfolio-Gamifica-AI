import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVert from "./images/logo-vertical.png";
import gameController from "./images/gamification-ctrl.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  LogoVert: new ImageSource(logoVert),
  GameController: new ImageSource(gameController)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
