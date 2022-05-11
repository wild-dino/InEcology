const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const DELETE_POST = 'DELETE_POST';
const ADD_POST_TO_BLOG = 'ADD_POST_TO_BLOG';
const DISPLAY_CURRENT_POST = 'DISPLAY_CURRENT_POST';

let initialState = {
    posts: [],
    newPostText: '',
    blogPosts: [{
        id: "1652019687",
        photoURL: "https://i.pinimg.com/564x/0e/3b/d6/0e3bd6bcfacf3768985e296661311175.jpg",
        post: "Для изготовления одноразовых ватных дисков из неорганического хлопка используется огромное количество химикатов, пестицидов и удобрений, которые способствуют загрязнению окружающей среды.\n" + "\n" + "По данным WWF (Всемирного фонда дикой природы), производство такого хлопка отличается самыми большими затратами воды среди всех сельскохозяйственных процессов: для производства 1 обычный хлопковый диск требует 12 литров чистой воды.\n" + "\n" + "А теперь представьте, что все это — ради одноразового предмета, который выбрасывается через 5 секунд после одного использования.\n" + "\n" + "Датский бренд LastObject, автор первых в мире многоразовых ватных палочек, придумал альтернативу такой разрушающей вещи — многоразовые ватные диски LastRound.\n" + "\n" + "Они изготавливаются из 100% возобновляемого сырья — 70% древесного волокна и 30% хлопка c короткими волокнами, не подходящими для создания обычной ткани. Это делает их самой экологичной альтернативой ватным дискам. В отличие от других многоразовых дисков из ткани, представленных на рынке, LastRound на ощупь и внешне напоминают одноразовые ватные диски, используемые для снятия макияжа и нанесения уходовых средств. Приятным бонусом — экономичный расход, не нужно лить столько средства, как на тканевые диски.\n" + "\n" + "А еще у них есть очень красивый и приятный на ощупь футляр, изготовленный из полипропилена, собранного в океане у берегов Индонезии. В него помещаются семь дисков — сверху чистые, а снизу, отдельно от чистых, использованные. Очень удобно, чтобы всегда носить с собой и не создавать лишнего мусора!\n" + "\n" + "Улучшая привычки, мы улучшаем экологическую обстановку!",
        username: "Кот Васька"
    }, {
        id: "1659687",
        photoURL: "https://i.pinimg.com/564x/0f/89/c1/0f89c1a5911308353462252a175139e5.jpg",
        post: "Существует теория, что история циклична и движение по истории похоже на спираль — все, что было раньше, повторяется сейчас и будет повторяться в будущем. Я бы добавила оговорку — каждый пролет спирали шире предыдущего и уже последующего. Это связано с тем, что возможности человека становятся шире с каждым махом истории, и каждая новая эпоха приносит новые возможности выбора, сохраняя при этом старые.\n" + "\n" + "Теперь отойдем немного от теорий и рассмотрим факты. В среднем один человек производит примерно 300 килограммов мусора в год. При этом: пищевые отходы разлагаются от 10 дней до месяца, бумага — два года, дерево, железная арматура и старая обувь — до 10 лет, консервные банки — до 90 лет, полиэтиленовая пленка — 200 лет, стекло — более тысячи лет." + "Как выбор и мусор связаны между собой, спросите вы? Напрямую: совершая тот или иной выбор каждый день, мы увеличиваем или уменьшаем количество вырабатываемого мусора. Сортировать мусор или сваливать все в одну кучу? Брать на кассе пакет или воспользоваться холщевой сумкой? Поддаться очередному приступу шопоголизма или предпочесть качество количеству? Покупать питьевую воду в пластиковых и стеклянных бутылках или пользоваться фильтром и многоразовыми бутылками?\n" + "\n" + "В Швеции ответственно подходят к проблеме замусоривания. Здесь перерабатывают до 99 % мусора. Жители Швеции сортируют свои отходы, чтобы затем их можно было повторно использовать, если это стекло или пластик, переработать, если это бумага, или экологично утилизировать.\n" + "\n" + "Кроме того, чтобы правильно разбираться с отходами, можно просто их не производить. Скорее всего, именно такая мысль однажды посетила француженку Беа Джонсон. Посетила — и обосновалась в голове. Так появилось движение Zero Waste — «ноль отходов».",
        username: "Буся Морошкина"
    },
        {
            id: "165968327",
            photoURL: "https://i.pinimg.com/564x/fd/34/24/fd34243ee22df43b185e38c6f5ee546b.jpg",
            post: "Zero Waste — модный эко-тренд, который призывает к осознанному и ответственному потреблению. Согласно принципам философии «быта без отходов» абсолютно каждый из нас может изменить мир, делая его чище и безопаснее, создавая как можно меньше мусора. Звучит сложно, но на практике это вполне реально. Предлагаем попробовать внедрить основные правила Zero Waste и ты увидишь, как круто быть частью огромной эко-команды и свободным от мира вещей. Тренд или необходимость? Термин Zero Waste («ноль отходов») появился не у американских эко-блогеров, а пришел из экономики. Принципы цикличности являются базовыми в производстве и сводятся к замкнутому процессу: проектирование продукта, производство, потребление, удаление или утилизация, восстановление или повторное использование. Все просто и логично, любая вещь, пройдя путь создания и использования, рано или поздно оказывается в мусоре. В итоге, нескончаемый поток отходов и ненужных вещей заполняет личное пространство и планету.",
            username: "Элли Уильямс"
        }, {
            id: "0659327",
            photoURL: "https://i.pinimg.com/564x/9f/11/06/9f11066d6622be6bb7a51f28b25a115f.jpg",
            post: "Принципы zero waste:\n" +
                "\n" +
                "В среднем, на каждого жителя России приходится 400 кг мусора в год. Этот объем реально сократить, если пересмотреть бытовые привычки. Звучит сложно, но когда начинаешь применять принцип «ноль отходов» на практике, моментально втягиваешься и уже не можешь остановиться. Чтобы сделать первый шаг, запомни формулу 5R:\n" +
                "\n" +
                "Refuse (откажись).\n" +
                "Стильная авоська или шоппер вместо пластиковых пакетов. Милая термокружка вместо одноразового стаканчика с кофе. Полностью отказаться от промышленной упаковки вряд ли получится, зато уменьшить ее количество в твоей жизни проще, чем кажется;\n" +
                " \n" +
                "Reduce (сократи).\n" +
                "Сколько ненужных вещей окружает нас каждый день? Вещи, которые проносишь в лучшем случае сезон, туфли, которые купила на распродаже и ни разу не выгуляла… С 1960 до 2021 года объем отходов текстильной промышленности вырос на 811%. Вместо 5 вещей-однодневок лучше купить одну классную, которую ты с удовольствием будешь использовать из года в год;\n" +
                " \n" +
                "Reuse (используй повторно).\n" +
                "Меняйся с друзьями, отдавай вещи на благотворительность или находи им нестандартное применение! Надоевшие мелочи могут осчастливить нового владельца на своп-вечеринке. Баночкам от косметики можно подарить новую жизнь в качестве основы для подсвечника, горшочка для миниатюрного цветка или импровизированной шкатулки для бижутерии;\n" +
                " \n" +
                "Recycle (перерабатывай).\n" +
                "Переработанный пластик, бумага, стекло вернутся к тебе в виде новых классных вещей. Love Beauty & Planet всецело поддерживает эту инициативу. Наши флаконы — из 100% вторично использованного пластика. Следующий шаг — крышечки и элементы дозаторов;\n" +
                " \n" +
                "Rot (компостируй).\n" +
                "Установи в раковину измельчитель или заведи отдельное ведро для органических отходов. С помощью домашнего компостера ты легко превратишь их в удобрение для растений. Любимый фикус будет благодарен тебе за банановую кожуру даже в не переработанном виде.",
            username: "Джоэл Миллер"
        },

    ],
    currentDisplayPost: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }

        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state, newPostText: '', posts: [...state.posts, {
                    id: action.payload.id,
                    post: action.payload.post,
                    username: action.payload.username,
                    photoURL: action.payload.photoURL
                }]
            }
        case ADD_POST_TO_BLOG:
            let post = state.posts.find((post) => post.id === action.payload);
            let inBlog = state.blogPosts.find((item) => item.id === action.payload ? true : false);
            return {
                ...state, blogPosts: inBlog ? [...state.blogPosts] : [...state.blogPosts, {...post}]
            }
        case DISPLAY_CURRENT_POST:
            let postsInBlog = state.blogPosts.find((post) => post.id === action.payload);
            return {
                ...state, currentDisplayPost: postsInBlog
            }
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter((item) => item.id !== action.payload)
            }

        default:
            return state;
    }
}

export const addPost = (id, text, username, userPhoto) => ({
    type: ADD_POST, payload: {id: id, post: text, username: username, photoURL: userPhoto}
});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const deletePost = (id) => ({type: DELETE_POST, payload: id});
export const addPostToBlog = (id) => ({type: ADD_POST_TO_BLOG, payload: id});
export const displayCurrentPost = (id) => ({type: DISPLAY_CURRENT_POST, payload: id});

export default postsReducer;