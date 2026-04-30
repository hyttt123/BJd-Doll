interface Props {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className = '' }: Props) {
  return (
    <div className={`bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30
      rounded-lg flex items-center justify-center ${className}`}>
      <div className="text-center p-4">
        <div className="text-3xl mb-2">📷</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</div>
        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">点击放入图片</div>
      </div>
    </div>
  );
}
