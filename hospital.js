//import {catProd} from "./Config"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Doctor = /** @class */ (function () {
    function Doctor(firstName, lastName, specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty;
        console.log('Doctor created: ' + this.firstName + ' ' + this.lastName);
    }
    //Method for make appointment of laboratory examination to patient
    Doctor.prototype.makeAppointment = function (Patient, Check) {
        console.log('Patient ' + Patient.firstName + ' is appointed to examination on ' + Check.start);
    };
    //Method for results after examination (need to write a condition to method, to determine)
    Doctor.prototype.finishChecks = function (Patient, Check) {
        //console.log('chekkk', Check)
        if (Check instanceof BloodPressure) {
            Check.highValue = '3';
            console.log('BloodPressure');
        }
        else if (Check instanceof BloodSugarLevel) {
            console.log('BloodSuggar');
        }
    };
    return Doctor;
}());
var Patient = /** @class */ (function () {
    function Patient(firstName, lastName, jmbg, medicalRecord) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
        console.log('Patient created: ' + this.firstName + ' ' + this.lastName);
    }
    Patient.prototype.chooseDoctor = function (Doctor) {
        console.log('Patient ' + this.firstName + ' ' + this.lastName + ' chose ' + Doctor.firstName + ' ' + Doctor.lastName + ' for his doctor.');
        //console.log('Doktor', Doctor.firstName);
    };
    return Patient;
}());
var LaboratoryExamination = /** @class */ (function () {
    function LaboratoryExamination(start) {
        this.start = start;
    }
    return LaboratoryExamination;
}());
var BloodPressure = /** @class */ (function (_super) {
    __extends(BloodPressure, _super);
    function BloodPressure(start, highValue, lowValue, puls) {
        var _this = _super.call(this, start) || this;
        _this.highValue = highValue;
        _this.lowValue = lowValue;
        _this.puls = puls;
        console.log();
        return _this;
    }
    return BloodPressure;
}(LaboratoryExamination));
var BloodSugarLevel = /** @class */ (function (_super) {
    __extends(BloodSugarLevel, _super);
    function BloodSugarLevel(start, sugarValue, lastMeal) {
        var _this = _super.call(this, start) || this;
        _this.sugarValue = sugarValue;
        _this.lastMeal = lastMeal;
        return _this;
    }
    return BloodSugarLevel;
}(LaboratoryExamination));
var milan = new Doctor('Milan', 'Milic', 'Dental');
var dragan = new Patient('Dragan', 'Draganovic', '0705990847542', '092');
dragan.chooseDoctor(milan);
var pregled1 = new BloodPressure(new Date("February 4, 2016 10:13:00"), '', '', '');
//console.log(pregled1);
milan.makeAppointment(dragan, pregled1);
milan.finishChecks(dragan, pregled1);
console.log('AFTER: ', pregled1);
//let bloodPressure = new LaboratoryCheck('blood Pressure');
//document.body.innerHTML = milan.fullname();
//console.log(milan);
//console.log(dragan);
