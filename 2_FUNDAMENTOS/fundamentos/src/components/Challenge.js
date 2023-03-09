{
/*Desafio 2:
1. Crie um componente chamado Challenge;
2. Importe-o em App.js 
3. No componente criado faça a criação de dois valores numéricos;
4. Imprima este valores no componente;
5. Crie também um evento de click que soma estes dois valores e exibe no console.
*/
}

const Challenge = () => {

    const somar = () => {        
        let valorA = parseInt(document.getElementById('valA').value)
        let valorB = parseInt(document.getElementById('valB').value)

        console.log(`A soma entre ${valorA} + ${valorB} é: ${valorA + valorB}`)
    }

    return (
        <div>
            <h1>*** Segundo Desafio ***</h1>
            <h2>Somar os dois valores.</h2>
            <div>
                <label htmlFor="valA">Valor A: </label>
                <input type="number" id="valA" />

                <label htmlFor="valB">Valor A: </label>
                <input type="number" id="valB" />
                <button onClick={somar}>Somar</button>
            </div>
        </div>
    );

};

export default Challenge;