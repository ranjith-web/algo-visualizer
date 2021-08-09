import "./styles.css";

const Container = ({blocks, compare, swap, sorted}) => {
    const array = blocks;
    const numWidth = Math.floor(document.documentElement.offsetWidth / (array.length * 3));
    const width = `${numWidth}px`;
    const numMargin = array.length < 5 ?
    10 : array.length < 8 ?
        8 : array.length < 11 ?
        6 : array.length < 20 ?
            4 : array.length < 50 ?
            3.5 : array.length < 100 ?
                3 : array.length < 130 ?
                2.5 : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const numFont = numWidth > 70 ?
    20 : numWidth > 60 ?
        18 : numWidth > 50 ?
        16 : numWidth > 40 ?
            14 : numWidth > 30 ?
            12 : numWidth > 20 ?
                10 : 8;
    const fontSize = `${numFont}px`;
    return(
        <div id="bodyContainer">
            { array.length ? array.map((number, index) => {
                let backgroundColor = compare && (index === compare[0] || index === compare[1]) ?
                "rgba(219, 57, 57, 0.8)" : swap && (index === swap[0] || index === swap[1]) ?
                "rgba(78, 216, 96, 0.8)" : sorted && sorted.includes(index) ? "rgba(237, 234, 59, 0.8)" : "rgba(66, 134, 244, 0.8)"
                const height = (number * 500 / array.length);
                return <div
                    className="arrayElement"
                    key={index}
                    style={{height: `${height}px`, width: width, marginLeft: margin, marginRigh: margin,backgroundColor: backgroundColor, color: color, fontSize: fontSize}}>
                    {number}
                </div>
                }) : null
            }
        </div>
    )
}

export default Container;