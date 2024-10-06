"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { pizzas } from '@/data/pizzas';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => {
            const pizzaDetails = pizzas.find(pizza => pizza.id === item.id);
            return (
              <Card key={item.id} className="mb-4">
                <CardHeader className="flex flex-row items-center">
                  {pizzaDetails && (
                    <Image src={pizzaDetails.image} alt={item.name} width={80} height={80} className="mr-4" />
                  )}
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <Button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                    <span className="mx-4">{item.quantity}</span>
                    <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </CardFooter>
              </Card>
            );
          })}
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-4 w-full" onClick={handleCheckout}>Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
}