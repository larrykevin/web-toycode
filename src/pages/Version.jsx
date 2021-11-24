import React from 'react';
import '../styles/Version.scss';

const Version = () => {
  return (
    <main className='Version'>
      <section className='Version__languages'>
        <div>JS</div>
        <div>JSX</div>
        <div>CSS3</div>
      </section>
      <section className='Version__questions'>
        <article>
          <h3>¿Por qué Toy Code?</h3>
          <p>Todo nació desde que empecé a estudiar Javascript y quería un tema que me ayude en mi aprendizaje.</p>
          <p>Después de probar varios temas, no encontré uno que se acomode a lo que necesitaba. </p>
          <p>Entonces decidí crear uno desde cero. Empezando con Javascript, HTML y CSS.</p>
        </article>
        <article>
          <h3>¿Integrarás más lenguajes?</h3>
          <p>Sí, esto me ayudará entender más lenguajes y poder seguir contribuyendo.</p>
          <p>Si deseas dejarme un comentario puedes encontrarme en twitter a @larrykevin23.</p>
        </article>
      </section>
    </main>
  );
}

export default Version;