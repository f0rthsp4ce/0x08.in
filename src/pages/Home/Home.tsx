import type { NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>F0RTHSP4CE – Хакспейс в Тбилиси</title>
        <meta name="description" content="Сообщество энтузиастов и энтузиасток, обьединённых вокруг технологий и искусства. Вместе мы разбираемся в сложных вещах, проводим события, работаем над проектами и просто хорошо проводим время." />
        <meta name="keywords" content="f0rthsp4ce, forthspace, хакспейс, хакспейс тбилиси" />
      </Head>

      <h1>F0RTHSP4CE</h1>
      <article>
        <p>
          F0RTHSP4CE — это <a href="https://ru.wikipedia.org/wiki/Хакерспейс">хакспейс</a>.
          Сообщество энтузиастов и энтузиасток, обьединенных вокруг технологий и искусства.
          Вместе мы разбираемся в сложных вещах, проводим события, работаем над проектами и 
          просто хорошо проводим время.
        </p>
        <p>
          Наша миссия – развивать сообщество, в котором все смогут найти что-то для себя,
          Мы ломаем стены и строим мосты, помогая друг другу и сообществам вокруг нас.
        </p>
      </article>

      <article>
        <header>
          <h2>Как с нами взаимодействовать</h2>
        </header>
        <p>
          Приходите в гости – пообщаться, познакомиться с пространством или попросить помощи
          для своего проекта. У всех свои представления о комфортном знакомстве, поэтому к нам
          можно просто прийти и посмотреть на людей за работой или же сразу присоединиться к
          заинтересовавшему вас проекту.
        </p>
        <p>
          Резиденты занимаются спейсом в свободное время на чистом энтузиазме, поэтому у нас нет
          “дежурных” или “администраторов”. Мы очень любим гостей, но встречаем их только когда кто-то
          из резидентов готов это сделать. Собираясь заглянуть, напишите заранее в&nbsp;
          <a href="https://t.me/+w-yypPCNwH1kYTYy">чат</a>,
          чтобы мы согласовали удобное всем время.
        </p>
        <p>
          F0RTHSP4CE – не закрытый клуб. Если вы разделяете наши принципы и хотите делать его вместе – станьте резидентом.
        </p>
      </article>

      <article>
        <header>
          <h2>Принципы</h2>
        </header>
        <p>Наше сообщество построено на нескольких принципах:</p>
        <ol>
          <li>
            <b>Будьте прекрасны по отношению друг к другу</b>
            <p>Прислушивайтесь ко мнению и потребностям друг друга.</p>
          </li>
          <li>
            <b>Не притесняй и не мешай другим</b>
            <p>Соблюдай личные границы других участников, старайся договариваться и кооперироваться.</p>
          </li>
          <li>
            <b>Вкладывай больше, чем потребляешь</b>
            <p>
              F0RTHSP4CE может развиваться только если сообщество делает его лучше.
              Мы не коворкинг и не обеспечиваем резидентов готовыми условиями для работы.
            </p>
          </li>
          <li>
            <b>Финансовая независимость</b>
            <p>F0RTHSP4CE не является источником прибыли, а финансовый вклад резидента не влияет на принятие решений.</p>
          </li>
          <li>
            <b>Do-ocracy</b>
            <p>Если хочешь чтобы что-то изменилось – сделай это, но не забывай о других.</p>
          </li>
          <li>
            <b>Запрещено умирать</b>
            <p>Safety first. Заботьтесь о безопасности себя и окружающих.</p>
          </li>
        </ol>
      </article>

      <article>
        <header>
          <h2>Донейшн</h2>
        </header>
        <p>
          F0RTHSP4CE – это горизонтальное сообщество, существующее только благодаря резидентским взносам и пожертвованиям.
          Если вы хотите нас поддержать, можно:
        </p>
        <ul>
          <li>закинуть наличку в Donation Box</li>
          <li>задонатить инструменты или материалы</li>
        </ul>
      </article>

      <article>
        <header>
          <h2>Контакты</h2>
        </header>
        <ul>
          <li>
            Тбилиси, ул. Хорава, 18 (Ваке) —&nbsp;
            <a href="https://yandex.com.ge/maps/-/CCUBYGSX9D">Яндекс</a>&nbsp;
          </li>
          <li>
            <span>Telegram: </span>
            <a href="https://t.me/+w-yypPCNwH1kYTYy">чат</a>&nbsp;
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
