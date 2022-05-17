
const dados = [

    {
        id: 1,
        value: 100,
    },
    {
        id: 2,
        value: 100,
    },
    {
        id: 3,
        value: 100
    },
    {
        id: 4,
        value: 100
    },
    {
        id: 5,
        value: 100
    },
    {
        id: 6,
        value: 100
    },
    
]

export const UserData = {

    labels: [1, 2, 3],
   
      datasets: [{
        data: dados.map(data=> data.value),
        backgroundColor: [
        '#57DACC',
        '#006D77'
        ]
      }]

}
