
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

var obj = {list : []};

const datalist = JSON.parse(jsonString);
const items = datalist.list;

for(var i=0; i<items.length; i++) {
    var item = items[i];
    const result = {
        name: item.name,
        age: Number(item.age),
        prof: item.prof
    };
    obj.list.push(result);
}

console.log(obj)