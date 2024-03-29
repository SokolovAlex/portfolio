export type Question = {
  text: string
  opened?: boolean
  active?: boolean
  icon?: string
}

export type Category = {
  name: string,
  questions: Question[]
}

export const categories: Category[] =  [
  {
    name: `Мультики`,
    questions: [
      {
        text: `Как называется мультик о путешествии двух братьев и половины папы?`,
      },
      {
        text: `Какие 5 героев жили в голове у главной героини мультика «Головоломка»?`,
      },
      {
        text: `Угадате из какого мультика песня.`,
      },
      {
        text: `Как звали льва-злодея из мультика «Король-лев»?`,
      },
      {
        text: `Кто играл на барабанах у Бременских музыкантов.`,
      },d
    ],
  },
  {
    name: `Животные`,
    questions: [
      {
        text: `У какой птицы нет перьев?`,
      },
      {
        text: `Какое животное самое медлительное?`,
      },
      {
        text: `Какая птица подкидывает свои яйца в чужие гнезда?`,
      },
      {
        text: `Почему змеи высовывают язык?`,
      },
      {
        text: `Этот грызун живет в 11 раз дольше мышей и крыс, не чувствует боли. Ученые его называют "почти бессмертным"`,
        icon: `HeartIcon`
      },
    ],
  },
  {
    name: `Гарри Поттер`,
    questions: [
      {
        text: `Кто сообщил Гарри о том, что он волшебник?`,
      },
      {
        text: `В честь кого названы факультеты Хогвардса?`,
      },
      {
        text: `Как называлась платформа, с которой Гарри отправился в школу?`,
      },
      {
        text: `Как звали привидение грустной девушки, живущей в школьном туалете?`,
      },
      {
        text: `В кого умел превращаться крестный Гарри?`,
      },
    ],
  },
  {
    name: `Космос и математика`,
    questions: [
      {
        text: `Какая планета Млечного Пути самая горячая?`,
        icon: `FireIcon`,
      },
      {
        text: `Сколько в минутах длился первый полёт человека?`,
        icon: `RocketLaunchIcon`,
      },
      {
        text: `Какой единицей является сотая часть метра?`,
      },
      {
        text: `С помощью какой звезды находят стороны света?`,
      },
      {
        text: `Когда День Пи?`,
      },
    ],
  },
  {
    name: `Угадай число`,
    questions: [
      {
        text: `Сколько вдохов делает человек в сутки?`,
        icon: `ChartBarSquareIcon`,
      },
      {
        text: `Сколько детей рождается в мире каждую секунду?`,
        icon: `ChartBarSquareIcon`,
      },
      {
        text: `Сколько зубов у акулы?`,
        icon: `ChartBarSquareIcon`,
      },
      {
        text: `Сколько ударов в минуту делает сердце колибри во время полета?`,
        icon: `ChartBarSquareIcon`,
      },
      {
        text: `Как долго идти пешком до луны?`,
        icon: `ChartBarSquareIcon`,
      },
    ],
  },
  {
    name: `Лего`,
    questions: [
      {
        text: `Какая страна является родиной Лего?`,
      },
      {
        text: `Из какого материала были сделаны первые Лего?`,
      },
      {
        text: `Какое количество блоков Лего было произведено за 50 лет?`,
        icon: `ChartBarSquareIcon`,
      },
      {
        text: `Какой девиз компании был создан основателем и используется по сей
        день?`,
      },
      {
        text: `Какая тема не используется ни в одном сете серии?`,
      },
    ]},

    {
      name: `Любопытно!`,
      questions: [
        {
          text: `Назовите по кругу страны, которые знаете?`,
        },
        {
          text: `Почему Луна не падает на Землю?`,
        },
        {
          text: `Сколько сердец у червяка?`,
          icon: `HeartIcon`,
        },
        {
          text: `Какая кость в организме человека самая большая? Какая самая большая мышца?`,
          icon: `HeartIcon`,
        },
        {
          text: `Сколько Земель может поместиться внутри Солнца?`,
          icon: `ChartBarSquareIcon`,
        },
      ],
  },
];

