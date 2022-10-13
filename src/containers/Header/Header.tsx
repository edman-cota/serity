import React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="parent-main">
      <main className="main">
        <div className="main-inside">
          <div className="main-inside-inside">
            <section className="section-main">
              <section className="section-one">
                <div className="section-one-div-one">
                  <div className="section-one-tite">
                    <h1>Simple.Fast.Delightful to-do list</h1>
                    <h2>
                      <span>
                        Complete blogging platform with Notion as your CMS.
                      </span>
                      <span>
                        Write your articles on Notion and publish them with a
                        single click.
                      </span>
                      <span>No coding or design skills required.</span>
                    </h2>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
