const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

var obj = {list : []};

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector('list');
students = listNode.getElementsByTagName("student");

for(var i=0; i<students.length; i++) {
    var studentNode = students[i].querySelector('student');
    var nameNode = students[i].querySelector('name');
    var firstNameNode = nameNode.querySelector('first');
    var secondNameNode = nameNode.querySelector('second');
    var ageNode = students[i].querySelector('age');
    var profNode = students[i].querySelector('prof');
    var langAttr = nameNode.getAttribute('lang');

    var student = {name: (firstNameNode.textContent + ' ' + secondNameNode.textContent),
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
        lang: langAttr
    };
    obj.list.push(student)
}
console.log(obj);