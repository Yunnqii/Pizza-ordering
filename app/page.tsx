import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-b from-background-start-rgb to-background-end-rgb">
      <h1 className="text-6xl font-bold text-primary mb-8 text-center">THE BEST PIZZA IN TOWN</h1>
      <p className="text-2xl text-foreground/80 mb-12 text-center max-w-2xl">
        Indulge in our artisanal pizzas, crafted with passion and the finest ingredients. 
        Experience a slice of heaven with every bite.
      </p>
      <Link href="/menu" passHref>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Order Now
        </Button>
      </Link>
    </div>
  );
}