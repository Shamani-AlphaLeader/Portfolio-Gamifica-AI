import { Actor, Color, Engine, Scene, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    elementoHTML?: HTMLElement

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        this.elementoHTML = document.createElement("div") as HTMLElement
        this.elementoHTML.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoHTML)

        this.elementoHTML.innerHTML = `<h2>Oque é Gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.
        </p>`

        this.elementoHTML.classList.add("gamificacao")

        // Carregando a imagem
        let spriteLogoGamificaAi = Resources.GameController.toSprite()
        spriteLogoGamificaAi.scale = vec(0.7, 0.7)

        // Criacao do Actor para a imagem
        let actorLogoGamificaAi = new Actor({
            pos: vec(300, engine.halfDrawHeight)
        })

        actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

        this.add(actorLogoGamificaAi)
    }


}
