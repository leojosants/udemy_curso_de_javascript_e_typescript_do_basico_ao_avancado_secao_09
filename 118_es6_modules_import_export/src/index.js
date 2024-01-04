/* example 01
    import { nameExport as nameImport, lastnameExport as lastnameImport, ageExport as ageImport, sumExport as sumImport } from './modulo_1';

    const name = 'João';
    console.log(nameImport, lastnameImport, ageImport, sumImport(2, 3));
    console.log(name);
*/

/* example 02
    import {
        nameExport as nameImport,
        lastnameExport as lastnameImport,
        ageExport as ageImport,
        sumExport as sumImport,
        Person
    } from './modulo_1';

    const person = new Person('Leonardo', 'Santos');
    console.log(person);
* /

/* 
example 03 
    import * as MyModule from './modulo_1';
    console.log(MyModule);
*/

/* example 04 
    import importDefault from './modulo_1';
    console.log(importDefault(3, 5));
*/

/* example 05 
    import importDefault from './modulo_1';
    console.log(importDefault);
*/

/* example 06 
    import importDefault from './modulo_1';
    console.log(importDefault(2, 3));
*/

/* example 07 
    import importDefault, { name, lastname, age, sum } from './modulo_1';
    console.log(importDefault(2, 3));
    console.log(name, lastname, age, sum(3, 4));
*/

/* example 08 
    import Person, { name, lastname, age } from './modulo_1';
    const person = new Person(name, lastname, age);
    console.log(person);
*/