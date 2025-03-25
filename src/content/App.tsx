import '@mantine/core/styles.css';
import {  ColorSchemeScript, createTheme, MantineProvider, Text, Title } from '@mantine/core';
import styles from './styles/style.module.scss';
import testEna from './media/testosterone.jpg';
import dbol from './media/dianabole.jpg';
import sustanol from './media/sustanol.jpg';
import nandrolone from './media/nandronol.jpg';
import trenbolone from './media/trenbolon.jpg';
import Template from './template/temp';

const theme = createTheme({
  headings: {
    fontFamily: 'Montserrat, sans-serif',
  },
  focusRing: 'never',
});

let cList = [
  {
    title: 'Тестостерон энантат',
    content: (
      <>
        <Text className={styles.base_text}>
          один из наиболее популярных анаболических стероидов, используемый в медицине и спорте.
        </Text>
        <br />
        <b>Роль:</b>
        <ul>
          <li>Рост мышечной массы и силы</li>
          <li>Увеличение выносливости</li>
          <li>Ускоренное восстановление</li>
          <li>Регуляция обмена веществ</li>
        </ul>
        <b>Побочные эффекты:</b>
        <ul>
          <li>Акне и жирность кожи</li>
          <li>Гинекомастия</li>
          <li>Агрессия и перепады настроения</li>
          <li>Угнетение выработки тестостерона</li>
          <li>Проблемы с печенью</li>
        </ul>
      </>
    ),
    img: testEna,
  },
  {
    title: 'Дианабол',
    content: (
      <>
        <Text className={styles.base_text}>
          известный анаболический стероид с активным веществом метандиенон.
        </Text>
        <br />
        <b>Роль:</b>
        <ul>
          <li>Быстрый рост мышечной массы</li>
          <li>Повышение силы</li>
          <li>Улучшение синтеза белка</li>
          <li>Стимуляция аппетита</li>
        </ul>
        <b>Побочные эффекты:</b>
        <ul>
          <li>Высокое давление</li>
          <li>Гинекомастия</li>
          <li>Проблемы с печенью</li>
          <li>Задержка жидкости</li>
        </ul>
      </>
    ),
    img: dbol,
  },
  {
    title: 'Сустанол',
    content: (
      <>
        <Text className={styles.base_text}>
        смесь эфирных форм тестостерона, популярная среди бодибилдеров.
        </Text>
        <br />
        <b>Роль:</b>
        <ul>
          <li>Набор мышечной массы</li>
          <li>Рост силы</li>
          <li>Быстрое восстановление</li>
          <li>Улучшение самочувствия</li>
        </ul>
        <b>Побочные эффекты:</b>
        <ul>
          <li>Гинекомастия</li>
          <li>Задержка жидкости</li>
          <li>Повышенное давление</li>
          <li>Негативное влияние на холестерин</li>
        </ul>
      </>
    ),
    img: sustanol,
  },
  {
    title: 'Нандролон',
    content: (
      <>
        <Text className={styles.base_text}>
        стероид, используемый в медицине и спорте.
        </Text>
        <br />
        <b>Роль:</b>
        <ul>
          <li>Рост сухой массы</li>
          <li>Ускоренное восстановление</li>
          <li>Снижение жировой массы</li>
          <li>Поддержка суставов</li>
        </ul>
        <b>Побочные эффекты:</b>
        <ul>
          <li>Гормональные нарушения</li>
          <li>Проблемы с печенью</li>
          <li>Сердечно-сосудистые риски</li>
          <li>Акне и кожные проблемы</li>
        </ul>
      </>
    ),
    img: nandrolone,
  },
  {
    title: 'Тренболон',
    content: (
      <>
        <Text className={styles.base_text}>
          мощный анаболический стероид.
        </Text>
        <br />
        <b>Роль:</b>
        <ul>
          <li>Быстрый рост мышц</li>
          <li>Ускорение восстановления</li>
          <li>Повышение агрессивности</li>
          <li>Поддержка сухой массы</li>
        </ul>
        <b>Побочные эффекты:</b>
        <ul>
          <li>Гормональные нарушения</li>
          <li>Психологические изменения</li>
          <li>Сердечно-сосудистые риски</li>
          <li>Нарушение сна</li>
        </ul>
      </>
    ),
    img: trenbolone,
  }
];


function App() {
  const mapping = cList.map((item, id) => {
    return (
      <Template 
        id={id} 
        src={item.img}
        isArrowUp={id !== 0 } 
        isArrowDown={id !== cList.length - 1}
      >
        <Title className={styles.base_title}>{item.title}</Title>
        {
          item.content ? 
            <Text className={styles.base_text}>
              {item.content}
            </Text>
          : 
            <></>
        }
      </Template> 
    )
  })

  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme='auto'>
        {mapping}
      </MantineProvider>
    </>
  )
}

export default App
