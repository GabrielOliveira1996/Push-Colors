
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
            contadorSequeniaDeCores: 0,
        }
    },
    methods: {
               
        iniciarRodada(){

            let numero = Math.floor(Math.random() * 4);
            let contador = 0;
            this.sequenciaJogador.length = 0;
            this.contadorSequeniaDeCores = 0;
            this.sequencia.push(this.cores[numero]);
            let intervalo = setInterval(()=>{
                //contador = this.iniciarCores();

                for(i=0; i<1; i++){
                    
                    if(this.sequencia[contador] == 'verde'){

                        this.verde = 'verde';
                        //apagar
                        this.vermelho = 'preto';
                        this.azul = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'vermelho'){

                        this.vermelho = 'vermelho';
                        //apagar
                        this.verde = 'preto';
                        this.azul = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'azul'){

                        this.azul = 'azul';
                        //apagar
                        this.verde = 'preto';
                        this.vermelho = 'preto';
                        this.amarelo = 'preto';
                    }else if(this.sequencia[contador] == 'amarelo'){

                        this.amarelo = 'amarelo';
                        //apagar
                        this.verde = 'preto';
                        this.vermelho = 'preto';
                        this.azul = 'preto';
                    }
                    
                    console.log(this.sequencia[contador]);
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
                    }, 1000);
                }
            }, 1000);

            console.log('---');

        },
        compararSequencia(e){
 
            console.log('contador no final do click'+this.contadorSequeniaDeCores);
            //adicionar funcionalidade para apagar div
            if(this.sequencia.length > 0){
                
                if(e.target.id == 'verdeId'){

                    this.sequenciaJogador.push(this.cores[0]);
                    setTimeout(()=>{
                        this.verde = 'verde';
                    }, 0);

                    setTimeout(()=>{
                        this.verde = 'preto';
                    }, 1000);
                    
                    if('verde' === this.sequencia[this.contadorSequeniaDeCores]){
                        //emitir som da div 
                        console.log('acertou');
                        console.log('sequencia: '+this.sequencia[this.contadorSequeniaDeCores]);
                        console.log('sequencia jogador: '+'verde');
                        this.contadorSequeniaDeCores += 1;
                        // testar se as entradas são iguais
                    }else{
                        console.log('errou');
                        this.sequencia.length = 0;
                        this.sequenciaJogador.length = 0;
                        this.contadorSequeniaDeCores = 0;
                        console.log(this.sequencia);
                        console.log(this.sequenciaJogador);
                    }

                    
                }else if(e.target.id == 'vermelhoId'){

                    this.sequenciaJogador.push(this.cores[1]);
                    // testar se as entradas são iguais
                    console.log(this.sequencia);
                    console.log(this.sequenciaJogador);
                    setTimeout(()=>{
                        this.vermelho = 'vermelho';
                    }, 0);

                    setTimeout(()=>{
                        this.vermelho = 'preto';
                    }, 1000);

                    if('vermelho' === this.sequencia[this.contadorSequeniaDeCores]){
                        //emitir som da div 
                        console.log('acertou');
                        console.log('sequencia: '+this.sequencia[this.contadorSequeniaDeCores]);
                        console.log('sequencia jogador: '+'vermelho');
                        this.contadorSequeniaDeCores += 1;
                        // testar se as entradas são iguais
                    }else{
                        console.log('errou');
                        this.sequencia.length = 0;
                        this.sequenciaJogador.length = 0;
                        this.contadorSequeniaDeCores = 0;
                        console.log(this.sequencia);
                        console.log(this.sequenciaJogador);
                    }
                    
                }else if(e.target.id == 'azulId'){

                    this.sequenciaJogador.push(this.cores[2]);
                    // testar se as entradas são iguais
                    console.log(this.sequencia);
                    console.log(this.sequenciaJogador);
                    setTimeout(()=>{
                        this.azul = 'azul';
                    }, 0);

                    setTimeout(()=>{
                        this.azul = 'preto';
                    }, 1000);

                    if('azul' === this.sequencia[this.contadorSequeniaDeCores]){
                        //emitir som da div 
                        console.log('acertou');
                        console.log('sequencia: '+this.sequencia[this.contadorSequeniaDeCores]);
                        console.log('sequencia jogador: '+'azul');
                        this.contadorSequeniaDeCores += 1;
                        // testar se as entradas são iguais
                    }else{
                        console.log('errou');
                        this.sequencia.length = 0;
                        this.sequenciaJogador.length = 0;
                        this.contadorSequeniaDeCores = 0;
                        console.log(this.sequencia);
                        console.log(this.sequenciaJogador);
                    }
                    
                }else if(e.target.id == 'amareloId'){

                    this.sequenciaJogador.push(this.cores[3]);
                    // testar se as entradas são iguais
                    console.log(this.sequencia);
                    console.log(this.sequenciaJogador);
                    setTimeout(()=>{
                        this.amarelo = 'amarelo';
                    }, 0);

                    setTimeout(()=>{
                        this.amarelo = 'preto';
                    }, 1000);

                    if('amarelo' === this.sequencia[this.contadorSequeniaDeCores]){
                        //emitir som da div 
                        console.log('acertou');
                        console.log('sequencia: '+this.sequencia[this.contadorSequeniaDeCores]);
                        console.log('sequencia jogador: '+'amarelo');
                        this.contadorSequeniaDeCores += 1;
                        // testar se as entradas são iguais
                        
                    }else{
                        console.log('errou');
                        this.sequencia.length = 0;
                        this.sequenciaJogador.length = 0;
                        this.contadorSequeniaDeCores = 0;
                        console.log(this.sequencia);
                        console.log(this.sequenciaJogador);
                    }

                }
            }
            
            
            
        }

    }
}).mount('#app');