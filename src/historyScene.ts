import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, FadeInOut, Transition, vec } from "excalibur";
import { Resources } from "./resources";

export class historyScene extends Scene {
    // Declaracao do elementoTexto
    elementoTexto?: HTMLElement

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

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // Criar elemento com a descricao da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement

        // Definir a opacidade do elemento para 1 = visivel
        this.elementoTexto.style.opacity = "1"

        //Inserir elementoTexto no container-game
        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoTexto)

        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
<p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
  usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
  experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
  equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
  desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.
</p>`

        // Configurar o Actor do logoVert
        let actorLogoVert = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight)

        })

        // Utilizar imagem do logo
        let imagemLogoVert = Resources.LogoVertical.toSprite()

        // Aplicar zoom na imagem
        imagemLogoVert.scale = vec(0.7, 0.7)

        // Configurar o Actor para usar a imagem
        actorLogoVert.graphics.add(imagemLogoVert)

        // Adicionando Actor  LogoVert na cena
        this.add(actorLogoVert)

        // Configurar a cena para monitorar o evento de tela pressionada
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {

                // Criar a transicao suave do elementoTexto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a proxima cena
                engine.goToScene("gamificacao")
            }
        })

    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover o elementoTexto da tela
        this.elementoTexto?.remove()

    }
}
