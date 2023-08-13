import Cart from "../ts/Cart";
import Movie from "../ts/Movie";
import Smartphone from "../ts/Smartphone";

test('check Cart', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);

    cart.add(new Movie(1, 'Мстители', 1000, false, 1, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин.'));
    cart.add(new Movie(2, 'Король Ричард ', 4000, false, 1, 2021, 'США', 'Venus. Serena. Way to the top', ['биография', 'спорт', 'драма'], '144 мин.'));
    cart.add(new Movie(3, 'Омерзительная восьмерка', 5000, false, 1, 2015, 'США', 'Don\'t come here without a good reason.', ['вестерн', 'криминал', 'триллер', 'драма', 'детектив'], '168 мин.'));

    expect(cart.items.length).toBe(3);
    expect(cart.totalСost()).toBe(10000);
    expect(cart.totalСostDiscount(1)).toBe(9900);

    cart.removeItem(1);
    expect(cart.items.length).toBe(2);    

    const smartphone = new Smartphone(11, 'Samsung Galaxy Fold5', 200000, true, 1, 'SUMSUNG');

    cart.add(smartphone);
    expect(cart.items.length).toBe(3);

    cart.add(smartphone);
    expect(cart.items.length).toBe(3);
    expect(cart.items.find(el => el.id === 11)).toEqual({
        id: 11,
        name: 'Samsung Galaxy Fold5',
        price: 200000,
        canAddMore: true,
        count: 2,
        company: 'SUMSUNG'
    });
    expect(cart.totalСost()).toBe(409000);
    expect(cart.totalСostDiscount(1)).toBe(404910);

    cart.removeItem(11);
    expect(cart.items.find(el => el.id === 11)).toEqual({
        id: 11,
        name: 'Samsung Galaxy Fold5',
        price: 200000,
        canAddMore: true,
        count: 1,
        company: 'SUMSUNG'
    });

    cart.removeItem(11);
    expect(cart.items.length).toBe(2);

    cart.add(new Movie(2, 'Король Ричард ', 4000, false, 1, 2021, 'США', 'Venus. Serena. Way to the top', ['биография', 'спорт', 'драма'], '144 мин.'));
    expect(cart.items.length).toBe(2);

    cart.removeItem(111);
    expect(cart.items.length).toBe(2);
});
