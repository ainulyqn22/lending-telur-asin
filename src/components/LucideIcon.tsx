import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size = 24 }: LucideIconProps) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    // Fallback if icon is missing
    const FallbackIcon = Icons.HelpCircle;
    return <FallbackIcon className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
