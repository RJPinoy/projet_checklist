import './App.scss';
import LeftChecklist from './dashboard/LeftChecklist';
import RightChecklist from './dashboard/RightChecklist';

window.onload = function() {
  const rootDiv = document.getElementById('root');
  const screenHeight = window.innerHeight;
  rootDiv.style.height = screenHeight + 'px';
};

function App() {

  return (
    <>
      <div id='header'>
        <div id='logo'></div>

        <h1>Pre-fight checklist</h1>
      </div>

      <div id='content'>
        <section id='left'>
          <article id='navHeader'>
            <h2>My lists :</h2>
          </article>

          <nav id='nav'>
            <ul>
              <LeftChecklist />
            </ul>
          </nav>
        </section>

        <section id='right'>
          <article className='noList'>
            <p>Oh no! Start now to create a new list.</p>
          </article>

          <article>
            <RightChecklist />
            <RightChecklist />
          </article>
        </section>
      </div>
    </>
  )
}

export default App
