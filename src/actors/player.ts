import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propriedades do player
    private velocidade: number = 180
    private ultimadirecao: string = "down"

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider


    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine<any>): void {

        // Configurar sprite do player
        const PlayerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
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

        // animacoes Idle
        // Idle Esquerda
        const leftIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 1) },
                { graphic: PlayerSpriteSheet.getSprite(13, 1) },
                { graphic: PlayerSpriteSheet.getSprite(14, 1) },
                { graphic: PlayerSpriteSheet.getSprite(15, 1) },
                { graphic: PlayerSpriteSheet.getSprite(16, 1) },
                { graphic: PlayerSpriteSheet.getSprite(17, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-idle", leftIdle)

        //Idle direita
        const rightIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 1) },
                { graphic: PlayerSpriteSheet.getSprite(1, 1) },
                { graphic: PlayerSpriteSheet.getSprite(2, 1) },
                { graphic: PlayerSpriteSheet.getSprite(3, 1) },
                { graphic: PlayerSpriteSheet.getSprite(4, 1) },
                { graphic: PlayerSpriteSheet.getSprite(5, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)

        //Idle costas
        const backIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(6, 1) },
                { graphic: PlayerSpriteSheet.getSprite(7, 1) },
                { graphic: PlayerSpriteSheet.getSprite(8, 1) },
                { graphic: PlayerSpriteSheet.getSprite(9, 1) },
                { graphic: PlayerSpriteSheet.getSprite(10, 1) },
                { graphic: PlayerSpriteSheet.getSprite(11, 1) }
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", backIdle)

        //Idle frente
        const frontIdle = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 1) },
                { graphic: PlayerSpriteSheet.getSprite(19, 1) },
                { graphic: PlayerSpriteSheet.getSprite(20, 1) },
                { graphic: PlayerSpriteSheet.getSprite(21, 1) },
                { graphic: PlayerSpriteSheet.getSprite(22, 1) },
                { graphic: PlayerSpriteSheet.getSprite(23, 1) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle", frontIdle)

        //definir animacao inicial do player
        this.graphics.use("down-idle")


        // definir a animacao walk(andar)
        //para andar pra esquerda
        const leftWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(12, 2) },
                { graphic: PlayerSpriteSheet.getSprite(13, 2) },
                { graphic: PlayerSpriteSheet.getSprite(14, 2) },
                { graphic: PlayerSpriteSheet.getSprite(15, 2) },
                { graphic: PlayerSpriteSheet.getSprite(16, 2) },
                { graphic: PlayerSpriteSheet.getSprite(17, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-walk", leftWalk)


        //para andar pra direita
        const rightWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(0, 2) },
                { graphic: PlayerSpriteSheet.getSprite(1, 2) },
                { graphic: PlayerSpriteSheet.getSprite(2, 2) },
                { graphic: PlayerSpriteSheet.getSprite(3, 2) },
                { graphic: PlayerSpriteSheet.getSprite(4, 2) },
                { graphic: PlayerSpriteSheet.getSprite(5, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-walk", rightWalk)


        //para andar pra cima
        const upWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(6, 2) },
                { graphic: PlayerSpriteSheet.getSprite(7, 2) },
                { graphic: PlayerSpriteSheet.getSprite(8, 2) },
                { graphic: PlayerSpriteSheet.getSprite(9, 2) },
                { graphic: PlayerSpriteSheet.getSprite(10, 2) },
                { graphic: PlayerSpriteSheet.getSprite(11, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-walk", upWalk)


        //para andar pra baixo
        const downWalk = new Animation({
            frames: [
                { graphic: PlayerSpriteSheet.getSprite(18, 2) },
                { graphic: PlayerSpriteSheet.getSprite(19, 2) },
                { graphic: PlayerSpriteSheet.getSprite(20, 2) },
                { graphic: PlayerSpriteSheet.getSprite(21, 2) },
                { graphic: PlayerSpriteSheet.getSprite(22, 2) },
                { graphic: PlayerSpriteSheet.getSprite(23, 2) },
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-walk", downWalk)



        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    // definir a animacao
                    this.graphics.use("left-walk")

                    // Guardar ultima animacao
                    this.ultimadirecao = "left"

                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x para positiva, que significa movimentar o player para a direita
                    this.vel.x = this.velocidade
                    // definir a animacao
                    this.graphics.use("right-walk")

                    // Guardar ultima animacao
                    this.ultimadirecao = "right"

                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para cima
                    // Define a velocidade y para negativa, que significa movimentar o player para cima
                    this.vel.y = -this.velocidade
                    // definir a animacao
                    this.graphics.use("up-walk")

                    // Guardar ultima animacao
                    this.ultimadirecao = "up"

                    break;

                case Keys.Down:
                case Keys.S:
                    // Mover para baixo
                    // Define a velocidade y para positiva, que significa movimentar o player para baixo
                    this.vel.y = this.velocidade
                    // definir a animacao
                    this.graphics.use("down-walk")

                    // Guardar ultima animacao
                    this.ultimadirecao = "down"

                    break;

                default:
                    // Zera a velocidade do Player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })

        // Configura o player para monitorar evento "release" -> soltar
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            // Parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0

            }

            // Parar movimentação vertical ao soltar as teclas de movimentação vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade vertical
                this.vel.y = 0
            }

            // Ao parar o player, definir a animacao idle da ultima direcao
            if (this.vel.x == 0 && this.vel.y == 0) {
                this.graphics.use(this.ultimadirecao + "-idle")



                // Configurar o player para monitorar o evento "press" -> pressionar
                engine.input.keyboard.on("press", (event) => {
                    // Se pressionar a tecla "F"
                    if (event.key == Keys.F && this.temObjetoProximo) {

                        // Para identificar o alvo da colisao
                        if (this.ultimoColisor?.owner.name == "mesa_stand_a") {
                            console.log("voce interagiu com a mesa A ");

                            // Vai para a cena passando qual o objeto da interacao
                            engine.goToScene("case", {
                                sceneActivationData: {
                                    // Passa o nome do actor que interagiu com o player
                                    nomeDoActor: this.ultimoColisor?.owner.name
                                }
                            })
                        }

                        if (this.ultimoColisor?.owner.name == "mesa_stand_b") {
                            console.log("voce interagiu com a mesa B ");
                        }

                        if (this.ultimoColisor?.owner.name == "mesa_stand_c") {
                            console.log("voce interagiu com a mesa C ");
                        }

                    }
                })



            }

        })
    }

    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        // Indicar que tem um objeto proximo
        this.temObjetoProximo = true

        // Registrar o ultimo objeto colidido
        this.ultimoColisor = other
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // Detectar se o player esta distante do ultimo objeto colidido
        if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 50) {
            // Marcar que o objeto nao esta proximo
            this.temObjetoProximo = false

        }
    }

}