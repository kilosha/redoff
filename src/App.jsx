import { useEffect, useState } from "react";
import "./App.css";
import DogsList from "./components/DogsList";

function App() {
    const [updateCount, setUpdateCount] = useState(0);
    const [dogsAmount, setDogsAmount] = useState(3);
    const [dogs, setDogs] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("all");

    const onInputValueChange = (e) => {
        setDogsAmount(e.target.value);
    };

    const onUpdate = () => {
        getData();
        setUpdateCount((prevCount) => prevCount + 1);
    };

    const getData = async () => {
        try {
            let url;
            if (selectedBreed === "all") {
                url = `https://dog.ceo/api/breeds/image/random/${dogsAmount}`;
            } else {
                url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${dogsAmount}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setDogs(data.message);
        } catch (e) {
            alert("Что-то пошло не так(");
            console.log(e);
        }
    };

    const getBreeds = async () => {
        try {
            const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
            const data = await response.json();
            setBreeds(["all", ...Object.keys(data.message)]);
        } catch (e) {
            alert("Что-то пошло не так(");
            console.log(e);
        }
    };

    useEffect(() => {
        getBreeds();
        getData();
    }, []);

    return (
        
        <div style={{height: "90vh"}}>
            <h3>Галерея собак</h3>
            <span>Картинки обновлены {updateCount} раз(а)</span>
            <div style={{display: "flex", alignItems: "center"}}>
                <h5>Порода:</h5>
                <select
                    value={selectedBreed}
                    onChange={(e) => setSelectedBreed(e.target.value)}
                >
                    {breeds.map((breed) => {
                        return <option value={breed}>{breed}</option>;
                    })}
                </select>
            </div>
            <div>
                <span>Показать</span>
                <input value={dogsAmount} onChange={onInputValueChange} />
                <button onClick={onUpdate}>Обновить</button>
            </div>
            

            <div >
                <DogsList dogs={dogs} />
            </div>
        </div>
    );
}

export default App;
