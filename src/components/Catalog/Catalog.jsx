import {useEffect} from "react";
import s from "./Catalog.module.css";
import PlantItem from "./PlantItem/PlantItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../actions/itemsList";
import {setCurrentPage} from "../../redux/catalog-reducer";
import {createPages} from "../../utils/pagesCreator";
import Preloader from "../Preloader/Preloader";

const Catalog = (props) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.catalog.plantsList);
    const isFetching = useSelector(state => state.catalog.isFetching);
    const currentPage = useSelector(state => state.catalog.currentPage);
    const totalCount = useSelector(state => state.catalog.totalCount);
    const limitItems = useSelector(state => state.catalog.limitItems);
    const pagesCount = Math.ceil(totalCount/limitItems);
    const pages = [];
    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(fetchData(currentPage, limitItems));
    }, [currentPage]);

    let plantItems = items.map(p => <PlantItem key={p.id} id={p.id} image={p.image} name={p.name}
                                               cost={p.cost}/>)
    return (
        <div className={s.catalog}>
            <p className={s.catalog__description}>Сдавая пластик в пункты приема, Вы получаете природные баллы. За один
                килограмм пластика можно получить
                10 природных баллов.</p>
            <div className={ isFetching === false ? s.catalog__list : s.fetching }>
                {
                    isFetching === false ?
                        plantItems
                        :
                        <Preloader/>
                }
            </div>
            {/*<button className={s.catalog__btn}>Загрузить еще</button>*/}
            <div className={s.catalog__pages}>
                {pages.map((page, index) => <div
                    key={index}
                    className={currentPage == page ? s.currentPage : s.page}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</div>)}
            </div>
        </div>
    );
};


export default Catalog;
