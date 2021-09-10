type Listable = {
    id: Number | String;
    name: String;
};

// displays items in an array, by item.name with item.id as key
export default function Lister<T extends Listable>(itemArrayObj: {itemArray: T[], pluralNoun?: string}) {
    var {itemArray, pluralNoun} = itemArrayObj;
    if (itemArray.length) {
        const items = itemArray.map((item: any) =>
            <li key={item.id}>{item.name}</li>);
        return (
            < ul >
                {items}
            </ul >
        );
    }
    else {
        const nounStr = pluralNoun ? pluralNoun : "items";
        return (<ul role="empty-list"><li>You have no {nounStr} saved.</li></ul>);
    }
};
