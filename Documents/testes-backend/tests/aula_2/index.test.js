import { cursos, divisao, influencer } from "./functions"

test("Verificar se o segundo argumento é zero", () => {
    expect(() => divisao(10, 0)).toThrow(Error)
})

test("Se soldagem está ativo", () => {
    expect(cursos).toContain("Soldagem")
})

test("Verificar idade", () => {
    expect(cursos).toContain("Soldagem")
})

test("Verificar se triguinho existe", () => {
    expect(influencer).toHaveProperty("triguinho")
    expect(influencer).toHaveProperty("endereco.cidade", "Recife")
})