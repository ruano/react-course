// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const { min, max } = props

    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <div>
            <p>Min: {min}</p>
            <p>Max: {max}</p>
            <p>The random value is: {result}</p>
        </div>
    )
}