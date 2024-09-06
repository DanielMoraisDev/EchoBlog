test("Verificar soma de dois valores", () => {
    function Soma(a, b) {
        return a + b
    }

    expect(Soma(2, 2)).toBe(4)
})