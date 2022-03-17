import s from './Dialog.module.css';

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={`${s.dialog} ${s.active}`}>
                        Olya Sidorova
                    </div>
                    <div className={s.dialog}>
                        Admin
                    </div>
                    <div className={s.dialog}>
                        Moderator
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Привет. Как ваши дела?</div>
                    <div className={s.message}>Добрый день! Приветствуем вас на нашем эко-сервисе</div>
                    <div className={s.message}>Ваша заявка находится в обработке</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;