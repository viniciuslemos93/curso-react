const TemplateExpressions = () => {
    const nome = "Vinicius"
    const data = {
        age: 29,
        job: "Programmer",
    };
    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>Você atua como {data.job} e tem {data.age} anos</p>
        </div>
    );
};

export default TemplateExpressions;