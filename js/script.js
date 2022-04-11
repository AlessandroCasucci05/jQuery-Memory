
$(() => {

    function shuffleArray(array){
        
        var current, random;
        var j=0;
        while (j<2){
            for (let i=0;i<array.length;i++){

                random=Math.floor(Math.random()*array.length);
                current=array[i];
                array[i]=array[random];
                array[random]=current;
            }
            j++;
        }
        

        return array;
    }

    var foto = [];

    const amare = {
        "surc": "img/amare.png"
    };
    const amare1 = {
        "surc": "img/amare1.png"
    };
    const arrabbiato = {
        "surc": "img/arrabbiato.png"
    };
    const bello = {
        "surc": "img/bello.png"
    };
    const piangere = {
        "surc": "img/piangere.png"
    };
    const ridere = {
        "surc": "img/ridere.png"
    };
    const shock = {
        "surc": "img/shock.png"
    };
    const spavento = {
        "surc": "img/spavento.png"
    };

    foto[0] = amare;
    foto[1] = amare1;
    foto[2] = arrabbiato;
    foto[3] = bello;
    foto[4] = piangere;
    foto[5] = ridere;
    foto[6] = shock;
    foto[7] = spavento;
    foto[8] = amare;
    foto[9] = amare1;
    foto[10] = arrabbiato;
    foto[11] = bello;
    foto[12] = piangere;
    foto[13] = ridere;
    foto[14] = shock;
    foto[15] = spavento;

   var confronta=[];
   var cartegirate=0;
   var time;
   startGame();

    function startGame() {

        foto=shuffleArray(foto);
        const container = $(".container");
        container.addClass("container");
        
        time=setInterval(timer,1000);
        for (let i = 0; i < 16; i++) {
            const casella = $("<div></div>");
            casella.css("width", "9vw");
            casella.css("height", "15vh");
            casella.toggleClass("carta");
            const im=$("<img>");
            im.attr("src",foto[i].surc);
            im.appendTo(casella);
            casella.appendTo(container);
            casella.click(gira);
            

        }
    }
    var s=0;
    var m=0;
    var zeros="0";
    var zerom="0";
    function timer(){
         if (s==60){
             s=0;
             m++;
             zeros="0";
             zerom="0";
         }
         if(s>9){
             zeros="";
         }
         if (m>9){
             zerom="";
         }
         
         $(".timer").text("Timer: "+ zerom+m+":"+zeros+s);
         s++;
    }

    
    var click=0;

    function gira(){

        if ($(this).children('img').attr("id")==="risolto"){
            return;
        }
        
        if (confronta.length<2){
            $(this).children('img').addClass("girata");
            $(this).addClass("flip");
            confronta.push($(this).children("img")[0]);
            click++;
            $(".click").text("Click effettuati: " + click);
        }
        if (confronta.length<2){

        }else{
            
            if (!confronta[0].isEqualNode(confronta[1])){
                setTimeout(() =>{
                    $(confronta[0]).removeClass("girata");
                    $(confronta[1]).removeClass("girata");
                    confronta=[];
                },900)
               
                
            }else{
                cartegirate+=2;
                $(confronta[0]).attr("id","risolto");
                $(confronta[1]).attr("id","risolto");
                confronta=[];
                if (cartegirate===16){
                    vittoria();
                }
            }
        }
        
        
    }

    

    function vittoria(){
        clearInterval(time);
        const btn=$("<button></button>");
        btn.text("Nuova partita");
        btn.addClass("btn");
        const modal=$("<div></div");
        modal.text("Congratulazioni, hai vinto!")
        modal.addClass("modal");
        modal.appendTo("body");
        btn.appendTo(modal);
        $(".container").css("opacity","0.5");
        btn.click(()=>{
            location.reload();
        });
    
    }


});