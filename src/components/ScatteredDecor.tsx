export function ScatteredDecor() {
  const decorItems = [
    { type: 'yarn', top: '10%', left: '5%', color: '#FFE5E5', rotate: '15deg' },
    { type: 'yarn', top: '25%', right: '8%', color: '#E5E5FF', rotate: '-20deg' },
    { type: 'yarn', bottom: '15%', left: '10%', color: '#E5FFF0', rotate: '25deg' },
    { type: 'needle', top: '60%', right: '5%', rotate: '45deg' },
    { type: 'needle', top: '40%', left: '3%', rotate: '-30deg' },
    { type: 'yarn', top: '80%', right: '12%', color: '#FFE5D9', rotate: '10deg' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {decorItems.map((item, index) => (
        <div
          key={index}
          className="absolute opacity-30"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            transform: `rotate(${item.rotate})`,
          }}
        >
          {item.type === 'yarn' ? (
            <div
              className="w-16 h-16 rounded-full"
              style={{ backgroundColor: item.color }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/50" />
              </div>
            </div>
          ) : (
            <div className="w-1 h-32 bg-[var(--color-soft-gray)] rounded-full relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[var(--color-soft-gray)] rounded-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
