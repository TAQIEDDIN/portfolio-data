// lib/markdownComponents.tsx
import React from 'react';

type CustomComponentProps = {
  type?: string;
  lang?: string;
  children: React.ReactNode;
  [key: string]: any;
};

export const Callout = ({ type = 'info', children }: CustomComponentProps) => {
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    danger: '❗',
    tip: '💡',
    success: '✅'
  };

  return (
    <div className={`my-4 p-4 rounded-lg border-l-4 ${
      type === 'info' ? 'bg-blue-50 border-l-blue-500' :
      type === 'warning' ? 'bg-yellow-50 border-l-yellow-500' :
      type === 'danger' ? 'bg-red-50 border-l-red-500' :
      type === 'tip' ? 'bg-purple-50 border-l-purple-500' :
      'bg-green-50 border-l-green-500'
    }`}>
      <div className="flex items-start">
        <span className="mr-2 text-lg">{icons[type as keyof typeof icons] || icons.info}</span>
        <div className="prose-sm prose">{children}</div>
      </div>
    </div>
  );
};

export const Alert = ({ type = 'warning', children }: CustomComponentProps) => {
  return (
    <div className={`my-4 p-4 rounded-md ${
      type === 'warning' ? 'bg-amber-100 text-amber-900' :
      type === 'error' ? 'bg-red-100 text-red-900' :
      'bg-blue-100 text-blue-900'
    }`}>
      <div className="font-medium">{children}</div>
    </div>
  );
};

export const FeatureHighlight = ({ children }: CustomComponentProps) => {
  return (
    <div className="my-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
      <div className="flex items-center">
        <span className="mr-2 text-purple-600">✨</span>
        <div className="prose-sm prose">{children}</div>
      </div>
    </div>
  );
};

export const CodePlayground = ({ lang = 'javascript', children }: CustomComponentProps) => {
  return (
    <div className="my-6 group">
      <pre className="relative">
        <code className={`language-${lang}`}>{children}</code>
        <button 
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity
                    bg-primary text-white px-2 py-1 rounded text-xs"
          onClick={() => navigator.clipboard.writeText(children as string)}
        >
          Copy
        </button>
      </pre>
      <div className="text-xs text-gray-500 mt-1">
        Interactive {lang} playground (coming soon)
      </div>
    </div>
  );
};
export const Title = ({ level = '1', children }: CustomComponentProps) => {
  // Convert level to number and clamp between 1-6
  const levelNum = Math.min(Math.max(parseInt(level.toString()), 1), 6);
  
  const styles = [
    'text-4xl font-extrabold my-6',           // h1
    'text-3xl font-bold my-5',                // h2
    'text-2xl font-semibold my-4',            // h3
    'text-xl font-medium my-3',               // h4
    'text-lg font-medium my-2',               // h5
    'text-base font-medium my-1'              // h6
  ];

  const Tag = `h${levelNum}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${styles[levelNum - 1]} text-gray-900 dark:text-white`}>
      {children}
    </Tag>
  );
};

export const CustomComponents = {
  callout: Callout,
  alert: Alert,
  feature: FeatureHighlight,
  codeplayground: CodePlayground,
  title: Title,
};


