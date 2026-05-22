'use client';

import { useEffect, useRef } from 'react';
import { trackVisit, incrementProductView } from '@/app/actions';

export default function PageTracker({ path, productId }: { path?: string, productId?: string }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    
    if (path) {
      trackVisit(path);
    }
    if (productId) {
      incrementProductView(productId);
    }
  }, [path, productId]);

  return null;
}
