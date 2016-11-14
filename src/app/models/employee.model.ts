export class Employee {
    constructor(
        public FirstName,
        public LastName,
        public isFullTime: boolean,
        public paymentType: string,
        public primaryLanguage: string
    ) { 
        this.primaryLanguage = primaryLanguage == null ? '' : primaryLanguage;
    }
}