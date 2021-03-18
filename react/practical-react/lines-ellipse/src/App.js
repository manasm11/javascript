import './App.css';
import LinesEllipsis from 'react-lines-ellipsis'

function App() {
  const text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eum beatae non illum, vero dolorem similique incidunt veritatis odio repudiandae aliquid molestias laudantium cumque, explicabo, voluptates veniam magni impedit voluptas officiis aspernatur tempora in modi. Earum saepe dolorum voluptates quis necessitatibus sit quae laudantium beatae cupiditate, ratione reiciendis cumque hic dolore amet, fugit vitae ipsum! Cupiditate aliquam distinctio numquam rem magni doloremque dignissimos, magnam alias tempore quibusdam quia repellendus ratione, quod labore placeat laborum ipsum consequatur. Minima ad porro autem quo totam, est nihil illo repudiandae assumenda, suscipit laudantium quae, nulla sequi dolor laborum. Fuga vero soluta unde dicta officia?'
  return (
    <div className="App">
      <LinesEllipsis
        text={text}
        maxLine='3'
        ellipsis='  ...continued'
        trimRight
        basedOn='letters'
    />
    </div>
  );
}

export default App;
