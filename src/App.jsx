import { useState } from "react";

const allArticles = [];

function App() {

  const [articles, setArticles] = useState(allArticles);
  const [newArticle, setNewArticle] = useState("");

  // al click su Submit, aggiornare array creando copia e aggiungendo nuovo articolo
  const handleSubmit = (event) => {
    event.preventDefault();
    const newArray = [...articles, newArticle];
    setArticles(newArray);
  };

  // al click su Elimina, cancellare articolo stampato
  

  return (
    <>
      <section>
        <div className="container">
          <h2>Lista degli articoli</h2>
          <div>

            {/* riportare sul form la funzione per l'evento Submit */}
            <form action="" className="row" onSubmit={handleSubmit}>
              <label htmlFor="">Aggiungi il titolo di un articolo</label>
              <div>

                {/* input per aggiungere nuovo articolo con onChange */}
                <input 
                  type="text" 
                  placeholder="Scrivi il titolo dell'articolo" 
                  className=""
                  value={newArticle}                  
                  onChange={(event) => setNewArticle(event.target.value)}
                />
                <button type="submit" className="btn-submit">Aggiungi</button>
              </div>              
            </form>
          </div>
      
          <div className="added-articles">
            <h3>Articoli aggiunti</h3>
            <ul className="list-articles">

              {/* stampare articoli */}
              {
                articles.map((curArticle, index) => (
                  <li key={index} className="article">
                    <p>{curArticle}</p>
                    <button onClick={}>Elimina</button>
                  
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
