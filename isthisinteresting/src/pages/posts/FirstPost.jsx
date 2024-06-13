import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HorizontalRule from "../../components/HorizontalRule/HorizontalRule";
import { Link } from "react-router-dom";
import homolosine from "../../../graphics/homolosine-filled-width-height-100.svg";
import Triangles from "../../components/Triangles/Triangles";
import spmFig08 from "../../../graphics/FigSPM-08.jpg";

function FirstPost() {
  return (
    <>
      <section className="body-div">
        <Header />
        <section className="main-div">
          <article>
            <div className="article-heading-div">
              <div classame="h1-post-div">
                <h1 className="h1-post">Baby's first post </h1>
              </div>

              <div className="h2-post-div">
                <h2 className="h2-post">
                  I've put off teaching myself web development and getting
                  smarter about data visualization for years, and for no good
                  reason. I'm trying to change that now.
                </h2>
              </div>

              <div className="date-author-div">
                <div className="date">June 12, 2024</div>
                <div className="author">by Baird Langenbrunner</div>
              </div>
            </div>

            <div className="article-text-div">
              <p>
                I often wonder if I went into climate science for the graphics.
              </p>
              <p>
                Satellite imagery and weather/climate information can all be
                very beautiful to visualize, and a good graphic or map is one
                that conveys a lot of information quickly and simply, but can be
                studied for much longer. It's the stuff of dreams.
              </p>

              <p>
                Take something as "simple" as a map projection. It doesn't show
                data per se, but there's a lot of information about area and
                continents and oceans in there.
              </p>

              <p>
                One of my favorites is the{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Goode_homolosine_projection"
                  target="_blank"
                >
                  Goode homolosine
                </Link>
                , created in the 1960s by a geographer who wanted an alternative
                to the Mercator projection. And for good(e?) reason: the
                homolosine shows the continents near the polls with a lot less
                distortion than{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Mercator_projection"
                  target="_blank"
                >
                  Mercator
                </Link>{" "}
                does.
              </p>

              <img src={homolosine} alt="homolosine" />

              <p>
                Maybe my favorite part of this projection, though, is how it
                looks like what you'd get if you peeled Earth like an orange.
                And while the homolosine would be a terrible way to show a lot
                of things, I love thinking about it and bending the flaps around
                in my mind to make the globe whole again.
              </p>

              <p className="text-center">△△△</p>

              <p>
                As a grad student and postdoc, and even today when I write about
                oil and gas for my job, I've always spent what feels like a LOT
                more time fine-tuning the maps and graphics of a paper or
                project than I would spend on the data analysis and research
                itself.
              </p>

              <p>
                What color scheme should I use? How thick should the continental
                outlines be? What projection works best? These questions can
                haunt me; I've lost hours to researching little-known matplotlib
                parameters and deciding on minutiae like the z-order of points
                in a scatter plot.{" "}
              </p>
              <p>
                {" "}
                But let's set the record straight. Making graphics to visualize
                your data <em>is</em> a crucial part of the research process,
                and it takes a lot of data wrangling to get to that stage in the
                first place. You <strong>should</strong> spend a lot of time
                making graphics. Still, I've questioned whether my PhD was a
                degree in how matplotlib works, rather than one in climate
                science. At best, it was both. At worst, well!
              </p>

              <h3 className="h3-post">
                Scientists aren't always data viz people
              </h3>

              <p>
                It's safe to say that scientists don't always have the best eye
                for graphic design or science communication, and the more
                self-serious ones out there even seem to take pride in their
                inability to make an accessible graphic. There are classic books
                on how to design scientific figures, but they're old and
                outdated for the mobile device age. Unless you're already very
                design-minded, or you're going to school for it, there's really
                was no way to learn these things beyond teaching them to
                yourself.
              </p>

              <p>
                I remember as students, we were left to make graphics, and
                develop the codebase necessary for them, on our own. We would
                mostly learn from what was already out there in papers and
                books, and at the time (late 2000s, early 2010s), the fraction
                of scientists using GitHub to make reproducible code and figures
                was pretty small.
              </p>
              <p>
                For me, it felt as if some of the things that brought me to
                climate science in the first place — communicating climate
                change; making accessible and narrative-driven visuals — were
                rarely the things that got grants funded or were received well
                by reviewers.
              </p>

              <Triangles />

              <p>
                The thinking has evolved in the past decade, of course, and
                thoughtful graphic design is way further along in some
                disciplines, like geography and urban planning. Those folks
                really know the value of a map. But atmospheric scientists and
                oceanographers, not so much.
              </p>

              <p>
                But this all started to change a bit, in my opinion, as the IPCC
                reports got prettier.{" "}
                <Link
                  to="https://www.ipcc.ch/assessment-report/ar5/"
                  target="_blank"
                >
                  AR5
                </Link>
                , for example, was a pretty monumental shift in how climate
                change predictions had been presented and they even produced a{" "}
                <Link
                  to="https://www.ipcc.ch/site/assets/uploads/2019/04/IPCC-visual-style-guide.pdf"
                  target="_blank"
                >
                  style guide
                </Link>
                , a first of its kind.
              </p>
              
              <figure className="sm:w-[450px] mx-auto">
                <img
                  src={spmFig08}
                  alt="IPCC AR5 SPM Figure 8"
                />
                <figcaption>
                  Figure 8 from the <Link to="https://www.ipcc.ch/report/ar5/wg1/summary-for-policymakers/">IPCC AR5 Summary for Policymakers</Link>, showing low- and high-emissions climate trajectories for temperature, precipitation, sea ice extent, and ocean surface pH. This was one of the first times the Robinson projection was used in a report like this.
                </figcaption>
              </figure>

              <p>
                Even the{" "}
                <Link
                  to="https://en.wikipedia.org/wiki/Robinson_projection"
                  target="_blank"
                >
                  Robinson
                </Link>{" "}
                projection was pivotal. That was probably the first time in my
                scientific career that the question of which projection to use
                when looking at global climate change maps came up. It was a
                paradigm shift compared to the{" "}
                <Link
                  to="https://www.ipcc.ch/site/assets/uploads/2018/08/TAR_syrfull_en.pdf"
                  target="_blank"
                >
                  report
                </Link>{" "}
                before it.
              </p>
              <p>
                Those graphics still have a long way to go to be accessible to
                the general public, I think, and to be readable on cell
                phones... but that's not ultimately why they're being created.
              </p>

              <h3 className="h3-post">But I'd like to be</h3>

              <p>
                Anyway, I've been bouncing among climate research, academic
                editing, and energy nonprofit work for the past 15 years, and my
                more recent work has taken me away from weather and climate
                research. I've realized I really miss it, and I'm starting up
                this blog so I can hold myself more accountable and get back in
                the game.
              </p>
              <p>
                In particular, I'd like to start trying my hand at more data
                journalism and environmental change analysis with the growing
                number of tools out there, and I've realized my lack of front-
                and backend skills have been holding me back from my goals.
              </p>
              <p>
                I've also felt some impostor syndrome about all of this; careers
                for PhD scientists in the journalism and data viz space seem
                pretty rare. When I finished school back in 2015, I didn't know
                this kind of paid work existed, and I still think it only lives
                at the sidelines of newsrooms and tech companies.
              </p>
              <p>
                Also, the work that people do out there is already so
                impressive. It's hard to know where to start or how to
                contribute, and not to feel frustrated with my lack of skills in
                the process.
              </p>
              <p>
                But I'm trying to change my comfort level with it all. I'll be
                building out this website with posts and potentially projects as
                I move through them, and I'm hoping to keep things ambitious..
              </p>
              <p>
                If you've stumbled across this — and I sure as hell wouldn't
                tell anyone to come here — I hope that you get some enjoyment
                out of it. And if not, well then, my bad.
              </p>
              <Triangles />

              {/* <p>
                Here are some of my{" "}
                <Link to="/favorites">favorite resources</Link> in climate and
                data journalism.
              </p> */}
              {/* <HorizontalRule />
              <h1>Site design</h1>
              <p>
                I've built this site using React and Tailwind CSS. I find them
                suprisingly fun to use, and with some HTML, CSS, and JavaScript
                under my belt, I was able to learn them in a couple days. I'm
                pretty picky about how a site looks, and I think Tailwind CSS is
                a really great tool if you want a ton of control but still need
                some order in your CSS. If you like this and feel like borrowing
                from it, you can access the GitHub repo for the site in the
                footer below. All the fonts are Google Fonts:
              </p>
              <p>
                <ul>
                  <li>
                    The serif font I use in text like this is{" "}
                    <a href="https://fonts.google.com/specimen/Domine">
                      Domine
                    </a>
                  </li>
                  <li>
                    The sans serif font is{" "}
                    <a
                      href="https://fonts.google.com/specimen/Roboto"
                      className="font-sans"
                    >
                      Roboto
                    </a>
                  </li>
                  <li>
                    The monospace font (where <code>code is written</code>) is{" "}
                    <a
                      href="https://fonts.google.com/specimen/Roboto+Mono"
                      className="font-monospace"
                    >
                      Roboto Mono
                    </a>
                  </li>
                </ul>
              </p>
              <p>Thanks for reading this! More soon.</p> */}
            </div>
          </article>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default FirstPost;
