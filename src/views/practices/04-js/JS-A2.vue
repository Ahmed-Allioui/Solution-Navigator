<template>
    <h1>Objekte</h1>
    <h3>Aufgabe</h3>
    <p>Schreiben Sie die Prototypen Person und Auto in JavaScript, so dass jede Person weiß, welche Autos sie besitzt.
        Schreiben Sie eine Funktion conflict(), die feststellt, ob ein Auto von mehr als einer Person besessen wird.
    </p>
    <h3>Lösung</h3>
    <div>
        <label>Geben Sie die Anzahl der Personen ein:
            <input v-model="person_count" /></label>
    </div>
    <br>
    <div>
        <label>Geben Sie die Anzahl der Autos ein:
            <input v-model="car_count" /></label>
    </div>
    <br>
    <div>
        <button class="primary" @click="persons = generatePersons();">Neu anlegen</button>
    </div>
    <div class="container">
        <div class="person-container" v-for="person in persons" :key="person.name">
            <p>Name: {{ person.name }}</p>
            <p>Autos: </p>
            <div class="car-container">
                <label v-for="car in person.cars" :key="car.name">
                    <input type="checkbox" v-model="car.isSelected"> {{ car.name }}
                </label>
            </div>
        </div>
    </div>
    <div>
        <button class="primary" @click="conflictExists = conflict()">verify conflicts</button>
        <div class="message-container question">
            <p v-if="conflictExists" class="error-message">{{ conflictMessage }}</p>
            <p v-else class="success-message">{{ conflictMessage }}</p>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            person_count: 5,
            car_count: 5,
            persons: [],
            conflictMessage: '',
            conflictExists: false
        }
    },
    created() {
        this.persons = this.generatePersons();
    },
    methods: {
        conflict() {
            var carsInConflict = this.generateCars();
            for (var person of this.persons) {
                for (var [index, car] of person.cars.entries()) {
                    if (car.isSelected && carsInConflict[index].isSelected) {
                        this.conflictMessage = 'Das Auto [' + car.name + '] wurde mehmals besessen.'
                        return true;
                    }
                    carsInConflict[index].isSelected |= car.isSelected;
                }
            }
            this.conflictMessage = 'Es gibt keine Konflikte';
            return false;
        },
        createPerson(id) {
            return new Person('Person ' + id);
        },
        createCar(id) {
            return new Car('Car ' + id);
        },
        generatePersons() {
            var persons = [];
            for (var i = 0; i < this.person_count; i++) {
                persons[i] = this.createPerson(i);
                persons[i].cars = this.generateCars();
            }
            return persons;
        },
        generateCars() {
            var cars = [];
            for (var i = 0; i < this.car_count; i++) {
                cars[i] = this.createCar(i);
            }
            return cars;
        }
    }
}

function Person(name) {
    this.name = name;
    this.cars = [];
}

function Car(name) {
    this.name = name;
    this.isSelected = false;
}
</script>

<style lang="scss" scoped>
.container {
    margin: 1vw;
    display: flex;
    flex-wrap: wrap;

    .person-container {
        margin: 1vw;
        padding: 1vw;
        border: 0.1rem solid;
        border-radius: 0.5rem;

        .car-container {
            display: grid;
        }
    }
}

.message-container {
    padding: 1vw;

    .error-message {
        color: red;
    }

    .success-message {
        color: green;
    }
}
</style>