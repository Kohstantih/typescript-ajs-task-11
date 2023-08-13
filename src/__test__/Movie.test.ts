import Movie from "../ts/Movie";

test('check Movie', () => {
    const expected = new Movie(1, 'Мстители', 1000, false, 1, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.');
    expect(expected).toEqual({
        id: 1,
        name: 'Мстители',
        price: 1000,
        canAddMore: false,
        count: 1,
        released: 2012,
        country: 'США',
        tagline: 'Avengers Assemble!',
        genre: [ 'фантастика', 'боевик', 'фентези', 'приключения' ],
        duration: '137 мин.'
      })
})