


const dados = [
    {
        id: 1,
        value: 100,
    },
    {
        id: 2,
        value: 50,
    },
]

export const UserData = {

    labels: ['Aluguel','Venda'],
   
      datasets: [{
        data: dados.map(data=> data.value),
        backgroundColor: [
        '#57DACC',
        '#006D77'
        ]
      }]

}
