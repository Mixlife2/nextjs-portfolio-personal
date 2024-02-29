'use client';

import { useEffect, useState } from 'react';

const CourseDetailPage = () => {
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split('/');
    const courseId = parts[parts.length - 1];
    setId(courseId);
  }, []);

  // Utiliza 'id' para cargar los detalles del curso desde tu fuente de datos

  return (
    <div>
      <h1>Detalles del Curso {id}</h1>
      {/* Renderizar los detalles del curso aquí */}
    </div>
  );
};

export default CourseDetailPage;
