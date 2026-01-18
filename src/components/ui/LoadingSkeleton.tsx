'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function LoadingSkeleton({
  className,
  width = 'w-full',
  height = 'h-4',
}: LoadingSkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 rounded',
        width,
        height,
        className
      )}
    />
  );
}

export function ResultsLoadingSkeleton() {
  return (
    <div className="mt-8 space-y-6">
      {/* Results Hero Skeleton */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="text-center mb-6">
          <LoadingSkeleton className="h-6 w-48 mx-auto mb-2" />
          <LoadingSkeleton className="h-16 w-80 mx-auto mb-2" />
          <LoadingSkeleton className="h-4 w-32 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <LoadingSkeleton className="h-12 w-full" />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <LoadingSkeleton className="h-12 w-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <LoadingSkeleton className="h-4 w-16 mx-auto mb-1" />
              <LoadingSkeleton className="h-6 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Timeline Skeleton */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <LoadingSkeleton className="h-6 w-64 mb-6" />
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <LoadingSkeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1">
                <LoadingSkeleton className="h-4 w-32 mb-1" />
                <LoadingSkeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
            <LoadingSkeleton className="h-6 w-48 mb-4" />
            <LoadingSkeleton className="h-64 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}