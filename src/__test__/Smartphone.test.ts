import Smartphone from "../ts/Smartphone";

test('check Smartphone', () => {
    const expected = new Smartphone(11, 'Samsung Galaxy Fold5', 200000, true, 1, 'SUMSUNG');
    expect(expected).toEqual({
        id: 11,
        name: 'Samsung Galaxy Fold5',
        price: 200000,
        canAddMore: true,
        count: 1,
        company: 'SUMSUNG'
      })
})