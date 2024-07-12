import "../components/ui/styles/styles.css";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      {/* MAIN PAGE */}
      <section id="home">
        <div className="container mx-auto px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
            <div className="flex flex-col justify-center">
              <div className="flex p-4 bg-transparent">
                <h1 className="text-4xl md:text-left text-center font-black">
                  WELCOME TO <br />
                  <span className="md:text-8xl text-4xl text-center my-3">
                    SIP&PLAY
                  </span>
                </h1>
              </div>
              <div className="flex p-4 bg-transparent">
                <h2 className="text-2xl mb-20 font-normal">
                  Classic eats, bubble tea & beer served in an old-school,
                  brick-lined cafe boasting 300+ board games
                </h2>
              </div>
              <div className="pl-4">
                <a href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?usp=sharing">
                  <Button
                    className="homeButton text-md p-3 text-black"
                    variant="outline"
                  >
                    Check our games out!
                  </Button>
                </a>
              </div>
            </div>

            {/* 3D MODELS */}
            <div className="flex items-center justify-center my-auto p-4 bg-transparent">
              <img
                alt="boba turtle chess dice"
                className="max-w-full h-auto heroImage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section id="about">
        <div className="md:container md:mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              <div className="flex p-4 bg-transparent">
                <h2 className="text-6xl p-6 mt-5">OUR STORY</h2>
              </div>
              <div className="flex p-4 bg-transparent">
                <p className="text-2xl p-6">
                  Founder, Jonathan Li, shares a passion for board games, boba,
                  and delicious food, so he combined them all to become Sip &
                  Play, Park Slope’s first board game cafe. It is a
                  straightforward concept, come in with your friends and family
                  to play any board game from our library of 300+ games! We hope
                  when you visit, you also enjoy our coffee, espresso, boba,
                  sandwiches, and snacks!
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex items-center justify-center p-4 bg-transparent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.265051111246!2d-73.98952032415947!3d40.66812857140023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b963c296a77%3A0x33cab105836ef465!2sSip%20%26%20Play!5e0!3m2!1sen!2suk!4v1720793271952!5m2!1sen!2suk"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="bg-blue-50 dark:bg-slate-800" id="contact">
        <div className="md:container md:mx-auto p-10 mt-10">
          <form className="container">
            <h2 className="text-5xl p-6 mt-3 text-center">CONTACT US</h2>
            <div className="email block">
              <label htmlFor="frm-email">Email</label>
              <input
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="block phone">
              <label htmlFor="frm-phone">Phone</label>
              <input
                id="frm-phone"
                type="text"
                name="phone"
                autoComplete="tel"
                required
              />
            </div>
            <div className="name block">
              <div>
                <label htmlFor="frm-first">First Name</label>
                <input
                  id="frm-first"
                  type="text"
                  name="first"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div>
                <label htmlFor="frm-last">Last Name</label>
                <input
                  id="frm-last"
                  type="text"
                  name="last"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>
            <div className="message block">
              <label htmlFor="frm-message">Message</label>
              <textarea id="frm-message" name="message"></textarea>
            </div>
            <div className="button block">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
