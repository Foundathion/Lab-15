import { Routes, Route } from 'react-router-dom';
import './style.css';
function News(){
    return (
        <p><h1>News</h1></p>
    )
}
function About(){
    return(
        <h1>"Южный Федеральный Университет";</h1>
    )
}
function Contacts(){
    return(
        <h2>8 (919) 323-26-34</h2>
    )
}
export function Main(){
    return (
    <div class="main">
<div class="main_container"> 
    <section class="flex-center"></section>
    <article class="flex-center">
        <Routes>
            <Route path='/news' element={<News />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contacts' element={<Contacts />}/>
             <Route path='*' element={<h3>Некорректная ссылка</h3>}/>
        </Routes>
    </article>
    <aside class="flex-center">Akhtulov Maxim Pavlovich</aside>

</div>
    </div>
    )
}

export default Main;