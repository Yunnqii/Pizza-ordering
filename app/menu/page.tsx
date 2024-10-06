"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { pizzas } from '@/data/pizzas';

export default function Menu() {
  const { addToCart } = useCart();

  const handleAddToCart = (pizza) => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      quantity: 1
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} className="pizza-card">
            <div className="relative overflow-hidden">
              <Image src={pizza.image} alt={pizza.name} width={300} height={300} className="pizza-image" />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{pizza.name}</CardTitle>
              <CardDescription className="text-lg font-bold text-foreground/80">${pizza.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60">{pizza.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleAddToCart(pizza)} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}