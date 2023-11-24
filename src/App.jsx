import './App.scss';

const rootDiv = document.getElementById('root');
const screenHeight = window.innerHeight;
rootDiv.style.height = screenHeight + 'px';

function App() {

  return (
    <>
      <div id='header'>
        <div id='logo'>

        </div>

        <h1>Pre-fight checklist</h1>
      </div>

      <div id='content'>
        <section id='left'>
          <article id='navHeader'>
            <h2>My lists :</h2>
          </article>
        </section>

        <section id='right'>
          
        </section>
      </div>
    </>
  )
}

export default App
