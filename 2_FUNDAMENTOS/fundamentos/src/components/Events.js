const Events = () => {

    const handleMyEvent = (e) => {
        {/*O parâmetro "e" são os dados que o evento contém  */}
        console.log(e)
    }

    return (
        <div>
            <div>
                {/*Ao chamar o evento, se colocar parênteses () ele chama o evento ao carregar a página*/}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
        </div>
    );
};

export default Events;