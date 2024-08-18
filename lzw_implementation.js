// Execution of the program
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Deseja Compactar[C] um Descompactar[D] um texto? Digite [D] ou [C]: ', op => {
    if(op == 'C'){
        readline.question('Informe o texto para Compactar: ', data => {
            console.log(comprimeLzw(data));
            readline.close();         
        });
    }else if(op == 'D'){
        readline.question('Informe o código para Descompactar: ', data => {
            console.log(descomprimeLzw(data));
            readline.close();
        });
    }else{
        console.log('Opção inválida!!');
    }
  });
//----------------------------------------------------------------------
    // Global variables for the functions
    var asciiChars = ' §!§"§#§$§%§&§\'§(§)§*§+§,§-§.§/§0§1§2§3§4§5§6§7§8§9§:§;§<§=§>§?§@§A§B§C§D§E§F§G§H§I§J§K§L§M§N§O§P§Q§R§S§T§U§V§W§X§Y§Z§[§\§]§^§_§`§a§b§c§d§e§f§g§h§i§j§k§l§m§n§o§p§q§r§s§t§u§v§w§x§y§z§{§|§}§~§';
    var dictionary = [];

// Functions for compress and decompress data
  function comprimeLzw(data){
    var compressed = 'Resultado: ';
    var dataArray = [];
    var s = null;
    var c = null;

    // populate dictionary
    dictionary = asciiChars.split('§');
    
    //Extract input into array
    for(let i=0; i < data.length; i++){
        let char = data.substr(i, 1);
        // Invalid char is changed to #
        if(dictionary.indexOf(char) < 0){
            char = '#'
        }
        dataArray[i] = char;
    };

    // compactation
    for(let i = 0; i < data.length; i++){
        c = dataArray[i];
        var aux;
        if(i == 0){
            aux = c;
        } else{
            aux = s.concat(c);
        }

        let pos = dictionary.indexOf(aux);
        
        if(pos >= 0){
            s = aux;
        }else{
            compressed = compressed.concat((dictionary.indexOf(s) + 1).toString() + '§');
            dictionary[dictionary.length] = aux;
            s = c;
        }
    };

    if(s != null){
        compressed = compressed.concat((dictionary.indexOf(s) + 1).toString());
    };
    
    return compressed; 
  }

//-------------------------------------------------------------------------------------------------
  function descomprimeLzw(data){
    var decompressed = 'Resultado: ';
    var dataArray = [];

    var p;
    var c;

    var ant = null;
    var prim = null;

    //populate dictionary
    dictionary = asciiChars.split('§');

    //get input code into array
    dataArray = data.split('§');

    //1st round
    c = dataArray[0];
    p = c;
    decompressed = decompressed.concat(dictionary[c - 1]);

    for(let i = 1; i < dataArray.length; i++){
        c = dataArray[i];

        // if exists in dictionary
        if(dictionary[c - 1] != null){
            decompressed = decompressed.concat(dictionary[c - 1]);
            ant = dictionary[p - 1];
            prim = dictionary[c - 1].substring(0,1);
            dictionary[dictionary.length] = ant.concat(prim);
            p = c;
        }else{
            ant = dictionary[p - 1];
            prim = dictionary[p - 1].substring(0,1);
            decompressed = decompressed.concat(ant.concat(prim));
            dictionary[dictionary.length] = ant.concat(prim);
        }
    }

    return decompressed;
  }