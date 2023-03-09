const Events = () => {

    const handleMyEvent = (e) => {
        {/*O parâmetro "e" são os dados que o evento contém  */}
        console.log(e)

        console.log("Ativou o evento!")
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso.</h1>
        }else {
            return <h1>Também posso renderizar isso.</h1>
        }
    }

    return (
        <div>
            <div>
                {/*Ao chamar o evento, se colocar parênteses () ele chama o evento ao carregar a página*/}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou na Arrowfunction direto no evento!")}>
                    Clique aqui também!                
                </button>
                <button                    
                    onClick={() => {
                        {/*Desta maneira por ser uma função maior, não é indicado fazer assim com a função direto no evento! */}
                        if(true) {
                            console.log("Aqui não é indicado fazer!");
                        }                    
                    }}
                >
                    Clique aqui
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;