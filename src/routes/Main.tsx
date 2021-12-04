import React, {FC, useCallback, useState} from 'react'
import IMAGES_DATA from '../data'
import '../App.scss'

const data = [[0,'Popular'], [1, 'Favorite'], [2, 'New']]

const Main: FC = () => {
    const [filtersCounter, setFiltersCounter] = useState<number>(0)
    const filterItemGenerator = useCallback((filtersCount: number, title: string) => {
        return <div className="filtersItem" onClick={() => setFiltersCounter(filtersCount)} style={filtersCounter === filtersCount ? {color: '#6749A5', borderBottom: '4px solid #6749A5'}: {}}>
            {title}
        </div>
    },[setFiltersCounter, filtersCounter])

    return <div className="wrapper">
        <div className="headerContainer">
            <div className="mainTitle">
                Courses
            </div>
            <div className="filtersContainer">
                {data.map(([el1, el2]) => {
                    return filterItemGenerator(el1 as number, el2 as string)
                })}
            </div>
        </div>
        <div className="imageListContainer">
            {IMAGES_DATA.sort((a,b) => {
                if(filtersCounter === 0) {
                   return a.rate > b.rate ? 1 : -1
                }else if(filtersCounter === 1) {
                    return a.favorite ? 1 : -1
                } else {
                    return a.time > b.time ? -1 : 1
                }
            }).map(({url,time}) => {
                return <div className="itemWrapper">
                    <div style={{backgroundImage: `url(${url})`}} className="listItem">
                        <div className='time'>{time} minutes ago</div>
                    </div>
                </div>
            })}
        </div>
    </div>

}

export default Main