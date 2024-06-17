import { ImageFiltering, ImageSource, Loader } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import sword from "./images/sword.png";
import logo from "./images/logo.png"
import logoVertical from "./images/logo-vertical.png"

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroom_map.tmx?url"
import playerSpritePath from "./sprites/Bruno_Shamani_player.png"
import LeonaSpritePath from "./sprites/Leona_Seo_Hyun_npc.png"
import RyoSpritePath from "./sprites/Ryo_Hayasaki_Shamani_npc.png"
import RyubiSpritePath from "./sprites/Ryubi_Hayasaki_npc.png"
export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(playerSpritePath, { filtering: ImageFiltering.Pixel }),
  LeonaSpritesheet: new ImageSource(LeonaSpritePath, { filtering: ImageFiltering.Pixel }),
  RyoSpriteSheet: new ImageSource(RyoSpritePath, { filtering: ImageFiltering.Pixel }),
  RyubiSpriteSheet: new ImageSource(RyubiSpritePath, { filtering: ImageFiltering.Pixel }),
  LogoVertical: new ImageSource(logoVertical),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath },
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx", output: tsxEstoquePath },
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath }
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}