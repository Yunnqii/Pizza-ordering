"use client"

import Link from 'next/link';
import { ShoppingCart, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const pathname = usePathname();
  const { cart } = useCart();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm text-foreground p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Phone size={24} className="mr-2 text-primary" />
          <span className="font-bold text-primary">ORDER NOW!</span>
          <span className="ml-2">012 345 678</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className={`${pathname === '/' ? 'text-primary font-bold' : 'text-foreground/80'} hover:text-primary transition-colors`}>Homepage</Link></li>
            <li><Link href="/menu" className={`${pathname === '/menu' ? 'text-primary font-bold' : 'text-foreground/80'} hover:text-primary transition-colors`}>Menu</Link></li>
            <li><Link href="/cart" className="relative">
              <ShoppingCart size={24} className="text-primary" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;