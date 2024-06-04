import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {

    textoIniciar?: Label

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // this = Essa classe, ou seja, essa Cena.
        this.backgroundColor = Color.Black

        // Configura o objeto para ser a frase be Bem-vindo.
        let fraseBemVindo = new Label({
            text: "Bem vindo ao Portfolio",
            width: 400,
            height: 50,
            // Posicao X = metade da tela, Posicao Y = 300.
            pos: vec(engine.drawWidth / 2, 300),
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        // Adiciona a frase na cena, tela.
        this.add(fraseBemVindo)

        // Configurar o Actor do logo
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430),
            color: Color.Red
        })

        // Utilizar imagem do logo
        let imagemLogo = Resources.Logo.toSprite()

        // Aplicar zoom na imagem
        imagemLogo.scale = vec(0.4, 0.4)

        // Configurar o Actor para usar a imagem
        actorLogo.graphics.add(imagemLogo)

        // Adicionando Actor  Logo na tela
        this.add(actorLogo)

        //EXERCICIO: - Criacao do textoIniciar - Pressione "Enter" para iniciar


        this.textoIniciar = new Label({
            text: 'Pressione "Enter" para iniciar...',
            height: 50,
            width: 200,
            pos: vec(engine.drawWidth / 2, 630),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })

        })
        // Adicionar textoIniciar na tela
        this.add(this.textoIniciar)

        // Monitora o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            // Caso a tecla pressionada for "Enter", deve ir para a proxima cena
            if (event.key == Keys.Enter) {
                //Direciona para a cena
                engine.goToScene("historia")
            }
        })
    }


    onPreUpdate(engine: Engine<any>, delta: number): void {
        this.textoIniciar?.actions.repeatForever(context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        })
        

    }
}