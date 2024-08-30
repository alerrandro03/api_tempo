const url="https://api.hgbrasil.com/weather?format=json-cors&key=34f39676"

acessarAPI()

async function acessarAPI(){
    const rtesultado = await fetch(url)
    const dados_json = await rtesultado.json()

    let cidade = dados_json['results']['city']
    let descricao_tempo = dados_json['results']['description']
    let temperatura_tempo = dados_json['results']['temp']
    let umidade_ar = dados_json['results']['humidity']

    span_cidade.innerText = cidade
    span_descricao.innerText = descricao_tempo
    span_temperatura.innerText = temperatura_tempo
    span_umidade.innerText = umidade_ar
}