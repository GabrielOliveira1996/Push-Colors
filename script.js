
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
        }
    },
    methods: {
               
        iniciarRodada(){

            let numero = Math.floor(Math.random() * 4);
            let contador = 0;
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
            
            //adicionar funcionalidade para apagar div
            if(e.target.id == 'verdeId'){

                this.sequenciaJogador += 'verde';
                setTimeout(()=>{
                    this.verde = 'verde';
                    console.log('verde');
                }, 1000);
                
            }else if(e.target.id == 'vermelhoId'){

                this.sequenciaJogador += 'vermelho';
                setTimeout(()=>{
                    this.vermelho = 'vermelho';
                    console.log('vermelho');
                }, 1000);
                
            }else if(e.target.id == 'azulId'){

                this.sequenciaJogador += 'azul';
                setTimeout(()=>{
                    this.azul = 'azul';
                    console.log('azul');
                }, 1000);
                
            }else if(e.target.id == 'amareloId'){

                this.sequenciaJogador += 'amarelo';
                setTimeout(()=>{
                    this.amarelo = 'amarelo';
                    console.log('amarelo'); 
                }, 1000);

            }
            
            
        }

    }
}).mount('#app');