import { Navbar } from '@/components/layouts/navbar';
import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

export default function Guide() {
  return (
    <main>
      <Navbar />
    </main>
  );
}

export const metadata: Metadata = {
  openGraph: {
    title: 'this is open graph title for testing',
    description: 'Some description',
  },
};
