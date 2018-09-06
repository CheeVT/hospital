//import {catProd} from "./Config"

class Doctor {
    firstName: string;
    lastName: string;
    specialty: string;

    constructor(firstName, lastName, specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty;
        console.log('Doctor created: ' + this.firstName + ' ' + this.lastName);
    }

    //Method for make appointment of laboratory examination to patient
    makeAppointment(Patient, Check) {
        console.log('Patient ' + Patient.firstName + ' is appointed to examination on ' + Check.start);
    }

    //Method for results after examination (need to write a condition to method, to determine)
    finishChecks(Patient, Check) {
        //console.log('chekkk', Check)
        if (Check instanceof BloodPressure) {
            Check.highValue = '3';
            console.log('BloodPressure');
        }
        else if (Check instanceof BloodSugarLevel) {
            console.log('BloodSuggar');
        }
    }
}

class Patient {
    firstName: string;
    lastName: string;
    jmbg: number;
    medicalRecord: number;

    constructor(firstName, lastName, jmbg, medicalRecord) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
        console.log('Patient created: ' + this.firstName + ' ' + this.lastName);
    }

    chooseDoctor(Doctor) {
        console.log('Patient ' + this.firstName + ' ' + this.lastName + ' chose ' + Doctor.firstName + ' ' + Doctor.lastName + ' for his doctor.');
        //console.log('Doktor', Doctor.firstName);
    }

}


class LaboratoryExamination {
    start: Date;

    constructor(start) {
        this.start = start;
    }
}

class BloodPressure extends LaboratoryExamination {
    highValue: string;
    lowValue: string;
    puls: string;

    constructor(start, highValue, lowValue, puls) {
        super(start);
        this.highValue = highValue;
        this.lowValue = lowValue;
        this.puls = puls;

        console.log()
    }
}

class BloodSugarLevel extends LaboratoryExamination {
    sugarValue: string;
    lastMeal: Date;

    constructor(start, sugarValue, lastMeal) {
        super(start);
        this.sugarValue = sugarValue;
        this.lastMeal = lastMeal;
    }
}



let milan = new Doctor('Milan', 'Milic', 'Dental');
let dragan = new Patient('Dragan', 'Draganovic', '0705990847542', '092');
dragan.chooseDoctor(milan);

let pregled1 = new BloodPressure(new Date("February 4, 2016 10:13:00"), '', '', '');
//console.log(pregled1);

milan.makeAppointment(dragan, pregled1);
milan.finishChecks(dragan, pregled1);

console.log('AFTER: ', pregled1);


//let bloodPressure = new LaboratoryCheck('blood Pressure');

//document.body.innerHTML = milan.fullname();
//console.log(milan);
//console.log(dragan);