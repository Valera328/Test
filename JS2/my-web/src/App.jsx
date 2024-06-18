import React from "react";
import Header from "./components/Header";
import ways from "./data";
import { useState } from "react";
import Champ from "./Champ";
import Button from "./components/Button/Button";

// function Champ({ title, description }) {
//   return (
//     <li>
//       <p>
//         <strong>{title}</strong> {description}
//       </p>
//     </li>
//   );
// }


// const stateArray = useState() - это будет ошибкой если он нигде не находится 

function App() {
  const [content, setContent] = useState('Нажми на кнопку')
  console.log('App Render')
   //это хук и его нужно использовать только внутри компонента  или другого хука 
  // также хуки надо держать на верхнем уровне и никаких функций и прочего не должно быть выше их и сами хуки внутри каких то подфункции и прочего
  function handleClick(type){
    console.log('button click', type)
    setContent (type)
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Список:</h3>
          <ul>
            {/* {ways.map((way, index) => (
              <Champ key={index} title={way.title} description={way.description} /> //выводит из массива список который там есть 
            ))} */}
            <Champ {...ways[0]}/>
            <Champ {...ways[1]}/>
            <Champ {...ways[2]}/>
            <li>
              <p>
                <strong>Люблю аниме</strong> Владыка
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Нажми на нее</h3>
          <Button onClick={() => handleClick  ('qwer')}>Кнопка 1</Button>
          <Button onClick={() => handleClick  ('asd')}>Кнопка 2</Button>
          <Button onClick={() => handleClick  ('zxc')}>Кнопка 3</Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
