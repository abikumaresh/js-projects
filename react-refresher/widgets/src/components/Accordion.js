import React, {useState} from 'react'

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (e) => {
        console.log(e.target.key)
        // console.log("Title clicked -- ", index)
        // setActiveIndex(index)
    }

    const renderedAccordion = items.map( (item,index) => {

        const active = index === activeIndex ? 'active' : ''

        return (
        <React.Fragment key={index}>
            <div className={`${active} title`}
                onClick={onTitleClick}>
                <i class="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`${active} content`}>
                {item.content}
            </div>
        </React.Fragment>)
        
    })

    return <div className="ui styled accordion">
        {renderedAccordion}
    </div>
}

export default Accordion