import React from 'react';

const Ticker: React.FC = () => {
  const items = [
    "Node.js", "NestJS", "TypeScript", "React Native", "Flutter", "PostgreSQL",
    "REST APIs", "GraphQL", "Docker", "Redis", "OAuth 2.0", "AWS"
  ];
  return (
    <div className="ticker">
      <div className="ticker-t">
        {[...items, ...items].map((item, i) => (
          <div className="titem" key={i}>{item} <s>✦</s></div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
