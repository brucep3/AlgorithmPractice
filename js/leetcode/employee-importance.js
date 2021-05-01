/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let m = new Map();
    for (let emp of employees) {
        m.set(emp.id, emp);
    }
    let res = 0, curList = [id];
    while (curList.length) {
        let len = curList.length;
        for (let i = 0; i < len; ++i) {
            let curEmp = m.get(curList.shift());
            res += curEmp.importance;
            for (let sub of curEmp.subordinates) {
                curList.push(sub);
            }
        }
    }
    return res;
};
