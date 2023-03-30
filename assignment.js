
//The interest of a loan is 5 Naira per day on Hush Company
//James collected the sum of 25,000 Naira from Hush company for the period of 45 days
// The program below simulate the interest James is paying for   specific period, you are to arrange the program
//using the appropriate structure that will run the program correctly 





let company_interest = 5;

let collected_loan = 25000;

let loan_period = 45;

let specific_period = 30;

let compound_interest = collected_loan + (company_interest * specific_period);

let maxi_amount_to_collect = 75000

let customer = "Paul";


let message_1 = `Hello James, you will be paying ${compound_interest} Naira at the end of ${specific_period} days, for collecting a loan of ${collected_loan}`;

let message_2 = `Hello James ,you exceeded your loan period , your loan period should not be more than ${loan_period} days`;

let messsage_3 = `Hello James your loan days should be more than one days`;

let message_4 = `Hello James can not collect more than ${maxi_amount_to_collect} Naira for loan`;

let message_5 = `Hello ${customer}, Only James can collect ,loan from our company;`


if (specific_period < loan_period && specific_period != 1 && collected_loan < maxi_amount_to_collect && "James" == customer) {
   console.log(message_1)
}

if (specific_period > loan_period) {
   console.log(message_2);
}

if (specific_period == 1) {
   console.log(messsage_3);
}

if (collected_loan > maxi_amount_to_collect) {
   console.log(message_4);
}

if (customer!="James") {
   console.log(message_5)
}

