import React, { useState, useEffect } from 'react';

const ResponsiveStudentInfo = ({ student }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    // Mobile layout
    return (
      <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '320px', margin: 'auto' }}>
        <img
          src={student.photo}
          alt={student.name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h3>{student.name}</h3>
        <p>Age: {student.age}</p>
        <p>Class: {student.class}</p>
      </div>
    );
  }

  // Desktop layout
  return (
    <div style={{ display: 'flex', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <img
        src={student.photo}
        alt={student.name}
        style={{ width: '200px', height: 'auto', borderRadius: '8px', marginRight: '20px' }}
      />
      <div>
        <h2>{student.name}</h2>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Class:</strong> {student.class}</p>
        <p><strong>Bio:</strong> {student.bio}</p>
      </div>
    </div>
  );
};

export default ResponsiveStudentInfo;
