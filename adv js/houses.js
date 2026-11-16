import { houses } from "./data/houses.js";
import { defaultHouse } from "./data/defaulthouse.js";

function displayHouse(housesToDisplay = [defaultHouse]) {
    return housesToDisplay
        .map(house => {
            const {
                propertyLocation,
                priceGBP,
                roomsM2,
                comment,
                image
            } = house;

            const roomSize = roomsM2.reduce(
                (total, room) => total + room,
                0
            );

            return `
                <section class="card">
                    <img src="${image}" alt="${propertyLocation}">
                    <div class="card-content">
                        <h2>${propertyLocation}</h2>
                        <p>Price: £${priceGBP}</p>
                        <p>Total Room Size: ${roomSize} m²</p>
                        <p>${comment}</p>
                    </div>
                </section>
            `;
        })
        .join("");
}

const houseContainer = document.getElementById("house-container");

houseContainer.innerHTML =
    houses.length > 0
        ? displayHouse(houses)
        : displayHouse();