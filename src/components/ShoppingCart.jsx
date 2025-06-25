import { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([
        { id: 1, title: 'Футболка', count: 1 },
        { id: 2, title: 'Кепка', count: 2 }
    ]);

    const onAddOneMore = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    return { ...item, count: item.count + 1 };
                }

                return item;
            })
        );
    };

    const onDeleteItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const onClearCart = () => {
        setCart([]);
    };
    return (
        <div className="component">
            <h3>Корзина товаров</h3>
            <div className="shoppingCart">
                {cart.map((item) => {
                    return (
                        <div className="cartItem">
                            {item.title} (Кол-во: {item.count})
                            <div className="cartItemButtons">
                                <button onClick={() => onAddOneMore(item.id)}>+1</button>
                                <button onClick={() => onDeleteItem(item.id)}>Удалить</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button onClick={onClearCart}>Очистить корзину</button>
        </div>
    );
};

export default ShoppingCart;
