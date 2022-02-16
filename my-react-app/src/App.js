import logo from './logo.svg';
// import { Link } from 'react-router-link'

import './App.scss';


function App() {
  return (
    <div className="App">
   <div class="hero-img"></div>
    <div class="wrapper">
      <header>
        <a href="#" class="logo">Sar<span>co</span></a>

        <nav>
          <svg
            class="close"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
              fill="black"
            />
          </svg>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Porducts</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact us </a></li>

          </ul>
        </nav>

        <svg
          class="menu"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5" width="16" height="2" rx="1" fill="white" />
          <rect y="10" width="9" height="2" rx="1" fill="white" />
          <rect x="8" width="8" height="2" rx="1" fill="white" />
        </svg>
      </header>

      <section class="hero">
        <h1>” It's not so much about the shoes, but the person wearing them ”</h1>

        <p class="subhead">
          Discover more
        </p>

        <svg class="down-arrow" viewBox="0 0 8 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 1C4.5 0.723858 4.27614 0.5 4 0.5C3.72386 0.5 3.5 0.723858 3.5 1L4.5 1ZM3.64645 53.3536C3.84171 53.5488 4.15829 53.5488 4.35356 53.3536L7.53554 50.1716C7.7308 49.9763 7.7308 49.6597 7.53554 49.4645C7.34027 49.2692 7.02369 49.2692 6.82843 49.4645L4 52.2929L1.17157 49.4645C0.976313 49.2692 0.65973 49.2692 0.464468 49.4645C0.269206 49.6597 0.269206 49.9763 0.464468 50.1716L3.64645 53.3536ZM3.5 1L3.5 53L4.5 53L4.5 1L3.5 1Z" fill="white"/>
            </svg>
            
      </section>

      <section class="more-info">
        <div class="feature">
          <div class="content">
            <p class="title">Lightweight</p>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a
              cum laborum sequi repudiandae, iusto officiis ut eos atque
              provident.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Another shoe" />
        </div>

        <div class="feature left">
          <div class="content">
            <p class="title">Lightweight</p>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a
              cum laborum sequi repudiandae, iusto officiis ut eos atque
              provident.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Another shoe" />
        </div>

        <div class="feature">
          <div class="content">
            <p class="title">Lightweight</p>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a
              cum laborum sequi repudiandae, iusto officiis ut eos atque
              provident.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Another shoe" />
        </div>
      </section>
    </div>




   
    </div>
  );
}

export default App;
