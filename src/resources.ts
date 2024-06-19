import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
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
import leonaSpritePath from "./sprites/Leona_Seo_Hyun_npc.png"
import ryoSpritePath from "./sprites/Ryo_Hayasaki_Shamani_npc.png"
import ryubiSpritePath from "./sprites/Ryubi_Hayasaki_npc.png"
import akemiSpritePath from "./sprites/Akemi_Yokuwo_Shamani_npc.png"

import lisa0 from "./sounds/LiSA - Elect Lyrical.mp3"
import lisa1 from "./sounds/LiSA - Mr.Launcher.mp3"
import lisa2 from "./sounds/LiSA - Best Day, Best Way.mp3"
import lisa3 from "./sounds/LiSA - HELLO WORLD.mp3"
import s3rl from "./sounds/Break the Music  Vau Boy  S3RL.mp3"
import ritmada from "./sounds/ritmada_zelda.mp3"
import classico from "./sounds/zelda.mp3"

import logoFast from "./images/Alpha Squad Awakening - Ryūbi Hayasaki.png"
import logoXYZ from "./images/Alpha Squad Awakening - Leona Seo Hyun.png"
import logoABC from "./images/Alpha Squad Awakening - Ryo Hayasaki.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(playerSpritePath, { filtering: ImageFiltering.Pixel }),
  LeonaSpritesheet: new ImageSource(leonaSpritePath, { filtering: ImageFiltering.Pixel }),
  RyoSpriteSheet: new ImageSource(ryoSpritePath, { filtering: ImageFiltering.Pixel }),
  RyubiSpriteSheet: new ImageSource(ryubiSpritePath, { filtering: ImageFiltering.Pixel }),
  AkemiSpriteSheet: new ImageSource(akemiSpritePath, { filtering: ImageFiltering.Pixel }),
  LogoVertical: new ImageSource(logoVertical),

  LiSa0BGM: new Sound(lisa0),
  LiSa1BGM: new Sound(lisa1),
  LiSa2BGM: new Sound(lisa2),
  LiSa3BGM: new Sound(lisa3),
  S3rlBGM: new Sound(s3rl),
  RitmadaBGM: new Sound(ritmada),
  ClassicoBGM: new Sound(classico),

  logoFast: new ImageSource(logoFast),
  logoXYZ: new ImageSource(logoXYZ),
  logoABC: new ImageSource(logoABC),

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