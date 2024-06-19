// Создайте класс «Сотрудник» со свойствами
// имени и зарплаты. Включите метод расчета
// годовой зарплаты. Создайте подкласс под
// названием «Менеджер», который
// наследуется от класса «Сотрудник» и
// добавляет дополнительное свойство для
// отдела. Переопределить метод расчета
// годовой зарплаты, чтобы включить бонусы
// для менеджеров. Создайте два экземпляра
// класса «Менеджер» и рассчитайте их годовую
// зарплату

class Employee{
    constructor(name,salary){
        this.name = name
        this.salary = salary
    }
    Salary(){
        return this.salary * 12
    }
}

class Manager extends Employee{
    constructor (name,salary,campan,bonus){
        super(name,salary)
        this.campan = campan
        this.bonus = bonus
    }
    Salary(){
        return super.Salary() + this.bonus
    }
}

const manager1 = new Manager ('Дмитрий', 3000,'Modsen', 10000)
const manager2 = new Manager ('Василий', 4000,'Modsen', 15000)

console.log(manager1.Salary())
console.log(manager2.Salary())