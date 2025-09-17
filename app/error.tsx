'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: registrar el error en un servicio de monitoreo
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      <h2 className="text-3xl font-semibold mb-4">¡Algo salió mal!</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Lo sentimos, ha ocurrido un error inesperado.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>
          Intentar de nuevo
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
