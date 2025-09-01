import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <main className='flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Invoices</h1>
        <Button variant='ghost' className='inline-flex gap-2' asChild>
          <Link href='/invoices/new'>
            <CirclePlus className='h-4 w-4' />
            Create Invoice
          </Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] p-4'>Date</TableHead>
            <TableHead className='p-4'>Customer</TableHead>
            <TableHead className='p-4'>Email</TableHead>
            <TableHead className='text-center p-4'>Status</TableHead>
            <TableHead className='text-right p-4'>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium text-left'>
              <span>01.09.2025</span>
            </TableCell>
            <TableCell className='text-left'>
              <span>Emir Mustafoski</span>
            </TableCell>
            <TableCell className='text-left p-4'>
              <span>emirmustafoski92@gmail.com</span>
            </TableCell>
            <TableCell className='text-center p-4'>
              <Badge className='rounded-full'>Open</Badge>
            </TableCell>
            <TableCell className='text-right p-4'>
              <span>$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default DashboardPage;
