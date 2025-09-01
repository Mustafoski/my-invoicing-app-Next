import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen text-center px-4'>
      <h1 className='text-5xl font-bold mb-6'>Welcome to My Invoicing App</h1>
      <p>
        <Button asChild>
          <Link href='/dashboard'>Sign in</Link>
        </Button>
      </p>
    </main>
  );
};

export default Home;
