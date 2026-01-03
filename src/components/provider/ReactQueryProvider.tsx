'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextTopLoader from 'nextjs-toploader';
import { Fragment, useState } from 'react';
import { Toaster } from 'sonner';

export default function ReactQueryProvider({ children }: ChildrenLayoutProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <Fragment>
      <NextTopLoader
        color='#5C0793'
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing='ease'
        speed={200}
        zIndex={1600}
        showAtBottom={false}
      />
      <Toaster position='top-right' expand={false} richColors />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Fragment>
  );
}
