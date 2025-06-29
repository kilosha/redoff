import Dog from "./Dog";

const DogsList = ({dogs}) => {
    return (
        <div style={{display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)"
        }}>
            {dogs && dogs.map(dog => {
                return <Dog dogImg={dog}/>
            })}
        </div>
    )
    
}

export default DogsList;