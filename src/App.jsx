import { useState } from "react";

const allArticles = [];

// stampare articoli
// input per aggiungere nuovo articolo

function App() {

  const [article, setArticles] = useState(allArticles);
  const [newArticle, setNewArticle] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <>
      <section>
        <div className="container">
          <h2>Lista degli articoli</h2>
          <div>
            <form action="" className="row" onSubmit={handleSubmit}>
              <label htmlFor="">Titolo articolo</label>
              <div>
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
            <div>Prova: {newArticle}</div>
          </div>
      
          <div>
            <ul className="list-articles">
              {
                article.map((curArticle, index) => (
                  <li key={index} className="article">{curArticle}</li>
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
