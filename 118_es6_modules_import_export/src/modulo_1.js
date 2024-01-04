/* example 01
    const name = 'Leonardo';
    const lastname = 'Santos';
    const age = 39;

    function sum(x, y) {
        return x + y;
    }

    export { name as nameExport, lastname as lastnameExport, age as ageExport, sum as sumExport };
*/

/* example 02
    export const name = 'Leonardo';
    export const lastname = 'Santos';
    export const age = 39;

    export function sum(x, y) {
        return x + y;
    }

    export class Person {
        constructor(name, lastname) {
            this.name = name;
            this.lastname = lastname;
        }
    }
*/

/* example 03 
    export const name = 'Leonardo';
    export const lastname = 'Santos';
    export const age = 39;

    export function sum(x, y) {
        return x + y;
    }
*/

/* example 04
    export const name = 'Leonardo';
    export const lastname = 'Santos';
    export const age = 39;

    export default function sum(x, y) {
        return x + y;
    }
*/

/* example 05
    const name = 'Leonardo';
    const lastname = 'Santos';
    const age = 39;

    function sum(x, y) {
        return x + y;
    }

    export { name as default, lastname, age, sum }
*/

/* example 06
    const name = 'Leonardo';
    const lastname = 'Santos';
    const age = 39;

    function sum(x, y) {
        return x + y;
    }

    export default (x, y) => x * y;
    export { name, lastname, age, sum }
*/

/* example 07
    const name = 'Leonardo';
    const lastname = 'Santos';
    const age = 39;

    function sum(x, y) {
        return x + y;
    }

    export default (x, y) => x * y;
    export { name, lastname, age, sum }
*/

/* example 08
    export const name = 'Leonardo';
    export const lastname = 'Santos';
    export const age = 39;

    export default class Person{
        constructor(name,lastname){
            this.name = name;
            this.lastname = lastname;
        }
    }
*/