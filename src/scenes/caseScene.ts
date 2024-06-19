import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any
    private elementoTexto?: HTMLElement
    private actorEmpresa?: Actor

    private listaImagens?: Sprite[]

    private textoDaCena: string = ""

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Criar elemento com a descricao do case
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.classList.add("textocase")

        // Adicionar o elemento ao container game
        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoTexto)

        // Ao pressionar a tecla ESC voltar para a exposicao
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })

        // Criar actor para receber a imagem
        this.actorEmpresa = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // Carregar imagens das empresas
        let imagemEmpresaXYZ = Resources.logoXYZ.toSprite()
        let imagemEmpresaABC = Resources.logoABC.toSprite()
        let imagemEmpresaFastMart = Resources.logoFast.toSprite()

        this.listaImagens = [imagemEmpresaXYZ, imagemEmpresaABC, imagemEmpresaFastMart]
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Faz a caixa de texto aparecer ao chegar na cena
        this.elementoTexto!.style.opacity = "1"


        // Pegar e receber os dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for a mesa A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.textoDaCena = "Essa é a descrição do case A"
            // mesa A detectada
            this.elementoTexto!.innerHTML = '<h2>XYZ Tech - <p><p>'

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.8, 0.8)
        }

        // Se for a mesa B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.textoDaCena = "Essa é a descrição do case B"
            // mesa B detectada
            this.elementoTexto!.innerHTML = '<h2>ABC finance - <p><p>'

            // Inserir o sprite no actor da mesa B
            this.actorEmpresa?.graphics.add(this.listaImagens![1])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.8, 0.8)
        }

        // Se for a mesa C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.textoDaCena = "Essa é a descrição do case C"
            // mesa C detectada
            this.elementoTexto!.innerHTML = '<h2>FastMart - <p><p>'

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![2])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.8, 0.8)
        }

        // Adiciona o actor da imagem na tela
        this.add(this.actorEmpresa!)
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Faz a caixa do texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "0"
    }
}