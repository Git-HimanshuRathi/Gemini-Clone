import React, { Suspense, Lazy } from 'react';

// TODO: Lazy import image components here
// Example: const LazyImage1 = lazy(() => import('./components/LazyImage1'));

const img1 = Lazy(() => import('./components/LazyImage1'));


export default function Gallery() {
  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <div className="gallery">
        <img1 />
      </div>
    </Suspense>
  );
}