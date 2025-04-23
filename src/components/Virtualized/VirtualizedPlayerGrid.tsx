'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FixedSizeGrid } from 'react-window';
import PlayerzCards from '@/components/Playerz/PlayerzCards';
import { Player } from '@/app/(default)/playerz/page';

interface VirtualizedPlayerListProps {
  players: Player[];
}

const VirtualizedPlayerList: React.FC<VirtualizedPlayerListProps> = ({
  players,
}) => {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to determine column count based on width
  const getColumnCount = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    setMounted(true);

    // Initialize dimensions
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDimensions({
          width,
          height: Math.min(
            window.innerHeight * 0.8,
            (players.length * 380) / getColumnCount(width)
          ),
        });
      }
    };

    updateDimensions();

    // Set up resize listener
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [players.length]);

  // If not mounted yet (during SSR), render a placeholder with the same layout
  if (!mounted) {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {players.slice(0, 6).map((player) => (
          <PlayerzCards key={player._id} item={player} />
        ))}
      </div>
    );
  }

  const columnCount = getColumnCount(dimensions.width);
  const rowCount = Math.ceil(players.length / columnCount);
  const rowHeight = 350; // Adjust based on your card's height

  // Grid cell renderer
  const Cell: React.FC<{
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }> = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= players.length) return null;

    const player = players[index];
    const cellStyle = {
      ...style,
      padding: '10px',
    };

    return (
      <div style={cellStyle}>
        <PlayerzCards item={player} />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full mt-10"
      style={{ height: dimensions.height || 800 }}
    >
      {dimensions.width > 0 && (
        <FixedSizeGrid
          columnCount={columnCount}
          columnWidth={dimensions.width / columnCount}
          height={dimensions.height}
          rowCount={rowCount}
          rowHeight={rowHeight}
          width={dimensions.width}
        >
          {Cell}
        </FixedSizeGrid>
      )}
    </div>
  );
};

export default VirtualizedPlayerList;
