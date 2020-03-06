
export class DetailsService{
    details = [
        {
          "name": "Latha",
          "qualification": "B.tech"
        },
        {
          "name": "Bhargavi",
          "qualification": "M.tech"
        },
        {
          "name": "Srivani",
          "qualification": "M.B.A"
        },
        {
          "name": "Shirisha",
          "qualification": "B.com"
        }        
    ];

    message: string;
    number: number = 1;

    constructor(){
      this.message = "service message from DetailsService";
      this.number = this.number + 1;
    }
    
}