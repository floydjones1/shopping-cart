import React, { useEffect } from "react";
import { Picsum, Size } from "../types/Picsum";

export interface Item extends Picsum {
  size: Size;
  quantity: number;
}

interface CartContext {
  items: Array<Item>;
  numOfItems: number;
  addToCart: (item: Item) => void;
  removeItem: (id: number, size: Size) => void;
  incrementItem: (id: number, size: Size) => void;
  decrementItem: (id: number, size: Size) => void;
}

export const CartContext = React.createContext<CartContext | undefined>(
  undefined
);

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw Error("useCart can only be called inside CartProvider");
  }

  return context;
}

const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = React.useState<Item[]>([]);

  useEffect(() => {
    const itemString = localStorage.getItem("FLOYD__Items");
    if (itemString) {
      const localItemData = JSON.parse(itemString) as Item[];
      setItems(localItemData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("FLOYD__Items", JSON.stringify(items));
  }, [items]);

  const addToCart = (insertItem: Item) => {
    setItems((items) => {
      const index = items.findIndex(
        (item) => item.id === insertItem.id && item.size === insertItem.size
      );
      if (index !== -1) {
        items[index].quantity++;
        return [...items];
      }
      return [...items, insertItem];
    });
  };

  const removeItem = (id: number, size: Size) => {
    setItems((items) => {
      const index = items.findIndex(
        (item) => item.id === id && item.size === size
      );
      items.splice(index, 1);
      return [...items];
    });
  };

  const decrementItem = (id: number, size: Size) => {
    setItems((items) => {
      const index = items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index === -1)
        throw Error("Cannot decrement items that does not exist");

      if (items[index].quantity === 1) {
        removeItem(id, size);
        return items;
      }
      items[index].quantity--;
      return [...items];
    });
  };

  const incrementItem = (id: number, size: Size) => {
    setItems((items) => {
      const index = items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (index === -1)
        throw Error("Cannot increment items that does not exist");
      items[index].quantity++;
      return [...items];
    });
  };

  const productCount = (items: Item[]) => {
    let count = 0;
    for (let index = 0; index < items.length; index++) {
      count = items[index].quantity + count;
    }
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        numOfItems: productCount(items),
        addToCart,
        incrementItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
