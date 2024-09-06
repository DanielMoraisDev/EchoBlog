export const divisao = (a, b) => {
    if (b === 0) {
        throw new Error("Não é possivel dividir por zero")
    }

    return a / b
}

export const cursos = ["Eletrotécnica", "Informática para internet", "Moda", "Soldagem"]

export const influencer = {
    nome: "Doutoura Deolane",
    idade: 36,
    endereco: {
        cidade: "Recife",
        estado: "Pernambuco"
    },
    enderecoProvisorio: "Colônia Penal Feminina Bom Pastor",
    seguidores: 20000000,
    triguinho: true
}

