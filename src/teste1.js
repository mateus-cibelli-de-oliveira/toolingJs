const getAdress = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    try{
        const resposta = await fetch(url);
        if(!resposta.ok) throw Error("Invalid postal code!");
        const json = await resposta.json();
        return json;
    } catch(e){
        throw e
    }
}

getAdress("03136-050").then(data => console.log(data));