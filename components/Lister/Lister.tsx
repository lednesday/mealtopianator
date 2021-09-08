type Listable = {
    id: Number | String;
    name: String;
};

// displays items in an array, by item.name with item.id as key
export default function Lister<T extends Listable>(itemArrayObj: {itemArray: T[]}) {
    var itemArray = itemArrayObj.itemArray;
    if (typeof (itemArray) !== "undefined" && itemArray.length && itemArray[0].id && itemArray[0].name) {
        const items = itemArray.map((item: any) =>
            <li key={item.id}>{item.name}</li>);
        return (
            < ul >
                {items}
            </ul >
        );
    }
    else return (<ul></ul>)
};