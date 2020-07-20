const sugarPrice = 15.678;
const vinePrice = 123.965;
const meetPrice = 90.2345;

const maxPrice = Math.max(sugarPrice, vinePrice, meetPrice);

console.log(maxPrice);

const minPrice = Math.min(sugarPrice, vinePrice, meetPrice);

console.log(minPrice);

const summOfProducts = sugarPrice + vinePrice + meetPrice;

console.log(summOfProducts);

const summToInteger = Math.floor(sugarPrice) + Math.floor(vinePrice) + Math.floor(meetPrice);

console.log(summToInteger);

const summTo100 = Math.round(Math.round(summOfProducts)/100) * 100;

console.log(summTo100);

const isEven = summOfProducts % 2 === 0 ? true : false;

console.log(isEven);

const summOfChangeFromSugar = 500 - sugarPrice;
const summOfChangeFromVine = 500 - vinePrice;
const summOfChangeFromMeet = 500 - meetPrice;

console.log(summOfChangeFromSugar);
console.log(summOfChangeFromVine);
console.log(summOfChangeFromMeet);

const averagePrice = Math.round(summOfProducts / 3 * 100) / 100;

console.log(averagePrice);

const discount = Math.round(Math.random() * 100) / 100;

console.log(discount);

const summWithDiscount = Math.round((summOfProducts - (summOfProducts * discount)) * 100) / 100;

console.log(summWithDiscount);

const profitAll = summOfProducts / 2 - (summOfProducts - summWithDiscount);

console.log (profitAll);

const results = `
    <table>
        <tr>
            <caption>Summary table</caption>
        </tr>   
        <tr>
            <td class="name">Max price</td>
            <td class="value">${maxPrice}</td>
        </tr>
        <tr>
            <td class="name">Min price</td>
            <td class="value">${minPrice}</td>
        </tr>
        <tr>
            <td class="name">Summ of all products</td>
            <td class="value">${summOfProducts}</td>
        </tr>
        <tr>
            <td class="name">Summ to integer</td>
            <td class="value">${summToInteger}</td>
        </tr>
        <tr>
            <td class="name">Summ to hundreds</td>
            <td class="value">${summTo100}</td>
        </tr>
        <tr>
            <td class="name">Summ of all products even?</td>
            <td class="value">${isEven}</td>
        </tr>
        <tr>
            <td class="name">Change from 500 for sugar</td>
            <td class="value">${summOfChangeFromSugar}</td>
        </tr>
        <tr>
            <td class="name">Change from 500 for vine</td>
            <td class="value">${summOfChangeFromVine}</td>
        </tr>
        <tr>
            <td class="name">Change from 500 for meet</td>
            <td class="value">${summOfChangeFromMeet}</td>
        </tr>
        <tr>
            <td class="name">Avarage price</td>
            <td class="value">${averagePrice}</td>
        </tr>
        <tr>
            <td class="name">Discount</td>
            <td class="value">${Math.round(discount * 100)}%</td>
        </tr>
        <tr>
            <td class="name">Summ with discount</td>
            <td class="value">${summWithDiscount}</td>
        </tr>
        <tr>
            <td class="name">Profit</td>
            <td class="value">${profitAll}</td>
        </tr>
    </table>
`;

document.getElementById("results").innerHTML = results;