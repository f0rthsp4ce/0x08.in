import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>F0RTHSP4CE – Hackspace in Tbilisi</title>
        <meta name="description" content="A community of enthusiasts, focused on technology and art. We are trying to wrap our
          heads about things that are not easy to understand and to create events.
          But first and foremost we are having a good time." />
        <meta name="keywords" content="f0rthsp4ce, forthspace, hackspace, hackerspace, hackerspace tbilisi" />
      </Head>

      <h1>F0RTHSP4CE</h1>
      <article>
        <p>
          F0RTHSP4CE — is a  <a href="https://en.wikipedia.org/wiki/Hackerspace">hackspace</a>.
          A community of enthusiasts, focused on technology and art. We are trying to wrap our
          heads about things that are not easy to understand and to create events.
          But first and foremost we are having a good time.
        </p>
        <p>
          Our mission is to develop the community for everybody.
          We break the walls and build the bridges, and help each other.
        </p>
      </article>

      <article>
        <header>
          <h2>How to approach us</h2>
        </header>
        <p>
          Come and visit - to talk, to see the space for yourself or maybe even to ask for help.
          Different people find different modes of communication preferrable, so you may also just visit
          and work on your project uninterrupted or even just sit and read a book.
        </p>
        <p>
          Residents are managing space in a free time on pure enthusiasm, we have flat hierarchy
          and no administrators or managers. We like guests, but we are ready to meet you
          only when we are ready. If you want to plan a visit, please ping us:&nbsp;
          <a href="https://t.me/+w-yypPCNwH1kYTYy">chat</a>.
        </p>
        <p>
          F0RTHSP4CE – is not a secret club. If you share our principles and want to do something - do it, become a resident.
        </p>
      </article>

      <article>
        <header>
          <h2>Principles</h2>
        </header>
        <p>Basic principles of our community are:</p>
        <ol>
          <li>
            <b>Be brilliant to each other</b>
            <p>Listen to each other&apos;s needs and opinions.</p>
          </li>
          <li>
            <b>Do not oppress and do not bother</b>
            <p>Be wary of personal boundaries, be ready to make compromises.</p>
          </li>
          <li>
            <b>Give more than you take</b>
            <p>
              F0RTHSP4CE can grow only if the community makes it better.
              We are not a co-working per se, so we are all the ones who make the workspaces for each other.
            </p>
          </li>
          <li>
            <b>Financial independence</b>
            <p>F0RTHSP4CE is not a start-up, resident is a resident and you can&apos;t by more voting power with donations.</p>
          </li>
          <li>
            <b>Do-ocracy</b>
            <p>If you want to change something, do it, but bear in mind the needs of the others.</p>
          </li>
          <li>
            <b>Dying is strictly forbidden</b>
            <p>Safety first. Follow the rules and help the others.</p>
          </li>
        </ol>
      </article>

      <article>
        <header>
          <h2>Donation</h2>
        </header>
        <p>
          F0RTHSP4CE is horizontal, so we can exist only with residents&apos; and guests&apos; donations.
          If you want to help us:
        </p>
        <ul>
          <li>drop the cash into the Donation Box</li>
          <li>donate materials or instruments</li>
        </ul>
      </article>

      <article>
        <header>
          <h2>Contact us</h2>
        </header>
        <ul>
          <li>
            Tbilisi, Khorava st, 18 (Vake) —&nbsp;
            <a href="https://yandex.com.ge/maps/-/CCUBYGSX9D">Yandex</a>&nbsp;
          </li>
          <li>
            <span>Telegram: </span>
            <a href="https://t.me/+w-yypPCNwH1kYTYy">chat</a>&nbsp;
          </li>
          <li>
            <a href="https://github.com/f0rthsp4ce">Github</a>&nbsp;
          </li>
        </ul>
      </article>
    </>
  )
}

export default Home;
