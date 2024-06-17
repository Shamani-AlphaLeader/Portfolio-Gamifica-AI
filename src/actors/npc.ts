import { Actor, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
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
    }

    onInitialize(engine: Engine<any>): void {

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
        const frontIdle = new Animation({
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
        
        this.graphics.add("front-idleLeona", frontIdle)
        //definir animacao inicial do player
        this.graphics.use("front-idleLeona")


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
        const frontIdle = new Animation({
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
        
        this.graphics.add("front-idleRyo", frontIdle)
        //definir animacao inicial do player
        this.graphics.use("front-idleRyo")

        
    }


}