import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface LimitOverlayProps {
  isVisible: boolean;
  message: string;
  className?: string;
}

export const LimitOverlay: React.FC<LimitOverlayProps> = ({
  isVisible,
  message,
  className,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'absolute inset-0 z-50 flex items-center justify-center',
        'bg-background/80 backdrop-blur-md',
        'border border-destructive/20 rounded-lg',
        className
      )}
      style={{ pointerEvents: 'all' }} // Prevent any interaction
    >
      <div className="text-center p-6 max-w-md">
        <div className="flex justify-center mb-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-destructive">
          Limit Tercapai
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};
