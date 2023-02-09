import "./TransparentCard.css";

const TransparentCard = ({id, title, count, icon}) => {
    return(
        <div className="cardContainer">
            <div className="iconSize">{icon}</div>
            <div className="cardTitle">{title}</div>
            <div className="count">{count}</div>
        </div>
    )
}

export default TransparentCard;
