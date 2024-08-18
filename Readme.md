Uma implementação simples do algoritimo LZW para compressão de textos usando JavaScript.

Desenvolvido durante a disciplina de Sistema multimidia do curso de TSI da UTFPR.

Requer Node.js.

O programa tem duas opções, compressão e descompressão.

No modo compressão recebe como entrada um texto em caracteres ASCII, e produz uma sequencia de números separados pelo caractere especial `§`.

No modo de descompressão recebe ma sequencia de números separados pelo caractere especial `§` e produz um texto.

Pressionar `Enter` ao finalizar as inserções.

- Instruções de uso. 
    - Executar:
    ```bash
        node lzw_implementation.js
    ```

    - Irá questionar ao usuário o que ele deseja fazer e exigir um texto para comprimir:
    ``` bash
        Deseja Compactar[C] um Descompactar[D] um texto? Digite [D] ou [C]: C
        Informe o texto para Compactar: Jujubas salubres sao boas sim. Cruzes***!
        Resultado: 43§86§75§86§67§66§84§1§84§66§77§100§83§70§103§105§80§1§67§80§102§104§74§78§15§1§36§83§86§91§110§11§128§2
    ```
    
    - Ou um código para descompactar 
    ```bash
        Deseja Compactar[C] um Descompactar[D] um texto? Digite [D] ou [C]: D
        Informe o código para Descompactar: 43§86§75§86§67§66§84§1§84§66§77§100§83§70§103§105§80§1§67§80§102§104§74§78§15§1§36§83§86§91§110§11§128§2
        Resultado: Jujubas salubres sao boas sim. Cruzes***!
    ```

    Atenção: Caracteres não presentes na tabela ASCII podem causar divergências na leitura dos dados comprimidos!