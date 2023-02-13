
const { createApp } = Vue;

createApp({
    el: '#app',
    data(){
        return {
            cores: ['verde', 'vermelho', 'azul', 'amarelo'],
            sequencia: [],
            sequenciaJogador: [],
            preto: 'preto',
            verde: 'preto',
            vermelho: 'preto',
            azul: 'preto',
            amarelo: 'preto',
            do: 'src/audio/do-m1.mp3',
            re: 'src/audio/ré-m1.mp3',
            mi: 'src/audio/mi-m1.mp3',
            fa: 'src/audio/fá-m1.mp3',
            pontos: 0,
            contadorSequeniaDeCores: 0,
            mostrandoSequencia: false,
            isShaking: false,
            isDisabled: false, //Informa se botão iniciar está habilitado ou desabilitado.
        }
    },
    methods: {
               
        iniciarRodada(){

            let numero = Math.floor(Math.random() * 4);
            let contador = 0;
            this.sequenciaJogador.length = 0;
            this.contadorSequeniaDeCores = 0;
            this.sequencia.push(this.cores[numero]);
            this.mostrandoSequencia = true;
            this.isDisabled = true; //Desabilita botão iniciar partida.

            let intervalo = setInterval(()=>{
                
                for(i=0; i<1; i++){
                    
                    if(this.sequencia[contador] == 'verde'){

                        this.verde = 'verde';

                        //Áudio
                        let notaDo = new Audio(this.do);
                        notaDo.play();

                        //apagar
                        this.vermelho = 'preto';
                        this.azul = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'vermelho'){

                        this.vermelho = 'vermelho';

                        //Áudio
                        let notaRe = new Audio(this.re);
                        notaRe.play();

                        //apagar
                        this.verde = 'preto';
                        this.azul = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'azul'){

                        this.azul = 'azul';
                        
                        //Áudio
                        let notaMi = new Audio(this.mi);
                        notaMi.play();

                        //apagar
                        this.verde = 'preto';
                        this.vermelho = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'amarelo'){

                        this.amarelo = 'amarelo';
                        
                        //Áudio
                        let notaFa = new Audio(this.fa);
                        notaFa.play();

                        //apagar
                        this.verde = 'preto';
                        this.vermelho = 'preto';
                        this.azul = 'preto';
                    }
                    
                    //console.log(this.sequencia[contador]);
                    contador += 1;
                }
                
                if(contador >= this.sequencia.length){
                    clearInterval(intervalo);
                    contador = 0;
                    setTimeout(()=>{
                        this.verde = 'preto';
                        this.vermelho = 'preto';
                        this.azul = 'preto';
                        this.amarelo = 'preto';
                        this.mostrandoSequencia = false;
                    }, 1000);
                }
            }, 1000);

            //console.log('---');

        },
        compararSequencia(e){
            
            if(this.mostrandoSequencia === false){

                if(this.sequencia.length > 0){ //adicionar checagem se as cores estão rodando, se estiver não pode clicar.
                
                    if(e.target.id == 'verdeId'){
    
                        this.sequenciaJogador.push(this.cores[0]);
                        //Áudio
                        let notaDo = new Audio(this.do);
                        notaDo.play();

                        setTimeout(()=>{
                            this.verde = 'verde';
                        }, 0);
    
                        setTimeout(()=>{
                            this.verde = 'preto';
                        }, 1000);
                        
                        if('verde' === this.sequencia[this.contadorSequeniaDeCores]){
                            //console.log('acertou');
                            // testar se as entradas são iguais
                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                            this.contadorSequeniaDeCores += 1;
                            
                            if(this.contadorSequeniaDeCores === this.sequencia.length){
                                this.pontos += 1;
                                setTimeout(()=>{
                                    this.iniciarRodada();
                                }, 1000);
                            }

                        }else{
                            //console.log('errou');
                            this.sequencia.length = 0;
                            this.sequenciaJogador.length = 0;
                            this.contadorSequeniaDeCores = 0;
                            this.isShaking = 'animation: shake 1.0s cubic-bezier(.70,.20,.30,.140) both; transform: translate3d(0, 0, 0);';
                            setTimeout(()=>{
                                alert(`Você perdeu, sua pontuação foi ${this.pontos}.`);
                                this.pontos = 0;
                                this.isShaking = false;
                                this.isDisabled = false; //Habilita botão iniciar partida.
                            }, 1000);
                            
                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                        }
    
                        
                    }else if(e.target.id == 'vermelhoId'){
    
                        this.sequenciaJogador.push(this.cores[1]);

                        //Áudio
                        let notaRe = new Audio(this.re);
                        notaRe.play();
                        
                        setTimeout(()=>{
                            this.vermelho = 'vermelho';
                        }, 0);
    
                        setTimeout(()=>{
                            this.vermelho = 'preto';
                        }, 1000);
    
                        if('vermelho' === this.sequencia[this.contadorSequeniaDeCores]){
                            //console.log('acertou');
                            // testar se as entradas são iguais
                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                            this.contadorSequeniaDeCores += 1;
                            
                            if(this.contadorSequeniaDeCores === this.sequencia.length){
                                this.pontos += 1;
                                setTimeout(()=>{
                                    this.iniciarRodada();
                                }, 1000);
                            }
                            
                        }else{
                            //console.log('errou');
                            this.sequencia.length = 0;
                            this.sequenciaJogador.length = 0;
                            this.contadorSequeniaDeCores = 0;
                            this.isShaking = 'animation: shake 1.0s cubic-bezier(.70,.20,.30,.140) both; transform: translate3d(0, 0, 0);';
                            setTimeout(()=>{
                                alert(`Você perdeu, sua pontuação foi ${this.pontos}.`);
                                this.pontos = 0;
                                this.isShaking = false;
                                this.isDisabled = false; //Habilita botão iniciar partida.
                            }, 1000);

                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                        }
                        
                    }else if(e.target.id == 'azulId'){
    
                        this.sequenciaJogador.push(this.cores[2]);

                        //Áudio
                        let notaMi = new Audio(this.mi);
                        notaMi.play();

                        setTimeout(()=>{
                            this.azul = 'azul';
                        }, 0);
    
                        setTimeout(()=>{
                            this.azul = 'preto';
                        }, 1000);
    
                        if('azul' === this.sequencia[this.contadorSequeniaDeCores]){
                            //console.log('acertou');
                            // testar se as entradas são iguais
                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                            this.contadorSequeniaDeCores += 1;
                            
                            if(this.contadorSequeniaDeCores === this.sequencia.length){
                                this.pontos += 1;
                                setTimeout(()=>{
                                    this.iniciarRodada()
                                }, 1000);
                            }
                            
                        }else{
                            //console.log('errou');
                            this.sequencia.length = 0;
                            this.sequenciaJogador.length = 0;
                            this.contadorSequeniaDeCores = 0;
                            this.isShaking = 'animation: shake 1.0s cubic-bezier(.70,.20,.30,.140) both; transform: translate3d(0, 0, 0);';
                            setTimeout(()=>{
                                alert(`Você perdeu, sua pontuação foi ${this.pontos}.`);
                                this.pontos = 0;
                                this.isShaking = false;
                                this.isDisabled = false; //Habilita botão iniciar partida.
                            }, 1000);

                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                        }
                        
                    }else if(e.target.id == 'amareloId'){
    
                        this.sequenciaJogador.push(this.cores[3]);

                        //Áudio
                        let notaFa = new Audio(this.fa);
                        notaFa.play();

                        setTimeout(()=>{
                            this.amarelo = 'amarelo';
                        }, 0);
    
                        setTimeout(()=>{
                            this.amarelo = 'preto';
                        }, 1000);
    
                        if('amarelo' === this.sequencia[this.contadorSequeniaDeCores]){
                            //console.log('acertou');
                            // testar se as entradas são iguais
                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                            this.contadorSequeniaDeCores += 1;
                            
                            if(this.contadorSequeniaDeCores === this.sequencia.length){
                                this.pontos += 1;
                                setTimeout(()=>{
                                    this.iniciarRodada();
                                }, 1000);
                            }
                    
                        }else{
                            //console.log('errou');
                            this.sequencia.length = 0;
                            this.sequenciaJogador.length = 0;
                            this.contadorSequeniaDeCores = 0;
                            this.isShaking = 'animation: shake 1.0s cubic-bezier(.70,.20,.30,.140) both; transform: translate3d(0, 0, 0);';
                            setTimeout(()=>{
                                alert(`Você perdeu, sua pontuação foi ${this.pontos}.`);
                                this.pontos = 0;
                                this.isShaking = false;
                                this.isDisabled = false; //Habilita botão iniciar partida.
                            }, 1000);

                            //console.log(this.sequencia);
                            //console.log(this.sequenciaJogador);
                        }
    
                    }
                }else{
                    
                    this.isShaking = 'animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; transform: translate3d(0, 0, 0);';
                    setTimeout(()=>{
                        this.isShaking = false;
                        alert('Você ainda não iniciou a rodada.');
                    }, 1000);

                }

            }else{
                this.isShaking = 'animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; transform: translate3d(0, 0, 0);';
                setTimeout(()=>{
                    this.isShaking = false;
                    alert('A sequência de cores está em andamento, aguarde terminar.');
                }, 1000);
                
            }
 
        }

    }
}).mount('#app');