import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";

export class Npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
        })

        // Configurar sprite do player
        const LeonaSpritesheet = SpriteSheet.fromImageSource({
            image: Resources.LeonaSpritesheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

        // Criar as animacoes
        const duracaoFrameAnimacao = 70

        //Idle frente
        const frontIdleLeona = new Animation({
            frames: [
                { graphic: LeonaSpritesheet.getSprite(18, 1) },
                { graphic: LeonaSpritesheet.getSprite(19, 1) },
                { graphic: LeonaSpritesheet.getSprite(20, 1) },
                { graphic: LeonaSpritesheet.getSprite(21, 1) },
                { graphic: LeonaSpritesheet.getSprite(22, 1) },
                { graphic: LeonaSpritesheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        
        this.graphics.add("front-idleLeona", frontIdleLeona)
        //definir animacao inicial do player
        this.graphics.use("front-idleLeona")


          // Configurar sprite do player
          const RyoSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.LeonaSpritesheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

        

        //Idle frente
        const frontIdleRyo = new Animation({
            frames: [
                { graphic: RyoSpriteSheet.getSprite(18, 1) },
                { graphic: RyoSpriteSheet.getSprite(19, 1) },
                { graphic: RyoSpriteSheet.getSprite(20, 1) },
                { graphic: RyoSpriteSheet.getSprite(21, 1) },
                { graphic: RyoSpriteSheet.getSprite(22, 1) },
                { graphic: RyoSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        
        this.graphics.add("front-idleRyo", frontIdleRyo)
        //definir animacao inicial do player
        this.graphics.use("front-idleRyo")

       
        // Configurar sprite do player
        const RyubiSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.LeonaSpritesheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

       
        //Idle frente
        const frontIdleRyubi = new Animation({
            frames: [
                { graphic: RyubiSpriteSheet.getSprite(18, 1) },
                { graphic: RyubiSpriteSheet.getSprite(19, 1) },
                { graphic: RyubiSpriteSheet.getSprite(20, 1) },
                { graphic: RyubiSpriteSheet.getSprite(21, 1) },
                { graphic: RyubiSpriteSheet.getSprite(22, 1) },
                { graphic: RyubiSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        
        this.graphics.add("front-idleRyubi", frontIdleRyubi)
        //definir animacao inicial do player
        this.graphics.use("front-idleRyubi")

    }

    onInitialize(engine: Engine<any>): void {

        
    }


}