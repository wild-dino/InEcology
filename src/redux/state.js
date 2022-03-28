let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Цель идеологии «Ноль отходов» – сократить объём мусора, который попадает на свалки и мусоросжигательные заводы.'
                },
                {
                    id: 2,
                    message: 'Одна из основных причин растущего объёма отходов — неконтролируемый рост производства и использования одноразовых товаров, тары и упаковки, особенно — пластиковых.'
                },
                {
                    id: 3,
                    message: 'Одноразовый пластик — один из главных загрязнителей природы. По результатам народных проверок пластикового загрязнения на берегах рек, озёр и морей (пластиквотчингов), 68% фрагментов найденного мусора оказались пластиком. Из них — 96,2% – это одноразовый пластик..'
                }
            ],
            newPostText: 'Чем можете поделиться?'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Привет. Как настроение?'},
                {id: 2, message: 'Привет! В целом отличное'},
                {
                    id: 4,
                    message: 'Я сегодня сдал пластиковые бутылки и получил 500 зеленых баллов :)). Прочитал пост о переработке пластиковых отходов.'
                },
                {
                    id: 5,
                    message: 'Я сегодня сдал пластиковые бутылки и получил 500 зеленых баллов :)). Прочитал пост о переработке пластиковых отходов.'
                },
                {
                    id: 6,
                    message: 'Я сегодня сдал пластиковые бутылки и получил 500 зеленых баллов :)). Прочитал пост о переработке пластиковых отходов.'
                },
                {
                    id: 7,
                    message: 'Я сегодня сдал пластиковые бутылки и получил 500 зеленых баллов :)). Прочитал пост о переработке пластиковых отходов.'
                },
                {
                    id: 8,
                    message: 'Я сегодня сдал пластиковые бутылки и получил 500 зеленых баллов :)). Прочитал пост о переработке пластиковых отходов.'
                },
                {
                    id: 9,
                    message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
                },

            ],
            dialogs: [
                {
                    id: 1,
                    name: 'Olya Sidorova',
                    avatar: "https://i.pinimg.com/564x/6a/f0/4e/6af04e7bc8f52dc3af0303c227b88142.jpg"
                },
                {
                    id: 2,
                    name: 'Admin',
                    avatar: "https://i.pinimg.com/564x/14/63/d8/1463d8d75b82c06f8c602a86c3a7e8c3.jpg"
                },
                {
                    id: 3,
                    name: 'Moderator',
                    avatar: "https://i.pinimg.com/564x/a0/5f/6f/a05f6f20728289fd9f5ec22ce3592271.jpg"
                }
            ],
        },

    },
    _callSubscriber() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { //{type: 'ADD-POST'} // передается объект
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

export default store;
window.store = store;