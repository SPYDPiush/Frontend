import React, { useRef } from "react";
import img from "../assets/1234.jpg";

function Contents({ login, setLogin, setSignup, signup }) {
  const email = useRef();
  const password = useRef();
  const FullName = useRef();
  const username = useRef();

  const handleOnDeleteIcon = () => {
    document.querySelector(".modal").classList.toggle("is-active");
  };

  // const handleOnLogin = () => {
  //   setLogin((curr) => !curr);
  // };

  const handleOnSignup = () => {
    setSignup((curr) => !curr);
  };

  const handleOnCancel = () => {
    setSignup((curr) => !curr);
  };

  const handleOnSignIn = async (e) => {
    e.preventDefault();
    console.log("clicked on signinForm");

    const formdata = {
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
      FullName: FullName.current.value,
    };

    console.log(formdata);
    try {
      const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });

      if (response.ok) {
        const data = response.json();
        console.log("data send successfully");
        setSignup((curr) => !curr)
      } else {
        console.log("error occured while sending data");
      }
    } catch (error) {
      console.log("error while sending data to url", error);
    }
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data sent successfully");
      } else {
        console.log("error occured while send data to url");
      }
    } catch (error) {
      console.log("error while sending data to url", error);
    }
  };

  return (
    <>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">Bulma</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Components</a>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>

      <section className="section py-2 px-1">
        {/* section 2 post search    */}
        <div className="container block mt-5">
          <div className="columns pt-3 is-vcentered is-centered">
            <nav class="level ">
              {/* <!-- Left side --> */}
              <div class="level-left">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong>123</strong> posts
                  </p>
                </div>
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Find a post"
                      />
                    </p>
                    <p class="control">
                      <button class="button">Search</button>
                    </p>
                  </div>
                </div>
              </div>

              <div class="level-right">
                <p class="level-item">
                  <strong>All</strong>
                </p>
                <p class="level-item">
                  <a>Published</a>
                </p>
                <p class="level-item">
                  <a>Drafts</a>
                </p>
                <p class="level-item">
                  <a>Deleted</a>
                </p>
                <p class="level-item">
                  <a class="button is-success">New</a>
                </p>
              </div>
            </nav>
          </div>
        </div>

        <div className="container mt-6">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-4 vertical mr-6">
              <h1 className="title is-size-3-mobile is-size-1-desktop">
                Lorem
              </h1>
              <h2 className="subtitle is-size-4-mobile is-size-4-desktop">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                odit?
              </h2>
              <p className="is-size-desktop-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dicta necessitatibus at beatae minima, doloribus debitis ad
                mollitia, voluptatem consequuntur vero temporibus quisquam,
                sapiente reiciendis explicabo? Vel velit repellat ab.
              </p>
            </div>
            <div className="column  has-text-centered">
              <img src={img} alt="demo_image" />
            </div>
            <div className="column ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              corrupti, omnis, cupiditate dolores voluptates qui, perspiciatis
              amet quasi a non sequi sint dicta repellendus quae eius neque.
              Autem, blanditiis voluptatem.
            </div>
          </div>
        </div>

        {/* section 3  model test for login */}

        <div className={`modal ${login ? "is-active" : ""}`}>
          <div class="modal-background "></div>
          <div className="modal-card">
            <header className="modal-card-head is-background-white">
              <p className="modal-card-title has-text-primary">Login Form</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleOnDeleteIcon}
              ></button>
            </header>
            <section className="modal-card-body">
              <form onSubmit={handleOnLogin}>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input
                      class="input"
                      type="email"
                      placeholder="Email"
                      ref={email}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                      ref={password}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-success" type="submit">
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </section>
          </div>
        </div>

        {/* section 3 model for signup */}

        <div class={`modal ${signup ? "is-active" : ""}`}>
          {/* <div class="modal-background"></div> */}
          <div class="modal-card">
            <header class="modal-card-head is-background-white">
              <p class="modal-card-title has-text-primary">SignUp Form</p>
              <button
                class="delete"
                aria-label="close"
                onClick={handleOnCancel}
              ></button>
            </header>
            <section class="modal-card-body">
              <form onSubmit={handleOnSignIn}>
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Text input"
                      ref={FullName}
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-success"
                      type="text"
                      placeholder="Text input"
                      ref={username}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </div>
                  {/* <p class="help is-success">This username is available</p> */}
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-danger"
                      type="email"
                      placeholder="Email input"
                      ref={email}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  {/* <p class="help is-danger">This email is invalid</p> */}
                </div>

                <div class="field">
                  <p class="control has-icons-left">
                    <label className="label">Password</label>
                    <input
                      class="input"
                      type="password"
                      placeholder="Password"
                      ref={password}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox" />I agree to the{" "}
                      <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link" type="submit">
                      Submit
                    </button>
                  </div>
                  <div class="control">
                    <button
                      class="button is-link is-light"
                      onClick={handleOnCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>

        {/* pagination test */}

        <nav className="pagination" role="navigation" aria-label="pagination">
          <a
            class="pagination-previous is-disabled"
            title="This is the first page"
          >
            Previous
          </a>
          <a href="#" class="pagination-next">
            Next page
          </a>
          <ul class="pagination-list">
            <li>
              <a
                class="pagination-link is-current"
                aria-label="Page 1"
                aria-current="page"
              >
                1
              </a>
            </li>
            <li>
              <a href="#" class="pagination-link" aria-label="Goto page 2">
                2
              </a>
            </li>
            <li>
              <a href="#" class="pagination-link" aria-label="Goto page 3">
                3
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Contents;
