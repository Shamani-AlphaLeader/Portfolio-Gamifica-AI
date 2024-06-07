import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {

// Metodo para esmaecer um elemento HTML
fadeOutElement(elemento: HTMLElement) {
    let opacidade = parseFloat(elemento.style.opacity)

    // Repetir diminuicao da opacidade
    setInterval(()=> {


    // Pegar opacidade do elemento HTML
    if (opacidade > 0) {

        // Diminuir a opacidade
        opacidade -= 0.01

        //Atualizar a opacidade do elemento
        elemento.style.opacity = opacidade.toString()
    }
}, 9)
}

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

        // Configura a cena para detectar a tecla Enter e ir para a proxima cena
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                this.fadeOutElement(this.elementoHTML!)
                engine.goToScene("exposicao")
            }
        })

    }

onDeactivate(context: SceneActivationContext<undefined>): void {
    this.elementoHTML?.remove()
}
}
