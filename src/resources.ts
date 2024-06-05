import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVert from "./images/logo-vertical.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  LogoVert: new ImageSource(logoVert)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
